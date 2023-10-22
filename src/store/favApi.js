import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { setAccessToken, setStatus } from "./user.slice";


const baseQueryWithReauth = async (args, api, extraOptions) => {
  console.debug(args, api, extraOptions)
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {

      const token = getState().user.accessToken;
      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      
      return headers;
    },
  });
  api.dispatch(setStatus("loading"))
  const result = await baseQuery(args, api, extraOptions);

  console.debug("Результат первого запроса", { result });
  if (result?.error?.status !== 401) {
    api.dispatch(setStatus("filfilled"))
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    api.dispatch(setAccessToken(null));
    window.location.navigate("/login");
  };

  const auth  = api.getState().user;
  console.log(auth.refreshToken)

  console.debug("Данные пользователя в сторе",  auth );
  if (!auth.refreshToken) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refreshToken,
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult.data.access) {
    return forceLogout();
  }

  api.dispatch(setAccessToken({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);
  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug(`Повторный запрос завершился успешно `);
  api.dispatch(setStatus("filfilled"))
  return retryResult;
};


export const favoriteApi = createApi ({
  reducerPath: "favoriteApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
      getFavorites: build.query({
          query: () => ({
            url: "catalog/track/favorite/all",
            method: "GET"
          }),
      }),
      addFavorites: build.mutation({
        query: (id) => ({
          method: "POST",
          url: `catalog/track/${id}/favorite`,

        })
      }),
      deleteFavorites: build.mutation({
        query: (body) => ({
          url: `catalog/track/${body}/favorite`,
          method: "DELETE",
          body,
        })
      })
  })
})

export const { useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation } = favoriteApi;
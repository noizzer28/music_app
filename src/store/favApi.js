import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { setAccessToken, setRefreshToken } from "./user.slice";
import { setInitialState } from "./track.slice";



const baseQueryWithReauth = async (args, api, extraOptions) => {

  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {

      const token = getState().user.accessToken;
      // console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  // console.debug("Результат первого запроса", { result });
  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    api.dispatch(setInitialState())
    localStorage.clear()
    api.dispatch(setRefreshToken(null))
    window.location.navigate("/login")
  };

  const auth  = api.getState().user;


  // console.debug("Данные пользователя в сторе",  auth );
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

  // console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult?.data?.access) {
    return forceLogout();
  } else {
    api.dispatch(setAccessToken({ ...auth, access: refreshResult.data.access }));
  
    const retryResult = await baseQuery(args, api, extraOptions);
    if (retryResult?.error?.status === 401) {
      return forceLogout();
    }
  
    // console.debug(`Повторный запрос завершился успешно `);
  
    return retryResult;
  }

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
          transformResponse: (response) => {
            const updatedResponse = response.map((track) => ({
              ...track,
              isLiked: true
            }));
            return updatedResponse;
          },
      }),
      addFavorites: build.mutation({
        query: (body) => ({ 
          method: "POST",
          url: `catalog/track/${body}/favorite/`,
          body,
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
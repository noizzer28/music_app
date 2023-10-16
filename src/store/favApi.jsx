import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const favoriteApi = createApi ({
    reducerPath: "favoriteApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/"}),
    endpoints: (build) => ({
        getFavorites: build.query({
            query: () => "favorite/all",
        })
    })
})



export const { useGetFavoritesQuery } = favoriteApi;

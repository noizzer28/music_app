import { configureStore } from "@reduxjs/toolkit";
import trackReducer from './track.slice'
import userReducer from "./user.slice";
import { favoriteApi } from "./favApi";

export default configureStore({
    reducer: {
        tracks: trackReducer,
        user: userReducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(favoriteApi.middleware) 
})
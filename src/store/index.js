import { configureStore } from "@reduxjs/toolkit";
import trackReducer from './track.slice'
import userReducer from "./user.slice";

export default configureStore({
    reducer: {
        tracks: trackReducer,
        user: userReducer,
    },
})
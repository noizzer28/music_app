import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        password: '',
        refreshToken: null,
        accessToken: null
    },
    reducers: {
        setPassword(state, action) {
            state.password = action.payload;
        },
        setLogin (state, action) {
            state.login = action.payload;
        },
        setRefreshToken (state, action) {
            state.refreshToken = action.payload;
        },
        setAccessToken (state, action) {
            state.accessToken = action.payload;
        },

    }
})

export const {setPassword, setLogin, setAccessToken, setRefreshToken} = userSlice.actions;
export default userSlice.reducer;

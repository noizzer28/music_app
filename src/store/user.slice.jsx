import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        password: '',
    },
    reducers: {
        setPassword(state, action) {
            state.password = action.payload;
        },
        setLogin (state, action) {
            state.login = action.payload;
        },

    }
})

export const {setPassword, setLogin} = userSlice.actions;
export default userSlice.reducer;

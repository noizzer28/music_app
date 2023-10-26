import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const FetchRefreshToken = createAsyncThunk(
    'user/fetchRefreshToken',
    async function({login, password}) {
        try {
            const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/`, {
                method: "POST",
                body: JSON.stringify({
                  email: `${login}`,
                  password: `${password}`,
              }),
                headers: {
                  "content-type": "application/json",
                },
              })
              console.log(response)
              const data = await response.json()
              console.log(data)
              return data
            
        } catch (error) {
             return rejectWithValue(error.message)
        }
    }
)

// export const FetchAccessToken = createAsyncThunk(
//     'user/refreshAccessToken',
//     async function(refreshToken, {rejectWithValue}) {
//         try {
//             const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
//                 method: "POST",
//                 body: JSON.stringify({
//                 refresh: refreshToken
//             }),
//                 headers: {
//                 "content-type": "application/json",
//                 },
//             })
//             if (!response.ok) {
//                 throw new Error(`Устаревший токен: ${response.statusText}`)
//             }
//             const data = await response.json()  
//             return data
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        password: '',
        refreshToken: localStorage.getItem("token"),
        accessToken: null,
        status: null,
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
        setAccessToken(state, action) {
            state.accessToken = action.payload.access
        },
        setStatus (state, action) {
            state.status = action.payload
        }

    },
    extraReducers: {

        [FetchRefreshToken.fulfilled]: (state, action) => {
            state.accessToken = action.payload.access
            state.refreshToken = action.payload.refresh
        },
    }
})

export const {setPassword, setLogin, setAccessToken, setRefreshToken, setIsActiveToken, setStatus } = userSlice.actions;
export default userSlice.reducer;

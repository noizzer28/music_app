import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const FetchRefreshToken = createAsyncThunk(
    'user/fetchRefreshToken',
    async function() {
        const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/`, {
            method: "POST",
            body: JSON.stringify({
              email: `${state.login}`,
              password: `${state.password}`,
          }),
            headers: {
              "content-type": "application/json",
            },
          })
          const data = await response.json()
          return data
    }
)

export const FetchAccessToken = createAsyncThunk(
    'user/refreshAccessToken',
    async function() {
        
        const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
            method: "POST",
            body: JSON.stringify({
            refresh: `${state.refreshToken}`
        }),
            headers: {
            "content-type": "application/json",
            },
        })
        const data = await response.json()
        return data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        password: '',
        refreshToken: null,
        accessToken: null,
        status: null,
        tokenActive: false
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
        }

    },
    extraReducers: {
        [FetchRefreshToken.pending]: (state) => {
            state.status = "loading"
            state.error = null
        },
        [FetchRefreshToken.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.refreshToken = action.payload
        },
        [FetchRefreshToken.rejected]: (state, action) => {
            state.status ="rejected"
            state.error = action.payload
        },

        [FetchRefreshToken.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.tokenActive = true
            setTimeout(() => {
                state.tokenActive = false
            }, 200000);
            state.accessToken = action.payload
        },
        [FetchRefreshToken.rejected]: (state, action) => {
            state.status ="rejected"
            state.error = action.payload
        },
    }
})

export const {setPassword, setLogin, setAccessToken, setRefreshToken } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const FetchRefreshToken = createAsyncThunk(
    'user/fetchRefreshToken',
    async function({login, password}) {
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
          const data = await response.json()
          console.log(data)
          return data
    }
)

export const FetchAccessToken = createAsyncThunk(
    'user/refreshAccessToken',
    async function(refreshToken) {
        
        const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
            method: "POST",
            body: JSON.stringify({
            refresh: `${refreshToken}`
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
        refreshToken: localStorage.getItem("token"),
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
            state.accessToken = action.payload.access
            state.refreshToken = action.payload.refresh
        },
        [FetchRefreshToken.rejected]: (state, action) => {
            state.status ="rejected"
            state.error = action.payload
        },

        [FetchAccessToken.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.tokenActive = true
            setTimeout(() => {
                state.tokenActive = false
            }, 200000);
            state.accessToken = action.payload.access
        },
        [FetchAccessToken.rejected]: (state, action) => {
            state.status ="rejected"
            state.error = action.payload
        },
    }
})

export const {setPassword, setLogin, setAccessToken, setRefreshToken } = userSlice.actions;
export default userSlice.reducer;

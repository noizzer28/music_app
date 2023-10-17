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
    async function(refreshToken, {rejectWithValue}) {
        try {
            const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
                method: "POST",
                body: JSON.stringify({
                refresh: refreshToken
            }),
                headers: {
                "content-type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error(`Устаревший токен: ${response.statusText}`)
            }
            const data = await response.json()  
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }


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
        isActiveToken: false
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
        setIsActiveToken(state, action) {
            if (state.isActiveToken) {
                setTimeout(() => {
                    state.isActiveToken == false
                }, 200000);
            }
            // state.isActiveToken = action.payload
        }

    },
    extraReducers: {

        [FetchRefreshToken.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.accessToken = action.payload.access
            state.refreshToken = action.payload.refresh
        },
        [FetchAccessToken.pending]: (state) => {
            state.status = "loading"
            state.error = null
        },
        [FetchAccessToken.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.accessToken = action.payload.access
            state.isActiveToken = true
        },
        [FetchAccessToken.rejected]: (state, action) => {
            state.status ="rejected"
            state.error = action.payload
        },
    }
})

export const {setPassword, setLogin, setAccessToken, setRefreshToken, setIsActiveToken } = userSlice.actions;
export default userSlice.reducer;

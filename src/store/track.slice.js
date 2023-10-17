import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchFavorites = createAsyncThunk(
    "tracks/fetchFavorites",
    async function(accessToken) {
        const responce = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const data = await responce.json()
        return data;
    }
)

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        currentTrack: null,
        currentIndex: null,
        isPlaying: false,
        isShuffled: false,
        shuffledTracks: [],
        status: null,
        error: null,
        favoriteTracks: [],
        currentPlaylist: []
    },
    reducers: {
        setCurrentPlayList(state, action){
            state.currentPlaylist = action.payload
        },
        setTracks(state, action) {
            state.tracks = action.payload;
        },
        setCurrentTrack (state, action) {
            state.currentTrack = action.payload;
        },
        setCurrentIndex(state, action) {
            state.currentIndex = action.payload
        },
        toggleShuffle(state, action) {
            state.isShuffled = action.payload
        },
        setIsPlaying(state, action) {
            state.isPlaying = action.payload
        },
        setShuffledTracks(state, action) {
            state.shuffledTracks = action.payload
        },
        prevTrack(state) {

            if (state.isShuffled) {
                if (state.currentIndex === 0) {
                    state.currentIndex = state.shuffledTracks.length - 1
                    state.currentTrack = state.shuffledTracks[state.currentIndex]
                }
                if (state.currentIndex !== null && state.currentIndex > 0 ) {
                    state.currentIndex--
                    state.currentTrack = state.shuffledTracks[state.currentIndex]
                }
            } else {
                if (state.currentIndex !== null && state.currentIndex > 0 ) {
                    state.currentIndex--
                    state.currentTrack = state.currentPlaylist[state.currentIndex]
                }
            }

        },
        nextTrack(state) {
            if (state.currentIndex < state.currentPlaylist.length -1) {
                state.currentIndex++
            } 
            if (state.isShuffled) {
                if (state.currentIndex === state.shuffledTracks.length - 1) {
                    state.currentIndex = 0
                }
                state.currentTrack = state.shuffledTracks[state.currentIndex]
            } else {
                state.currentTrack = state.currentPlaylist[state.currentIndex]
            }
        },

    },
    extraReducers: {
        [fetchFavorites.pending]: (state) => {
            state.status = "loading"
            state.error = null
        },
        [fetchFavorites.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.favoriteTracks = action.payload
        },
        [fetchFavorites.rejected]: (state, action) => {
            state.status ="rejected"
            state.error = action.payload
        },
    }
})

export const {setTracks, setIsPlaying,setShuffledTracks, setCurrentTrack, setCurrentIndex, toggleShuffle, prevTrack, nextTrack, setCurrentPlayList} = trackSlice.actions;
export default trackSlice.reducer;

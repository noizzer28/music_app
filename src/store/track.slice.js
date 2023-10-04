import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        currentTrack: null,
        currentIndex: null,
        isPlaying: false,
        isShuffled: false,
        shuffledTracks: [],
    },
    reducers: {
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
        prevTrack(state, action) {
            if (state.isShuffled) {
                if (state.currentIndex !== null && state.currentIndex > 0 ) {
                    state.currentIndex--
                    state.currentTrack = state.shuffledTracks[state.currentIndex]
                }
            } else {
                if (state.currentIndex !== null && state.currentIndex > 0 ) {
                    state.currentIndex--
                    state.currentTrack = state.tracks[state.currentIndex]
                }
            }

        },
        nextTrack(state, action) {
            if (state.isShuffled) {
                if (state.currentIndex !== null && state.currentIndex < state.tracks.length -1) {
                    state.currentIndex++
                    state.currentTrack = state.shuffledTracks[state.currentIndex]
                }
            } else {
                if (state.currentIndex !== null && state.currentIndex < state.tracks.length -1) {
                    state.currentIndex++
                    state.currentTrack = state.tracks[state.currentIndex]
                }
            }

        }
    }
})

export const {setTracks, setIsPlaying,setShuffledTracks, setCurrentTrack, setCurrentIndex, toggleShuffle, prevTrack, nextTrack} = trackSlice.actions;
export default trackSlice.reducer;

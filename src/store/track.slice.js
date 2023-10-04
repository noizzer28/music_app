import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        currentTrack: null,
        currentIndex: null,
        isPlaying: false
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
            
        },
        setIsPlaying(state, action) {
            state.isPlaying = action.payload
        },
        prevTrack(state, action) {
            if (state.currentIndex !== null && state.currentIndex > 0 ) {
                state.currentIndex--
                state.currentTrack = state.tracks[state.currentIndex]
            }
        },
        nextTrack(state, action) {
            if (state.currentIndex !== null && state.currentIndex < state.tracks.length -1) {
                state.currentIndex++
                state.currentTrack = state.tracks[state.currentIndex]
            }
        }
    }
})

export const {setTracks, setIsPlaying, setCurrentTrack, setCurrentIndex, toggleShuffle, prevTrack, nextTrack} = trackSlice.actions;
export default trackSlice.reducer;

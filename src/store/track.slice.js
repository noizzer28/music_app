import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        currentTrack: null,
        currentIndex: null,
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
        toggleShuffle(state, action) {},
        prevTrack(state, action) {},
        nextTrack(state, action) {
            state.currentIndex++
            if (state.currentTrack.id !== null && state.currentTrack.id < state.tracks.length - 1) {
                state.currentTrack = state.tracks[state.currentIndex]
            }
        }
    }
})

export const {setTracks, setCurrentTrack, setCurrentIndex, toggleShuffle, prevTrack, nextTrack} = trackSlice.actions;
export default trackSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: []
    },
    reducers: {
        setTracks(state, action) {
            console.log(state)
            console.log(action)
            state.tracks = action.payload;
        },
        setCurrentTrack (state, action) {
            console.log(state)
            console.log(action)
        },
        toggleShuffle(state, action) {},
        prevTrack(state, action) {},
        nextTrack(state, action) {}
    }
})

export const {setTracks, setCurrentTrack, toggleShuffle, prevTrack, nextTrack} = trackSlice.actions;
export default trackSlice.reducer;
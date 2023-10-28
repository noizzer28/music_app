import {  createSlice } from "@reduxjs/toolkit";


    const trackSlice = createSlice({
        name: 'tracks',
        initialState: {
            tracks: [],
            currentTrack: null,
            currentIndex: null,
            isPlaying: false,
            isShuffled: false,
            shuffledTracks: [],
            currentPlaylist: [],
            likedTracks: [],
        },
        reducers: {
        setInitialState(state = initialState) {
            state.tracks = [];
            state.currentTrack =  null;
            state.currentIndex = null;
            state.isPlaying = false;
            state.isShuffled = false;
            state.shuffledTracks = [];
            state.currentPlaylist = [];
            state.likedTracks = [];
        },
        setLikedTracks(state) { 
            state.likedTracks = state.tracks.filter((track) => {
                if (track.isLiked) {
                    return track
                }
            })
        },
        setCurrentPlayList(state, action){
            state.currentPlaylist = action.payload
        },
        setTracks(state, action) {
            const login = action.payload.login
            state.tracks = action.payload.tracks.map((track) => {
                if(track.stared_user.some((obj) => obj.username  === login)){
                return {...track, isLiked: true}
                }
                return {...track, isLiked: false}
            })
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
        toggleLike(state, action) {
            const { song, isLiked } = action.payload;

            const updated = state.tracks.map((track) => {
              if (track.id === song.id) {
                return { ...track, isLiked };
              } else {
                return track;
              }
            });
            state.tracks = updated
            state.likedTracks = updated.filter((track) => {
                if (track.isLiked) {
                    return track
                }
            })
            if (state.currentTrack?.id === song.id) {
                state.currentTrack = {...state.currentTrack, isLiked}
            }
        },
        setSortedTracks(state, action) {
            const payload = action.payload
            console.log(payload)
            // state.tracks = state.tracks.map((track) => {
            //     return 
            // })
        },
        setFilteredTracks(state, action) {

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
})

export const {setTracks,
        setInitialState, 
        setLikedTracks, 
        toggleLike, 
        setIsPlaying,
        setShuffledTracks, 
        setCurrentTrack, 
        setCurrentIndex, 
        toggleShuffle, 
        prevTrack, 
        nextTrack, 
        setCurrentPlayList,
        setSortedTracks,
        setFilteredTracks} = trackSlice.actions;
export default trackSlice.reducer;

import {  createSlice } from "@reduxjs/toolkit";


    const trackSlice = createSlice({
        name: 'tracks',
        initialState: {
            filteredTracks: [],
            tracks: [],
            currentTrack: null,
            currentIndex: null,
            isPlaying: false,
            isShuffled: false,
            shuffledTracks: [],
            currentPlaylist: [],
            likedTracks: [],
            authors: [],
            genres: [],
            activeAuthors: [],
            activeGenre: [],
            filteredByAuthor: [],
            filteredByGenre: [],
        },
        reducers: {
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
            const tracks = action.payload.tracks
            state.tracks = tracks.map((track) => {
                if(track.stared_user.some((obj) => obj.username  === login)){
                return {...track, isLiked: true}
                }
                return {...track, isLiked: false}
            })
            state.authors = [...new Set(tracks.map((track) => track.author))];
            state.genres = [...new Set(tracks.map((track) => track.genre))];
            state.filteredTracks = [...state.tracks]

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

            state.tracks = state.tracks.map((track) => {
              if (track.id === song.id) {
                return { ...track, isLiked };
              } else {
                return track;
              }
            });
            state.filteredTracks = state.filteredTracks.map((track) => {
                if (track.id === song.id) {
                    return { ...track, isLiked };
                } else {
                    return track;
                }
            });
            
           
            state.likedTracks =  state.tracks.filter((track) => {
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
                state.tracks = state.tracks.sort((a, b) => {
                    const dateA = new Date(a.release_date)
                    const dateB = new Date(b.release_date)
                    if (payload === "Сначала старые") {
                        return dateA - dateB
                    } else if (payload === "Сначала новые") {
                        return dateB - dateA
                    } else {
                        return a.id - b.id
                    }
                })

        },
        setFilteredAuthor(state, action) {
            const payload = action.payload;
            console.log(payload)
            if (!state.activeAuthors.includes(payload)) {
                state.activeAuthors.push(payload);
            } else {
                state.activeAuthors = state.activeAuthors.filter(item => item !== payload);
            }
        
            state.filteredByAuthor = state.tracks.filter(track => state.activeAuthors.includes(track.author));
            
            state.filteredTracks =  state.activeAuthors.filter(item => state.activeGenre.includes(item));

        },
        
        setFilteredGenre(state, action) {
            const payload = action.payload;
            console.log(payload)

            
            if (!state.activeGenre.includes(payload)) {
                state.activeGenre.push(payload);
            } else {
                state.activeGenre = state.activeGenre.filter(item => item !== payload);
            }
        
            state.filteredByGenre = state.tracks.filter(track => state.activeGenre.includes(track.genre));
            
            state.filteredTracks = state.activeGenre.filter(item => state.activeAuthors.includes(item));
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
        setInitialState(state = initialState) {
            state.tracks = [];
            state.currentTrack =  null;
            state.currentIndex = null;
            state.isPlaying = false;
            state.isShuffled = false;
            state.shuffledTracks = [];
            state.currentPlaylist = [];
            state.likedTracks = [];
            state.activeAuthors = [];
            state.activeGenre = [];
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
        setFilteredGenre,
        setFilteredAuthor} = trackSlice.actions;
export default trackSlice.reducer;



function combineFilters(filteredByAuthor, filteredByGenre) {
    const filteredSet = new Set([...filteredByAuthor, ...filteredByGenre]);
    return Array.from(filteredSet);
}
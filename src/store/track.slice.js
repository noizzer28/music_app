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
            activeSearch: [],
        },
        reducers: {
        setSearch (state,  action) {
            state.activeSearch  = action.payload.toLowerCase()
        },
        setSelected (state,  action) {
            const payload = action.payload
            state.filteredTracks = state.tracks.filter((track) => {
                if ( track.genre == payload ) {
                    return track
                }
               
            })

        },
        
        setFilteredTracks(state, action) {
            let filter = state.tracks
            if (state.activeAuthors.length > 0) {
                const filteredByAuthor = state.tracks.filter(track => {
                    if (state.activeAuthors.includes(track.author)) {
                        return track
                    }
                }); 
                filter = filteredByAuthor
            }
            if (state.activeGenre.length > 0) {
                console.log('doing genre here')
                const filteredByGenre = filter.filter(track => {
                    if (state.activeGenre.includes(track.genre)) {
                        return track
                    }
                }); 
                filter = filteredByGenre
            }

            if (state.activeSearch) {
                const searched = filter.filter((track) => {
                    if(track.name.toLowerCase().includes(state.activeSearch))  {
                        return track
                    }
                })
                filter = searched
            }

            state.filteredTracks = filter
        },
        setDeactivedFilters(state) {
            state.activeAuthors = []
            state.activeGenre = []
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
                state.filteredTracks = state.filteredTracks.sort((a, b) => {
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
            if (!state.activeAuthors.includes(payload)) {
                state.activeAuthors.push(payload);
            } else {
                state.activeAuthors = state.activeAuthors.filter(item => item !== payload);
            }
            console.log(state.activeAuthors.slice())
        },
        setFilteredGenre(state, action) {
            const payload = action.payload;
            if (!state.activeGenre.includes(payload)) {
                state.activeGenre.push(payload);
            } else {
                state.activeGenre = state.activeGenre.filter(item => item !== payload);
            }
            
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
        setFilteredAuthor,
        setDeactivedFilters,
        setFilteredTracks,
        setSearch,
        setSelected} = trackSlice.actions;
export default trackSlice.reducer;


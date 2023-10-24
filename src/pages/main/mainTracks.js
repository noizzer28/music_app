
import { TracksTitle } from "../../components/center/title"
import SkeletonTrack from "../../components/skeleton/skeleton";
import PlaylistFilter from "../../components/filter/filter";
import SimpleBar from 'simplebar-react';
import * as S from "./app.styles"
import PlaylistItems from  "../../components/tracks/Playlist"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useOutletContext } from "react-router";
import { setLikedTracks } from "../../store/track.slice";
import { useDispatch } from "react-redux";


export const MainTracks = () =>  {
    const dispatch = useDispatch()
    const AllTracks = useSelector(state => state.tracks.tracks)
    const login = useSelector(state => state.user.login)
    const [trackError, loading] = useOutletContext()
    
    // const setFavorites = (tracks) => {
    //     for (let i = 0; i < tracks.length; i++) { 
    //       if (tracks[i].stared_user?.find((user) => user.username === login)) {
    //         console.log('found')
    //         dispatch(setLikedTracks(tracks[i]))
    //         return tracks[i]
    //       }
    //     }
    // }
    // setFavorites(AllTracks)
    return    <>
    <S.SenterblockHeader>Треки</S.SenterblockHeader>
        <PlaylistFilter/>
        <S.CenterblockContent>
        <TracksTitle></TracksTitle>
        {trackError ? <div>{trackError}</div>  : 
        <S.ContentPlaylist>
        {loading ? <SkeletonTrack/> :
        <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
            <PlaylistItems tracks={AllTracks} status={'main'}/>
            </SimpleBar>}
        </S.ContentPlaylist>}
    </S.CenterblockContent>
    </>
}
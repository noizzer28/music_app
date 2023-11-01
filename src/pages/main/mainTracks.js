
import { TracksTitle } from "../../components/center/title"
import SkeletonTrack from "../../components/skeleton/skeleton";
import PlaylistFilter from "../../components/filter/filter";
import SimpleBar from 'simplebar-react';
import * as S from "./app.styles"
import PlaylistItems from  "../../components/tracks/Playlist"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTracks } from "../../api";
import { setTracks, setDeactivedFilters } from "../../store/track.slice";





export const MainTracks = () =>  {
    const dispatch = useDispatch()
    const filteredTracks = useSelector(state => state.tracks.filteredTracks)
    const login = useSelector(state => state.user.login)
    const [loading, setLoading] = useState(true)
    const [trackError, SetTrackError] = useState("")

    useEffect(()=> {
        dispatch(setDeactivedFilters())
        getTracks()
          .then((tracks) => {
             dispatch(setTracks({login: login, tracks: tracks}))
          }).then(()=> {
              setLoading(false)
        }).catch((error) => {
          setLoading(false)
          SetTrackError(`Ошибка соединения с сервером: ${error.message}`)
        })
        },[dispatch])
    
    return    <>
    <S.SenterblockHeader>Треки</S.SenterblockHeader>
        <PlaylistFilter/>
        <S.CenterblockContent>
        <TracksTitle></TracksTitle>
        {trackError ? <div>{trackError}</div>  : 
        <S.ContentPlaylist>
        {loading ? <SkeletonTrack/> :
        <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
            <PlaylistItems tracks={filteredTracks} status={'main'}/>
            </SimpleBar>}
        </S.ContentPlaylist>}
    </S.CenterblockContent>
    </>
}
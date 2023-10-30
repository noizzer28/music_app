
import { TracksTitle } from "../../components/center/title"
import SkeletonTrack from "../../components/skeleton/skeleton";
import PlaylistFilter from "../../components/filter/filter";
import SimpleBar from 'simplebar-react';
import * as S from "./app.styles"
import PlaylistItems from  "../../components/tracks/Playlist"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTracks } from "../../api";
import { setTracks } from "../../store/track.slice";




export const MainTracks = () =>  {
    const filteredTracks = useSelector(state => state.tracks.filteredTracks)
    const dispatch = useDispatch()
    const login = useSelector(state => state.user.login)
    const [loading, setLoading] = useState(true)
    const [trackError, SetTrackError] = useState("")
    console.log('mainTracks')
    useEffect(()=> {
        console.log('загружаю треки')
        getTracks()
          .then((tracks) => {
            console.log("tracks dispatch")
             dispatch(setTracks({login: login, tracks: tracks}))
          }).then(()=> {
            console.log('setloading')
              setLoading(false)
        }).catch((error) => {
          setLoading(false)
          console.log("error")
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
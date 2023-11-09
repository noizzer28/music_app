import { useParams } from "react-router-dom"
import { SELECTED } from "./selected";
import { PlaylistItems } from "../../components/tracks/Playlist";
import { TracksTitle } from "../../components/center/title"
import SimpleBar from 'simplebar-react';
import * as S from '../main/main.styles'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSelected, setTracks } from "../../store/track.slice";
import { getTracks } from "../../api";
import SkeletonTrack from "../../components/skeleton/skeleton";
import { useState } from "react";


export const Category = () => {
    const {id} = useParams()
    const playlist = SELECTED.find((playlist) => playlist.id === Number(id));
    const filteredTracks = useSelector(state => state.tracks.filteredTracks)
    const login = useSelector(state => state.user.login)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [trackError, SetTrackError] = useState("")
    
    
    useEffect(() => {
        setLoading(true)
        getTracks()
        .then((tracks) => {
           dispatch(setTracks({login: login, tracks: tracks}))
        }).then(()=> {
            dispatch(setSelected(playlist.playlist))
            setLoading(false);
      }).catch((error) => {
        setLoading(false)
        SetTrackError(`Ошибка соединения с сервером: ${error.message}`)
      })
    }, [playlist]);
    
    
    return    <>
    <S.SenterblockHeader>{playlist.playlist}</S.SenterblockHeader>
        <S.CenterblockContent>
        <TracksTitle></TracksTitle>
        {trackError ? <div>{trackError}</div>  : 
        <S.ContentPlaylist>
        {loading ? <SkeletonTrack/> :
        <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
            <PlaylistItems tracks={filteredTracks} status={'category'}/>
            </SimpleBar>}
        </S.ContentPlaylist>}
    </S.CenterblockContent>
    </>

}
import { useParams } from "react-router-dom"
import { SELECTED } from "./selected";
import { PlaylistItems } from "../../components/tracks/Playlist";
import { TracksTitle } from "../../components/center/title"
import SimpleBar from 'simplebar-react';
import * as S from '../main/main.styles'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSelected } from "../../store/track.slice";


export const Category = () => {
    const {id} = useParams()
    const filteredTracks = useSelector(state => state.tracks.filteredTracks)
    const playlist = SELECTED.find((playlist) => playlist.id === Number(id));
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setSelected(playlist.playlist))
        
    }, [playlist]);

    
    return    <>
    <S.SenterblockHeader>{playlist.playlist}</S.SenterblockHeader>
        <S.CenterblockContent>
        <TracksTitle></TracksTitle>
        <S.ContentPlaylist>
        <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
            <PlaylistItems tracks={filteredTracks} status={'main'}/>
            </SimpleBar>
        </S.ContentPlaylist>
    </S.CenterblockContent>
    </>

}
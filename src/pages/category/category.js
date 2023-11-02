import { useParams } from "react-router-dom"
import { SELECTED } from "./selected";
import PlaylistItems from "../../components/tracks/Playlist";
import { TracksTitle } from "../../components/center/title"
import SkeletonTrack from "../../components/skeleton/skeleton";
import PlaylistFilter from "../../components/filter/filter";
import SimpleBar from 'simplebar-react';
import * as S from '../main/app.styles'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
    <S.SenterblockHeader className="tofind">{playlist.playlist}</S.SenterblockHeader>
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
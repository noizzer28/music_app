import PlaylistItems from "../../components/tracks/Playlist"
import { TracksTitle } from "../../components/center/title";
import SkeletonTrack from "../../components/skeleton/skeleton";
import SimpleBar from 'simplebar-react';
import * as S from "../../pages/main/app.styles"
import { useSelector } from "react-redux";
import { useGetFavoritesQuery } from "../../store/favApi";
import { useDispatch } from "react-redux";
import { setLikedTracks } from "../../store/track.slice";
import { useEffect } from "react";




export const Favorites =() => {
    const dispatch = useDispatch()
    const  likedTracks = useSelector(state => state.tracks.likedTracks) 


    const { data = [], isLoading, isSuccess, error } = useGetFavoritesQuery();

    useEffect(() => {
      if (isSuccess) {
        dispatch(setLikedTracks())
      }
    }, [isSuccess, data]);


   
        return (    
            <div>
            <S.SenterblockHeader>Мои треки</S.SenterblockHeader>
                <S.CenterblockContent>
                <TracksTitle></TracksTitle>
                {error ? <div style={{color: "red", fontSize: "24px"}}>{error}</div>  : 
                <S.ContentPlaylist>
                {isLoading ? <SkeletonTrack/> :
                <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
                    <PlaylistItems tracks={likedTracks} status={`favorite`}/>
                </SimpleBar>}
            </S.ContentPlaylist>}
        </S.CenterblockContent>
        </div>
    )
}


    

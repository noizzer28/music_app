import PlaylistItems from "../../components/tracks/Playlist"
import { TracksTitle } from "../../components/center/title";
import SkeletonTrack from "../../components/skeleton/skeleton";
import SimpleBar from 'simplebar-react';
import * as S from "../../pages/main/app.styles"
import { FetchAccessToken, setIsActiveToken } from "../../store/user.slice";
import { fetchFavorites } from "../../store/track.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../store/user.slice";


export const Favorites =() => {
    const dispatch = useDispatch()
    const favoriteTracks = useSelector(state => state.tracks.favoriteTracks)
    const isActiveToken = useSelector(state => state.user.isActiveToken)
    const refreshToken = useSelector(state => state.user.refreshToken)
    const {status, error} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(setRefreshToken(localStorage.getItem("token")))

        const fetchData = async () => {
                try {
                    const data = await dispatch(FetchAccessToken(refreshToken))
                    if (!data.error) {
                        dispatch(setAccessToken(data.payload.access))
                        dispatch(fetchFavorites(data.payload.access))
                    }
                } catch (error) {
                    console.error(error)
                }
        }
        fetchData()
        
    }, [dispatch]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setIsActiveToken(false))
        }, 200000);
    }, [isActiveToken]);

    return (
        <div>
        <S.SenterblockHeader>Мои треки</S.SenterblockHeader>
            <S.CenterblockContent>
            <TracksTitle></TracksTitle>
            {error ? <div style={{color: "red", fontSize: "24px"}}>{error}</div>  : 
            <S.ContentPlaylist>
            {status === "loading" ? <SkeletonTrack/> :
            <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
                <PlaylistItems tracks={favoriteTracks} status={`favorite`}/>
                </SimpleBar>}
            </S.ContentPlaylist>}
        </S.CenterblockContent>
        </div>
    )
}

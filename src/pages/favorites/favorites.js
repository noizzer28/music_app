import PlaylistItems from "../../components/tracks/Playlist"
import { TracksTitle } from "../../components/center/title";
import SkeletonTrack from "../../components/skeleton/skeleton";
import SimpleBar from 'simplebar-react';
import * as S from "../../pages/main/app.styles"
import { useSelector } from "react-redux";
import { useGetFavoritesQuery } from "../../store/favApi";



export const Favorites =() => {
    const {status, error} = useSelector(state => state.user)

    const {data = []} = useGetFavoritesQuery()
 
  

    return (
        <div>
        <S.SenterblockHeader>Мои треки</S.SenterblockHeader>
            <S.CenterblockContent>
            <TracksTitle></TracksTitle>
            {error ? <div style={{color: "red", fontSize: "24px"}}>{error}</div>  : 
            <S.ContentPlaylist>
            {status === "loading" ? <SkeletonTrack/> :
            <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
                <PlaylistItems tracks={data} status={`favorite`}/>
                </SimpleBar>}
            </S.ContentPlaylist>}
        </S.CenterblockContent>
        </div>
    )
}


    // useEffect(() => {
    //     dispatch(setRefreshToken(localStorage.getItem("token")))

    //     const fetchData = async () => {
    //             try {
    //                 const data = await dispatch(FetchAccessToken(refreshToken))
    //                 if (!data.error) {
    //                     dispatch(setAccessToken(data.payload.access))
    //                     dispatch(fetchFavorites(data.payload.access))
    //                 }
    //             } catch (error) {
    //                 console.error(error)
    //             }
    //     }
    //     fetchData()
        
    // }, [dispatch]);
    

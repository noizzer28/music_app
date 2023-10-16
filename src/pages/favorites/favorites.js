import PlaylistItems from "../../components/tracks/Playlist"
import { TracksTitle } from "../../components/center/title";
import SkeletonTrack from "../../components/skeleton/skeleton";
import SimpleBar from 'simplebar-react';
import * as S from "../../pages/main/app.styles"
import { useOutletContext } from "react-router";
import { fetchFavorites } from "../../store/track.slice";
import { useEffect } from "react";
import { FetchAccessToken } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../store/user.slice";
import { useState } from "react";


export const Favorites =() => {
    const dispatch = useDispatch()
    const [error, setError] = useState()
    const [loading, setIsLoading] = useState(false)
    const favoriteTracks = useSelector(state => state.tracks.favoriteTracks)
    const refreshToken = useSelector(state => state.user.refreshToken)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            await FetchAccessToken({refreshToken}).then((data) => {
                dispatch(setAccessToken(data.access))   
                dispatch(fetchFavorites(data.access))
                setIsLoading(false)

            }).catch((error) => {
                setError(error)
                console.error(error)
            })
        }
        fetchData()
        
    }, []);


    return (
        <div>
        <S.SenterblockHeader>Мои треки</S.SenterblockHeader>
            <S.CenterblockContent>
            <TracksTitle></TracksTitle>
            {error ? <div>{trackError}</div>  : 
            <S.ContentPlaylist>
            {loading ? <SkeletonTrack/> :
            <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
                <PlaylistItems tracks={favoriteTracks}/>
                </SimpleBar>}
            </S.ContentPlaylist>}
        </S.CenterblockContent>
        </div>
    )
}






    // const favTracks = [
    //     {name: "Guilt", subtitle: "", author:"Nero", id: 1, album:"Welcome Reality", duration_in_seconds: 254 },
    //     {name: "Elektro", subtitle: "", author:"Dynoro, Outwork, Mr. Gee", id: 2, album:"Elektro", duration_in_seconds:567 },
    //     {name: "I’m Fire", subtitle: "", author:"Ali Bakgor", id: 3, album:"I’m Fire", duration_in_seconds: 568 },
    //     {name: "Non Stop", subtitle: "(Remix)", author:"Стоункат, Psychopath", id: 4, album:"Non Stop", duration_in_seconds:123 },
    //     {name: "Run Run", subtitle: "(feat. AR/CO)", author:"Jaded, Will Clarke, AR/CO", id: 5, album:"Run Run", duration_in_seconds:345 },
    //     {name: "Eyes on Fire", subtitle: "(Zeds Dead Remix)", author:"lue Foundation, Zeds Dead", id: 6, album:"Eyes on Fire", duration_in_seconds:322 },
    //     {name: "Mucho Bien", subtitle: "(Hi Profile Remix)", author:"HYBIT, Mr. Black, Offer Nissim, Hi Profile", id: 7, album:"Mucho Bien", duration_in_seconds:98 },
    //     {name: "Knives n Cherries", subtitle: "", author:"minthaze", id: 8, album:"Captivating", duration_in_seconds:11 },
    // ]
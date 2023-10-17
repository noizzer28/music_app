
import { TracksTitle } from "../../components/center/title"
import SkeletonTrack from "../../components/skeleton/skeleton";
import PlaylistFilter from "../../components/filter/filter";
import SimpleBar from 'simplebar-react';
import * as S from "./app.styles"
import PlaylistItems from  "../../components/tracks/Playlist"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useOutletContext } from "react-router";


export const MainTracks = () =>  {
    const AllTracks = useSelector(state => state.tracks.tracks)
    const [trackError, loading] = useOutletContext()
    

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
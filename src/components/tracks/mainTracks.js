
import { TracksTitle } from "../center/title"
import SkeletonTrack from "../skeleton/skeleton";
import PlaylistFilter from "../filter/filter";
import SimpleBar from 'simplebar-react';
import * as S from "../../pages/main/app.styles"
import PlaylistItems from  "./tracks"

export const AllTracks = ({trackError, loading, targetRef}) =>  {

    return    <>
    <S.SenterblockHeader>Треки</S.SenterblockHeader>
        <PlaylistFilter/>
        <S.CenterblockContent>
        <TracksTitle></TracksTitle>
        {trackError ? <div>{trackError}</div>  : 
        <S.ContentPlaylist>
        {loading ? <SkeletonTrack/> :
        <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
            <PlaylistItems targetRef={targetRef}/>
            </SimpleBar>}
        </S.ContentPlaylist>}
    </S.CenterblockContent>
    </>
}
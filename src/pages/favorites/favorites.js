import PlaylistItems from "../../components/tracks/Playlist"
import { TracksTitle } from "../../components/center/title";
import SkeletonTrack from "../../components/skeleton/skeleton";
import SimpleBar from 'simplebar-react';
import * as S from "../../pages/main/app.styles"

export const Favorites =({trackError, loading, targetRef}) => {
    const favTracks = [
        {name: "Guilt", subtitle: "", author:"Nero", id: 1, album:"Welcome Reality", length:"4:44" },
        {name: "Elektro", subtitle: "", author:"Dynoro, Outwork, Mr. Gee", id: 2, album:"Elektro", length:"2:22" },
        {name: "I’m Fire", subtitle: "", author:"Ali Bakgor", id: 3, album:"I’m Fire", length:"2:24" },
        {name: "Non Stop", subtitle: "(Remix)", author:"Стоункат, Psychopath", id: 4, album:"Non Stop", length:"4:12" },
        {name: "Run Run", subtitle: "(feat. AR/CO)", author:"Jaded, Will Clarke, AR/CO", id: 5, album:"Run Run", length:"4:44" },
        {name: "Eyes on Fire", subtitle: "(Zeds Dead Remix)", author:"lue Foundation, Zeds Dead", id: 6, album:"Eyes on Fire", length:"5:20" },
        {name: "Mucho Bien", subtitle: "(Hi Profile Remix)", author:"HYBIT, Mr. Black, Offer Nissim, Hi Profile", id: 7, album:"Mucho Bien", length:"3:41" },
        {name: "Knives n Cherries", subtitle: "", author:"minthaze", id: 8, album:"Captivating", length:"1:36" },
    ]
    return (
        <div>
        <S.SenterblockHeader>Мои треки</S.SenterblockHeader>
            <S.CenterblockContent>
            <TracksTitle></TracksTitle>
            {trackError ? <div>{trackError}</div>  : 
            <S.ContentPlaylist>
            {loading ? <SkeletonTrack/> :
            <SimpleBar forceVisible="y" style={{ height: '65vh', maxWidth:"1120px"}}>
                <PlaylistItems targetRef={targetRef} tracks={favTracks}/>
                </SimpleBar>}
            </S.ContentPlaylist>}
        </S.CenterblockContent>
        </div>
    )
}
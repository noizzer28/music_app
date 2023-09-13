import PlaylistItems from  "../../components/tracks/tracks"
import  Nav from "../../components/navigation/navigation"
import { SideBar } from "../../components/sidebar/sidebar";
import {Bar} from "../../components/playBar/playBar";
import SkeletonTrack from "../../components/skeleton/skeleton";
import { useState, useEffect } from "react";
import PlaylistFilter from "../../components/filter/filter";
import * as S from "./app.styles"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { getTracks } from "../../api"


function MainApp({setToken}) {

  const [loading, setLoading] = useState(true)


  useEffect(()=> {
  getTracks()
    .then((tracks) => setTracks(tracks))
      .then(()=> {
        setLoading(false)
  })
  },[])

  const [isPlayBar, setPlayBar] = useState(false)

 
  const [tracks, setTracks] = useState([])



  return (  
    <>
    <S.Wrapper>
  <S.Container>
    <S.Main>
      <Nav/>
      <S.MainSenterblock>
        <S.CenterblockSearch>
          <S.Search>
            <use xlinkHref="./icons/sprite.svg#icon-search"></use>
          </S.Search>
          <S.InputSearch
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterblockSearch>
        <S.SenterblockHeader>Треки</S.SenterblockHeader>
        <PlaylistFilter/>
        <S.CenterblockContent>
          <S.ContentTitle>
            <S.PlaylistTitle_1>Трек</S.PlaylistTitle_1>
            <S.PlaylistTitle_2>ИСПОЛНИТЕЛЬ</S.PlaylistTitle_2>
            <S.PlaylistTitle_3>АЛЬБОМ</S.PlaylistTitle_3>
            <S.PlaylistTitle_4>
              <S.PlayListSvg alt="time">
                <use xlinkHref="./icons/sprite.svg#icon-watch"></use>
              </S.PlayListSvg>
            </S.PlaylistTitle_4>
          </S.ContentTitle>
          <S.ContentPlaylist>
          {loading ? <SkeletonTrack/> : <SimpleBar forceVisible="y" style={{ height: '50vh', maxWidth:"1120px"}}>
            <PlaylistItems setPlayBar={setPlayBar} setTracks={setTracks} tracks={tracks} setLoading={setLoading}/></SimpleBar>}
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainSenterblock>  
      <SideBar setToken={setToken}/>
    </S.Main>
    {isPlayBar ? <Bar/> : ""} 
  </S.Container>
</S.Wrapper>
</>)
}


export default MainApp;

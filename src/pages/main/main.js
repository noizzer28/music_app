import PlaylistItems from  "../../components/tracks/tracks"
import  Nav from "../../components/navigation/navigation"
import { SideBar } from "../../components/sidebar/sidebar";
import {Bar} from "../../components/playBar/audio";
import SkeletonTrack from "../../components/skeleton/skeleton";
import { useState, useEffect, useRef } from "react";
import PlaylistFilter from "../../components/filter/filter";
import * as S from "./app.styles"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { getTracks } from "../../api"
import { Search } from "../../components/center/search"
import { TracksTitle } from "../../components/center/title"


export const secondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}


function MainApp({setToken}) {

  const [loading, setLoading] = useState(true)
  const [trackError, SetTrackError] = useState("")

  useEffect(()=> {
  getTracks()
    .then((tracks) => setTracks(tracks))
      .then(()=> {
        setLoading(false)
  }).catch((error) => {
    setLoading(false)
    SetTrackError(`Ошибка соединения с сервером: ${error.message}`)
  })
  },[])

  const [currentTrack, setCurrentTrack] = useState(null)

  const [isPlaying, setIsPlaying] = useState(false)
 
  const [tracks, setTracks] = useState([])

  const [isLooped, setLoop] = useState(false)

  const [duration, setDuration] = useState(0)

  const [currentTime, setCurrentTime] = useState(0)

   
  const audioRef = useRef()
  const playAnimationRef = useRef();

  return (  
<>
<S.Wrapper>
  <S.Container>
    <S.Main>
      <Nav/>
      <S.MainSenterblock>
        <Search></Search>
        <S.SenterblockHeader>Треки</S.SenterblockHeader>
        <PlaylistFilter tracks={tracks}/>
        <S.CenterblockContent>
          <TracksTitle></TracksTitle>
          {trackError ? <div>{trackError}</div>  : 
           <S.ContentPlaylist>
          {loading ? <SkeletonTrack/> :
          <SimpleBar forceVisible="y" style={{ height: '50vh', maxWidth:"1120px"}}>
            <PlaylistItems 
             tracks={tracks} 
             currentTrack={currentTrack} 
             setCurrentTrack={setCurrentTrack}
             setIsPlaying={setIsPlaying}
             audioRef={audioRef}
             playAnimationRef={playAnimationRef}/>
            </SimpleBar>}
          </S.ContentPlaylist>}
        </S.CenterblockContent>
      </S.MainSenterblock>  
      <SideBar setToken={setToken}/>
    </S.Main>
    {currentTrack ? <Bar 
    currentTrack={currentTrack} 
    loading={loading}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
    audioRef={audioRef}
    isLooped={isLooped}
    setLoop={setLoop}
    duration={duration}
    setDuration={setDuration}
    currentTime={currentTime}
    setCurrentTime={setCurrentTime}
    playAnimationRef={playAnimationRef}/> : ""} 
  </S.Container>
</S.Wrapper>
</>)
}


export default MainApp;

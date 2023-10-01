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
import { useDispatch, useSelector } from "react-redux";
import { setTracks } from "../../store/track.slice";

export const secondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function MainApp() {

  const dispatch = useDispatch()
  const currentTrack = useSelector(state => state.tracks.currentTrack)
  console.log(currentTrack)

  const [loading, setLoading] = useState(true)
  const [trackError, SetTrackError] = useState("")

  useEffect(()=> {
  getTracks()
    .then((tracks) => dispatch(setTracks(tracks)))
      .then(()=> {
        setLoading(false)
  }).catch((error) => {
    setLoading(false)
    SetTrackError(`Ошибка соединения с сервером: ${error.message}`)
  })
  },[])

  const [isPlaying, setIsPlaying] = useState(false)

  const [isLooped, setLoop] = useState(false)

  const [duration, setDuration] = useState(0)

  const [currentTime, setCurrentTime] = useState(0)

   
  const audioRef = useRef()

  return (  
<>
<S.Wrapper>
  <S.Container>
    <S.Main>
      <Nav/>
      <S.MainSenterblock>
        <Search></Search>
        <S.SenterblockHeader>Треки</S.SenterblockHeader>
        <PlaylistFilter/>
        <S.CenterblockContent>
          <TracksTitle></TracksTitle>
          {trackError ? <div>{trackError}</div>  : 
           <S.ContentPlaylist>
          {loading ? <SkeletonTrack/> :
          <SimpleBar forceVisible="y" style={{ height: '50vh', maxWidth:"1120px"}}>
            <PlaylistItems 
             setIsPlaying={setIsPlaying}
             audioRef={audioRef}/>
            </SimpleBar>}
          </S.ContentPlaylist>}
        </S.CenterblockContent>
      </S.MainSenterblock>  
      <SideBar />
    </S.Main>
    {currentTrack ? <Bar 
    loading={loading}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
    audioRef={audioRef}
    isLooped={isLooped}
    setLoop={setLoop}
    duration={duration}
    setDuration={setDuration}
    currentTime={currentTime}
    setCurrentTime={setCurrentTime}/> : ""} 
  </S.Container>
</S.Wrapper>
</>)
}

export default MainApp;

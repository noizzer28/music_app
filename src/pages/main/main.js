
import  Nav from "../../components/navigation/navigation"
import { SideBar } from "../../components/sidebar/sidebar";
import {Bar} from "../../components/playBar/audio";
import { useState, useEffect, useRef } from "react";
import * as S from "./app.styles"
import 'simplebar-react/dist/simplebar.min.css';
import { getTracks } from "../../api"
import { Search } from "../../components/center/search"
import { useDispatch, useSelector } from "react-redux";
import { setTracks, setLikedTracks } from "../../store/track.slice";
import { Outlet } from "react-router";
import { useGetFavoritesQuery } from "../../store/favApi";

export const secondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const  MainApp = () => {

  const dispatch = useDispatch()
  const currentTrack = useSelector(state => state.tracks.currentTrack)
  const login = useSelector(state => state.user.login)
  const [loading, setLoading] = useState(true)
  const [trackError, SetTrackError] = useState("")


  useEffect(()=> {
    getTracks()
      .then((tracks) => {
         dispatch(setTracks({login: login, tracks: tracks}))
      }).then(()=> {
          setLoading(false)
    }).catch((error) => {
      setLoading(false)
      SetTrackError(`Ошибка соединения с сервером: ${error.message}`)
    })
    },[dispatch])



  const [isLooped, setLoop] = useState(false)

  const [duration, setDuration] = useState(0)

  const [currentTime, setCurrentTime] = useState(0)

   
  const audioRef = useRef()
  const targetRef = useRef()

  return (  
<>
<S.Wrapper>
  <S.Container>
    <S.Main>
      <Nav/>
      <S.MainSenterblock>
        <Search></Search>
        <Outlet context={[trackError, loading, targetRef]}>
        </Outlet>
      </S.MainSenterblock>  
      <SideBar />
    </S.Main>
    {currentTrack ? <Bar 
    loading={loading}
    audioRef={audioRef}
    isLooped={isLooped}
    setLoop={setLoop}
    duration={duration}
    setDuration={setDuration}
    currentTime={currentTime}
    setCurrentTime={setCurrentTime}
    targetRef={targetRef}/> : ""} 
  </S.Container>
</S.Wrapper>
</>)
}

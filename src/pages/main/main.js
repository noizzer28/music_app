
import { Nav }  from "../../components/navigation/navigation"
import { SideBar } from "../../components/sidebar/sidebar";
import {Bar} from "../../components/playBar/audio";
import { useState, useRef } from "react";
import * as S from "./main.styles"
import 'simplebar-react/dist/simplebar.min.css';
import { Search } from "../../components/center/search"
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

export const secondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const  MainApp = () => {
  const currentTrack = useSelector(state => state.tracks.currentTrack)
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
        <Outlet>
        </Outlet>
      </S.MainSenterblock>  
      <SideBar />
    </S.Main>
    {currentTrack && <Bar 
    audioRef={audioRef}
    isLooped={isLooped}
    setLoop={setLoop}
    duration={duration}
    setDuration={setDuration}
    currentTime={currentTime}
    setCurrentTime={setCurrentTime}
/>} 
  </S.Container>
</S.Wrapper>
</>)
}

import * as S from "./styles/barProgress.styles"
import { secondsToMinutes } from "../../pages/main/main"
import { useEffect } from "react"


export const BarProgress = (({duration, currentTime, progressRef, audioRef, setCurrentTime}) => {
    const changeRange = () => {          
              if (audioRef.current) {
                audioRef.current.currentTime = progressRef.current.value
                progressRef.current.style.setProperty(`--progress-width`, `${progressRef.current.value / duration * 100}%`)
                setCurrentTime(progressRef.current.value)
              }

    }

    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", ()=> {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            progressRef.current.style.setProperty(`--progress-width`, `${currentTime / duration * 100}%`)
            
          }
        })
      },[currentTime])
      


    
    return  <S.BarPlayerProgress>
        <S.ProgressDuration>{secondsToMinutes(currentTime)} / {secondsToMinutes(duration)}</S.ProgressDuration>
        <S.BarPlayerRange onChange={changeRange} ref={progressRef} type="range"  value={currentTime}></S.BarPlayerRange>
    </S.BarPlayerProgress>
})
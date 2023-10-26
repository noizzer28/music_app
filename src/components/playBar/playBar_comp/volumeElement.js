import * as S from "../styles/volume.styles"
import { useState, useEffect, useRef } from "react";
const BarVolume = ({audioRef}) => {

  const [volume, setVolume] = useState(60);
  const [ isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const volumeRef = useRef(60)
  const volumeHandler = (volume) => {
    setIsMuted(false)
    setVolume(volumeRef.current.value)
    volumeRef.current.style.setProperty(`--volume-width`, `${ volume }%`)

  }
  
  const toggleMute = () => {

    if (!isMuted) {
      audioRef.current.volume = 0
      volumeRef.current.style.setProperty(`--volume-width`, `0%`) 

    } else {
      audioRef.current.volume = volume / 100
      volumeRef.current.style.setProperty(`--volume-width`, `${ volume }%`)
    }
    setIsMuted((prevValue) => !prevValue)
  }



    return(<S.BarVolumeBlock>
    <S.VolumeContent>
      <S.VolumeImage className={isMuted ? "mutedVolume" : ""}  onClick={toggleMute}>
        <S.VolumeSvg alt="volume" >
          <use xlinkHref="./icons/sprite.svg#icon-volume"></use>
        </S.VolumeSvg>
      </S.VolumeImage>
      <S.VolumeProgress className="_btn">
        <S.VolumeProgresLine
          ref={volumeRef}
          className="_btn"
          type="range"
          min={0} max={100}
          onChange={()=> volumeHandler(volume)}
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  </S.BarVolumeBlock>)
  }


export default BarVolume
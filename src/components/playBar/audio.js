import 'react-loading-skeleton/dist/skeleton.css'
import { useRef} from 'react'
import BarVolume from './playBar_comp/volumeElement'
import BarPlayerControls from './playBar_comp/controls'
import * as S from "./styles/audio.styles"
import { BarProgress } from './playBar_comp/barProgress'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { nextTrack } from "../../store/track.slice"
import { BarPlayingTrack } from "./playBar_comp/barPlayingTrack"

export  const Bar = ({
  loading, 
  isLooped, 
  setLoop,
  duration,
  setDuration,
  audioRef,
  currentTime,
  setCurrentTime,
  targetRef
  }) => {
    const currentTrack = useSelector(state => state.tracks.currentTrack)
    const dispatch = useDispatch()
    const progressRef = useRef()
    const onLoadedMetadata = () => {
      const seconds = Math.floor(audioRef.current.duration)
      setDuration(audioRef.current.duration)
      progressRef.current.max = seconds
    };

    const handleEndTrack = () => {
      dispatch(nextTrack())
    }

    return (<S.BarContainer>
    <S.BarContent>
    <S.TrackAudio 
        onLoadedMetadata={onLoadedMetadata} 
        onEnded={handleEndTrack} 
        ref={audioRef} 
        src={currentTrack.track_file} 
        autoPlay 
        preload="metadata"
        {...(isLooped ? { loop: true } : {})}>
    </S.TrackAudio>
      <BarProgress 
          duration={duration}
          setDuration={setDuration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          progressRef={progressRef}
          audioRef={audioRef}>
      </BarProgress>
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <BarPlayerControls 
          currentTime={currentTime}
          audioRef={audioRef}     
          isLooped={isLooped}
          setLoop={setLoop}
          progressRef={progressRef}
          setCurrentTime={setCurrentTime}
          duration={duration}
          targetRef={targetRef}/>
          <BarPlayingTrack loading={loading} />
        </S.BarPlayer>
        <BarVolume audioRef={audioRef}/>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.BarContainer>)
  }
  

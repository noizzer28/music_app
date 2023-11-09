import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRef} from 'react'
import BarVolume from './volumeElement'
import BarPlayerControls from './controls'
import * as S from "./styles/audio.styles"
import { BarProgress } from './barProgress'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { nextTrack } from "../../store/track.slice"

const BarPlayingTrack = ({ loading}) => {
  const currentTrack = useSelector(state => state.tracks.currentTrack)
    return(
    <S.TrackPlay>
      <S.TrackPlayContainer>
        <S.TrackPlayImg> {loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> :          
         <S.TrackPlaySvg alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>}
        </S.TrackPlayImg>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">{loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> : currentTrack.name}</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">{loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> : currentTrack.author}</S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContainer>
  
    <S.TrackPlayLikeDis>
      <S.TrackPlayLike className="_btn-icon">
        <S.TrackPlayLikeSvg alt="like">
          <use xlinkHref="./icons/sprite.svg#icon-like"></use>
        </S.TrackPlayLikeSvg>
      </S.TrackPlayLike>
      <S.TrackPlayDisike className="_btn-icon">
        <S.TrackPlayDisLikeSvg alt="dislike">
          <use xlinkHref="./icons/sprite.svg#icon-dislike"></use>
        </S.TrackPlayDisLikeSvg>
      </S.TrackPlayDisike>
    </S.TrackPlayLikeDis>
  </S.TrackPlay>)
  }
  

  
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
          <BarPlayingTrack loading={loading}/>
        </S.BarPlayer>
        <BarVolume audioRef={audioRef}/>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.BarContainer>)
  }
  

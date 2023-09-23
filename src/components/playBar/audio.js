import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState, useRef, useCallback } from 'react'
import BarVolume from './volumeElement'
import BarPlayerControls from './controls'
import * as S from "./styles/audio.styles"
import { BarProgress } from './barProgress'


const BarPlayingTrack = ({currentTrack, loading}) => {

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
  

  
export  const Bar = ({currentTrack, 
  loading, 
  isPlaying, 
  setIsPlaying, 
  isLooped, 
  setLoop,
  duration,
  setDuration,
  audioRef,
  currentTime,
  setCurrentTime,
  playAnimationRef
  }) => {

    const progressRef = useRef()

    // useEffect(() => {
    //   function getTrackLength(track) {
    //     track.addEventListener("loadedmetadata",  () => {
    //       const seconds = Math.floor(audioRef.current.duration)
    //       setDuration(audioRef.current.duration)
    //       progressRef.current.max = seconds
    //     });
    //   }
    //   getTrackLength(audioRef.current)
    // здесь был audioRef?.current?.loadedmetadata, а также audioRef?.current?.readySate, 
    // и их различные комбинации, но я все равно не понимаю почему компонент рендерится два раза
    

    // а потом я нашла более изящный способ:
    const onLoadedMetadata = () => {
      const seconds = Math.floor(audioRef.current.duration)
      setDuration(audioRef.current.duration)
      progressRef.current.max = seconds
    };



    return (<S.BarContainer>
    <S.BarContent>
    <S.TrackAudio 
    onLoadedMetadata={onLoadedMetadata}  
    ref={audioRef} 
    src={currentTrack.track_file} 
    autoPlay 
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
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          audioRef={audioRef}     
          isLooped={isLooped}
          setLoop={setLoop}
          playAnimationRef={playAnimationRef}
          progressRef={progressRef}
          setCurrentTime={setCurrentTime}
          duration={duration}/>
          <BarPlayingTrack loading={loading} currentTrack={currentTrack}/>
        </S.BarPlayer>
        <BarVolume audioRef={audioRef}/>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.BarContainer>)
  }
  

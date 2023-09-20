
import * as S from "./tracks.styles"
import { secondsToMinutes } from "../../pages/main/main"
import { useEffect } from "react"


const PlaylistItems = ({
  setPlayBar, 
  tracks, 
  currentTrack, 
  setCurrentTrack, 
  audioRef, 
  setIsPlaying, 
  isLooped,
  duration,
  setDuration}) => {




  const handlePlay = (song) => {
      setPlayBar(true)
      setIsPlaying(true)
      if (currentTrack === song) {
        setCurrentTrack(null);
      } else{
        setCurrentTrack(song);
      }

      console.log(audioRef)
      console.log(audioRef.current?.duration)
  }

  useEffect(() => {
    console.log(1)
    // console.log(audioRef.current.duration)
    // setDuration(audioRef.current.duration)
  },[audioRef?.current?.loadedmetadata, audioRef?.current?.readystate])

  const playList = tracks.map(song => 
    <S.PlaylistItem key={song.id}>
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.trackTitleSvg alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </S.trackTitleSvg>
        </S.TrackTitleImage>
        <div className="track__title-text" >
        <S.TrackTitleLink href="#" onClick={() => handlePlay(song)}>
          {currentTrack === song ? <S.TrackAudio ref={audioRef} src={song.track_file} controls autoPlay {...(isLooped ? { loop: true } : {})}></S.TrackAudio> : ""}
            {song.name} 
            <S.TrackTitleSpan>{song.subtitle}</S.TrackTitleSpan>
        </S.TrackTitleLink>
        </div>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink href="#">{song.author}</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink href="#">{song.album}</S.TrackAlbumLink>
      </S.TrackAlbum>
      <div className="track__time _btn-icon">
        <S.TrackTimeSvg alt="time">
          <use xlinkHref="./icons/sprite.svg#icon-like"></use>
        </S.TrackTimeSvg>  
        <S.TrackTimeText>{secondsToMinutes(song.duration_in_seconds)}</S.TrackTimeText>
      </div>
    </S.PlaylistTrack>
  </S.PlaylistItem>
  )
  return[playList]
}


export default PlaylistItems
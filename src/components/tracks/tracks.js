
import * as S from "./tracks.styles"
import { secondsToMinutes } from "../../pages/main/main"
import { useSelector } from "react-redux/es/hooks/useSelector"


const PlaylistItems = ({
  currentTrack, 
  setCurrentTrack, 
  setIsPlaying
  }) => {

  const tracks = useSelector(state => state.tracks.tracks)

  const handlePlay = (song) => {
    const prevValue = song
      setIsPlaying(true)
      if (currentTrack === prevValue) {
        setCurrentTrack(null);
        setIsPlaying(false)
      } else{
        setCurrentTrack(prevValue);
      }
}



  const playList = tracks.map(song => 
    <S.PlaylistItem key={song.id}>
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.trackTitleSvg alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </S.trackTitleSvg>
        </S.TrackTitleImage>
        <div className="track__title-text">
        <S.TrackTitleLink  onClick={() => handlePlay(song)}>
            {song.name} 
            <S.TrackTitleSpan>{song.subtitle}</S.TrackTitleSpan>
        </S.TrackTitleLink>
        </div>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink>{song.author}</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink>{song.album}</S.TrackAlbumLink>
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
import * as S from "./tracks.styles"
import { secondsToMinutes } from "../../pages/main/main"
import { useSelector} from "react-redux"
import { setCurrentIndex, setCurrentTrack } from "../../store/track.slice"
import { useDispatch } from "react-redux"
import { setIsPlaying } from "../../store/track.slice"



const PlaylistItems = ({targetRef}) => {

  const dispatch = useDispatch()
  const tracks = useSelector(state => state.tracks.tracks)
  const currentTrack = useSelector(state => state.tracks.currentTrack)
  const isPlaying = useSelector(state => state.tracks.isPlaying)

  const handlePlay = (song, index) => {
    const prevValue = song
    dispatch(setIsPlaying(true)) 
    if (currentTrack === prevValue) {
      dispatch(setCurrentTrack(null))
      dispatch(setIsPlaying(false)) 
    } else{
      dispatch(setCurrentTrack(prevValue))
      dispatch(setCurrentIndex(index))
    }
  }
  let playStyles = ``
  if (isPlaying) {
    playStyles = 'playing-dot active'
  } else {
    playStyles = `playing-dot`
  }
 

  const playList = tracks.map((song, index) => 
    <S.PlaylistItem key={song.id}>
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage >
          <S.trackTitleSvg alt="music" className={currentTrack === song ? `${playStyles}` : ""}>
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </S.trackTitleSvg>
        </S.TrackTitleImage>
        <div className="track__title-text">
        <S.TrackTitleLink  ref={currentTrack === song ? targetRef : undefined} onClick={() => handlePlay(song, index)} >
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

import * as S from "./tracks.styles"
import { secondsToMinutes } from "../../pages/main/main"
import { useSelector} from "react-redux"
import { setCurrentIndex, setCurrentPlayList, setCurrentTrack, toggleLike, setLikedTracks } from "../../store/track.slice"
import { useDispatch } from "react-redux"
import { setIsPlaying } from "../../store/track.slice"
import { useAddFavoritesMutation, useDeleteFavoritesMutation } from "../../store/favApi"





const PlaylistItems = ({ tracks, status}) => {

  const dispatch = useDispatch()
  const currentTrack = useSelector(state => state.tracks.currentTrack)
  const isPlaying = useSelector(state => state.tracks.isPlaying)

  const [addFavorite] = useAddFavoritesMutation()
  const [deleteFavorites] = useDeleteFavoritesMutation()

  const handleToggleFavorite = async (song, isLiked) => {
    if (isLiked) {
      await deleteFavorites(song.id).unwrap()
      dispatch(toggleLike({isLiked: false, song: song}))
    } else {
      await addFavorite(song.id).unwrap()
      dispatch(toggleLike({isLiked: true, song: song}))
    }
  }

  const handlePlay = (song, index) => { 
    dispatch(setCurrentPlayList(tracks))
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
 
  
  
  const PlayList = (tracks) => {

      if (tracks.length === 0) {
        return <div key={1}>В этом плейлисте еще нет треков</div>
      }
      return tracks.map((song, index) => {
        let isLiked = song.isLiked
       return ( <S.PlaylistItem key={song.id}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage >
              <S.trackTitleSvg alt="music" className={currentTrack?.id === song.id ? `${playStyles}` : ""}>
                <use xlinkHref="./icons/sprite.svg#icon-note"></use>
              </S.trackTitleSvg>
            </S.TrackTitleImage>
            <div className="track__title-text">
            <S.TrackTitleLink  ref={undefined} onClick={() => handlePlay(song, index)} >
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
          <div className={`track__time _btn-icon ${isLiked ? 'activeLike' : ''}` }  onClick={()=> handleToggleFavorite(song, isLiked)}>
            <S.TrackTimeSvg alt="time" >
              <use xlinkHref="./icons/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>  
            <S.TrackTimeText>{secondsToMinutes(song.duration_in_seconds)}</S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>

    )} 

  

  )
  }

  return PlayList(tracks)
}


export default PlaylistItems

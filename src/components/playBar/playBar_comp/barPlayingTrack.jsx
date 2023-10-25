import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import * as S from "../styles/audio.styles"
import { useAddFavoritesMutation, useDeleteFavoritesMutation } from '../../../store/favApi'
import { toggleLike } from '../../../store/track.slice'

export const BarPlayingTrack = ({ loading}) => {
    const currentTrack = useSelector(state => state.tracks.currentTrack)

    const dispatch = useDispatch()
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


    console.log(currentTrack)
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
            <S.TrackPlayLike className={`_btn-icon ${currentTrack.isLiked ? "activeLike" : ""}`} onClick={()=> handleToggleFavorite(currentTrack, currentTrack.isLiked)}>
            <S.TrackPlayLikeSvg alt="like">
                <use xlinkHref="./icons/sprite.svg#icon-like"></use>
            </S.TrackPlayLikeSvg>
            </S.TrackPlayLike> 
      </S.TrackPlayLikeDis>
    </S.TrackPlay>)
    }
    
  
    
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'
import BarVolume from './barVolume'
import BarPlayerControls from './barPlayerControls'
import * as S from "./playBar.styles"

const BarPlayingTrack = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 5000);
  })
    return(
    <S.TrackPlay>
      <S.TrackPlayContainer>
        <S.TrackPlayImg> {loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> :           <S.TrackPlaySvg alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>}

        </S.TrackPlayImg>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">{loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> : "Ты та..."}</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">{loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> : "Баста    >"}</S.TrackPlayAlbumLink>
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
  
  
  
  
export  const Bar = () => {
    return (<S.BarContainer>
    <S.BarContent>
      <S.BarPlayerProgress></S.BarPlayerProgress>
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <BarPlayerControls/>
          <BarPlayingTrack/>
        </S.BarPlayer>
        <BarVolume/>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.BarContainer>)
  }
  
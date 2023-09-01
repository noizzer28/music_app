import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'
import BarVolume from './barVolume'
import BarPlayerControls from './barPlayerControls'


export const BarPlayingTrack = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 5000);
  })
    return(
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image"> {loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> :           <svg className="track-play__svg" alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </svg>}

        </div>
        <div className="track-play__author">
          <a className="track-play__author-link" href="http://">{loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> : "Ты та..."}</a>
        </div>
        <div className="track-play__album">
          <a className="track-play__album-link" href="http://">{loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"><Skeleton/></SkeletonTheme> : "Баста    >"}</a>
        </div>
      </div>
  
    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg" alt="like">
          <use xlinkHref="./icons/sprite.svg#icon-like"></use>
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg" alt="dislike">
          <use xlinkHref="./icons/sprite.svg#icon-dislike"></use>
        </svg>
      </div>
    </div>
  </div>)
  }
  
  
  
  
export  const Bar = () => {
    return (<div className="bar">
    <div className="bar__content">
      <div className="bar__player-progress"></div>
      <div className="bar__player-block">
        <div className="bar__player player">
          <BarPlayerControls/>
          <BarPlayingTrack/>
        </div>
        <BarVolume/>
      </div>
    </div>
  </div>)
  }
  



import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'


  

export const BarVolume = () => {
    return(<div className="bar__volume-block volume">
    <div className="volume__content">
      <div className="volume__image">
        <svg className="volume__svg" alt="volume">
          <use xlinkHref="./icons/sprite.svg#icon-volume"></use>
        </svg>
      </div>
      <div className="volume__progress _btn">
        <input
          className="volume__progress-line _btn"
          type="range"
          name="range"
        />
      </div>
    </div>
  </div>)
  }
  
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
  



export const  BarPlayerControls = () =>  {
return (<div className="player__controls">
<div className="player__btn-prev">
    <svg className="player__btn-prev-svg" alt="prev">
    <use xlinkHref="./icons/sprite.svg#icon-next"></use>
    </svg>
</div>
<div className="player__btn-play _btn">
    <svg className="player__btn-play-svg" alt="play">
    <use xlinkHref="./icons/sprite.svg#icon-play"></use>
    </svg>
</div>
<div className="player__btn-next">
    <svg className="player__btn-next-svg" alt="next">
    <use xlinkHref="./icons/sprite.svg#icon-next"></use>
    </svg>
</div>
<div className="player__btn-repeat _btn-icon">
    <svg className="player__btn-repeat-svg" alt="repeat">
    <use xlinkHref="/icons/sprite.svg#icon-repeat"></use>
    </svg>
</div>
<div className="player__btn-shuffle _btn-icon">
    <svg className="player__btn-shuffle-svg" alt="shuffle">
    <use xlinkHref="./icons/sprite.svg#icon-shuffle"></use>
    </svg>
</div>
</div>)
}
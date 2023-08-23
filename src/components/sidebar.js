import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'

export  const SideBar = () => {

  
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 5000);
  })
    return(          <div className="main__sidebar sidebar">
            {loading ? "" :     <div className="sidebar__personal">

<p className="sidebar__personal-name">Sergey.Ivanov</p>
<div className="sidebar__icon">
  <svg alt="logout">
    <use xlinkHref="./icons/sprite.svg#logout"></use>
  </svg>
</div>
</div>} 

    <div className="sidebar__block">
      <div className="sidebar__list">

        <div className="sidebar__item">
        {loading ? <div className='skeleton'></div> : <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="./playlist01.png"
              alt="day's playlist"
            />
          </a>    }

        </div>
        <div className="sidebar__item">
        {loading ? <div className='skeleton'></div> :
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="./playlist02.png"
              alt="day's playlist"
            />
          </a>}
        </div>
        <div className="sidebar__item">
        {loading ? <div className='skeleton'></div> :
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="./playlist03.png"
              alt="day's playlist"
            />
          </a>}
        </div>
      </div>
    </div>
  </div>)
  }
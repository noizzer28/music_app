import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonTrack = () => {
  const SkeletonTracks = []
  for (let i = 0; i < 19; i++) {
    SkeletonTracks.push(<SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div className='content__title'>
      <div className="track__title-image">
        <Skeleton/>
      </div>
            <div className="track__album">
      <a className="track__album-link" href="http://"><Skeleton/></a>
            </div>
            <div className="track__album">
      <a className="track__album-link" href="http://"><Skeleton/></a>
            </div>
            <div className="track__album">
      <a className="track__album-link" href="http://"><Skeleton/></a>
            </div>
            <div className="track__time">
    <svg className="track__time-svg" alt="time">
    </svg>  
  </div>
    </div>
</SkeletonTheme>)}
        return SkeletonTracks
}

export default SkeletonTrack
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "./skeleton.styles"


const SkeletonTrack = () => {
  const SkeletonTracks = []
  for (let i = 0; i < 19; i++) {
    SkeletonTracks.push(<SkeletonTheme baseColor="#202020" key={i} highlightColor="#444">
    <S.SkeletonWrap>
      <S.SkeletonImg>
        <Skeleton/>
      </S.SkeletonImg>
      <S.Skeleton><Skeleton/></S.Skeleton>
      <S.Skeleton><Skeleton/></S.Skeleton>
      <S.Skeleton><Skeleton/></S.Skeleton>
      <S.SkeletonWatch><Skeleton/></S.SkeletonWatch>
    </S.SkeletonWrap>
</SkeletonTheme>)}
        return SkeletonTracks
}

export default SkeletonTrack
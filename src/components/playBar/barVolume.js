import * as S from "./barVolume.styles"
const BarVolume = () => {
    return(<S.BarVolumeBlock>
    <S.VolumeContent>
      <S.VolumeImage>
        <S.VolumeSvg alt="volume">
          <use xlinkHref="./icons/sprite.svg#icon-volume"></use>
        </S.VolumeSvg>
      </S.VolumeImage>
      <S.VolumeProgress className="_btn">
        <S.VolumeProgresLine
          className="_btn"
          type="range"
          name="range"
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  </S.BarVolumeBlock>)
  }


export default BarVolume
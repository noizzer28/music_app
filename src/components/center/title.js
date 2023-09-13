import * as S from "../../pages/main/app.styles"


export function TracksTitle () {
  return(          <S.ContentTitle>
    <S.PlaylistTitle_1>Трек</S.PlaylistTitle_1>
    <S.PlaylistTitle_2>ИСПОЛНИТЕЛЬ</S.PlaylistTitle_2>
    <S.PlaylistTitle_3>АЛЬБОМ</S.PlaylistTitle_3>
    <S.PlaylistTitle_4>
      <S.PlayListSvg alt="time">
        <use xlinkHref="./icons/sprite.svg#icon-watch"></use>
      </S.PlayListSvg>
    </S.PlaylistTitle_4>
  </S.ContentTitle>)
}
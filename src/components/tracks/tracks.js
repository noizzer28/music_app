
import * as S from "./tracks.styles"
import { min } from "lodash"
export const Tracks = [
  {title: "Guilt", subtitle: "", author:"Nero", id: 1, album:"Welcome Reality", length:"4:44" },
  {title: "Elektro", subtitle: "", author:"Dynoro, Outwork, Mr. Gee", id: 2, album:"Elektro", length:"2:22" },
  {title: "I’m Fire", subtitle: "", author:"Ali Bakgor", id: 3, album:"I’m Fire", length:"2:24" },
  {title: "Non Stop", subtitle: "(Remix)", author:"Стоункат, Psychopath", id: 4, album:"Non Stop", length:"4:12" },
  {title: "Run Run", subtitle: "(feat. AR/CO)", author:"Jaded, Will Clarke, AR/CO", id: 5, album:"Run Run", length:"4:44" },
  {title: "Eyes on Fire", subtitle: "(Zeds Dead Remix)", author:"lue Foundation, Zeds Dead", id: 6, album:"Eyes on Fire", length:"5:20" },
  {title: "Mucho Bien", subtitle: "(Hi Profile Remix)", author:"HYBIT, Mr. Black, Offer Nissim, Hi Profile", id: 7, album:"Mucho Bien", length:"3:41" },
  {title: "Knives n Cherries", subtitle: "", author:"minthaze", id: 8, album:"Captivating", length:"1:36" },
  {title: "Eyes on Fire", subtitle: "(Zeds Dead Remix)", author:"lue Foundation, Zeds Dead", id: 9, album:"Eyes on Fire", length:"5:20" },
  {title: "Mucho Bien", subtitle: "(Hi Profile Remix)", author:"HYBIT, Mr. Black, Offer Nissim, Hi Profile", id: 10, album:"Mucho Bien", length:"3:41" },
  {title: "Knives n Cherries", subtitle: "", author:"minthaze", id: 11, album:"Captivating", length:"1:36" },
]


const PlaylistItems = ({setPlayBar, tracks}) => {

  const secondsToMinutes = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }


  const handlePlay = () => {
    setPlayBar(true)
  }



  const playList = tracks.map(song => 
    <S.PlaylistItem key={song.id}>
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.trackTitleSvg alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </S.trackTitleSvg>
        </S.TrackTitleImage>
        <div className="track__title-text" >
        <S.TrackTitleLink href="#" onClick={handlePlay}><audio src={song.track_file} controls preload="metadata"></audio>{song.name} <S.TrackTitleSpan>{song.subtitle}</S.TrackTitleSpan></S.TrackTitleLink>
        </div>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink href="#">{song.author}</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink href="#">{song.album}</S.TrackAlbumLink>
      </S.TrackAlbum>
      <div className="track__time _btn-icon">
        <S.TrackTimeSvg alt="time">
          <use xlinkHref="./icons/sprite.svg#icon-like"></use>
        </S.TrackTimeSvg>  
        <S.TrackTimeText>{secondsToMinutes(song.duration_in_seconds)}</S.TrackTimeText>
      </div>
    </S.PlaylistTrack>
  </S.PlaylistItem>
  )
  return[playList]
}


export default PlaylistItems
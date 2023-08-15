const Songs = [
  {title: "Guilt", subtitle: "", author:"Nero", id: 1, album:"Welcome Reality", length:"4:44" },
  {title: "Elektro", subtitle: "", author:"Dynoro, Outwork, Mr. Gee", id: 2, album:"Elektro", length:"2:22" },
  {title: "I’m Fire", subtitle: "", author:"Ali Bakgor", id: 3, album:"I’m Fire", length:"2:24" },
  {title: "Non Stop", subtitle: "(Remix)", author:"Стоункат, Psychopath", id: 4, album:"Non Stop", length:"4:12" },
  {title: "Run Run", subtitle: "(feat. AR/CO)", author:"Jaded, Will Clarke, AR/CO", id: 5, album:"Run Run", length:"4:44" },
  {title: "Eyes on Fire", subtitle: "(Zeds Dead Remix)", author:"lue Foundation, Zeds Dead", id: 6, album:"Eyes on Fire", length:"5:20" },
  {title: "Mucho Bien", subtitle: "(Hi Profile Remix)", author:"HYBIT, Mr. Black, Offer Nissim, Hi Profile", id: 7, album:"Mucho Bien", length:"3:41" },
  {title: "Knives n Cherries", subtitle: "", author:"minthaze", id: 8, album:"Captivating", length:"1:36" },
]


const PlaylistItems = () => {
  const playList = Songs.map(song => 
    <div className="playlist__item" key={song.id}>
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image">
          <svg className="track__title-svg" alt="music">
            <use xlinkHref="./icons/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className="track__title-text" >
          <a className="track__title-link" href="http://">{song.title} <span className="track__title-span">{song.subtitle}</span></a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="http://">{song.author}</a>
      </div>
      <div className="track__album">
        <a className="track__album-link" href="http://">{song.album}</a>
      </div>
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="./icons/sprite.svg#icon-like"></use>
        </svg>  
        <span className="track__time-text">{song.length}</span>
      </div>
    </div>
  </div>
  )
  console.log(playList)

  return[playList]
}



export default PlaylistItems
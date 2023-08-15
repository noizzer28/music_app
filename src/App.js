import "./App.css";
import {PlaylistItem} from  "./components/songs"
import  Nav from "./components/navigation"
import { SideBar } from "./components/sidebar";
import { Bar } from "./components/playBar";


const PlaylistFilter = () => {
  return (<div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>
    <div className="filter__button button-author _btn-text">исполнителю</div>
    <div className="filter__button button-year _btn-text">году выпуска</div>
    <div className="filter__button button-genre _btn-text">жанру</div>
</div>)
}

function App() {
  return (    <div className="wrapper">
  <div className="container">
    <main className="main">
      <Nav/>
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="./icons/sprite.svg#icon-search"></use>
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <PlaylistFilter/>
        <div className="centerblock__content">
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
              <svg className="playlist-title__svg" alt="time">
                <use xlinkHref="./icons/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <div className="content__playlist playlist">
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
          </div>
        </div>
      </div>
      <SideBar/>
    </main>
    <Bar/>
    <footer className="footer"></footer>
  </div>
</div>)
}


export default App;

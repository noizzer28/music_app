import { Tracks } from "./songs"
import React from "react";



class PlaylistFilter extends React.Component {

    constructor () {
        super();
        this.state = {
            isActive: false
        }
    }
    handler = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    renderAuthors = () => {
        let AuthorList = []
        AuthorList = Tracks.map((track) => (
            <li key={track.id} className="author__list">
                {track.author}
            </li>
        ));
        return AuthorList;

    }

    render() {

        return <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">исполнителю</div>
        <div className="filter__author">
            <ul className="filter__modal">
            {this.renderAuthors()}
            </ul>
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
    }
}

// const PlaylistFilter = () => {
//     return ()
//   }

export default PlaylistFilter
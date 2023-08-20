import { Tracks } from "./songs"
import React from "react";



class PlaylistFilter extends React.Component {

    constructor () {
        super();
        this.state = {
            isActiveAuthor: false,
            isActiveYear: false,
            isActiveGenre: false
        }
    }
    handlerAuthor = () => {
        console.log('click')
        this.setState({
            isActiveAuthor: !this.state.isActiveAuthor,
            isActiveYear: false,
            isActiveGenre: false,
        })
    }
    handlerYear = () => {
        console.log("click")
        this.setState({
            isActiveAuthor: false,
            isActiveYear: !this.state.isActiveYear,
            isActiveGenre: false,
        })
    }
    handlerGenre = () => {
        console.log("click")
        this.setState({
            isActiveAuthor: false,
            isActiveYear: false,
            isActiveGenre: !this.state.isActiveGenre,
        })
    }

    renderAuthors = () => {
        let AuthorList = []
        AuthorList = Tracks.map((track) => (
            <li key={track.id} className="filter__list">
                {track.author}
            </li>
        ));
        return AuthorList;

    }

    renderYears = () => {
        let Years = ["1990-2000", "2001-2010", "2011-2020", "2020+"]
        let YearsList = []
        YearsList = Years.map((year, index) => {
            return (<li key={index} className="filter__list">
                {year}
            </li>)
        });
        return YearsList
    }

    renderGenre = () => {
        let Genres = ["Rock", "Pop", "RnB", "Jazz", "Hip-Hop"]
        let GenreList = []
        GenreList = Genres.map((genre, index) => {
            return (<li key={index} className="filter__list">
            {genre}
        </li>)
        })
        return GenreList
    }

    render() {

        return <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text" onClick={this.handlerAuthor} >исполнителю</div>
        <div className="filter__author">
        {this.state.isActiveAuthor ? <ul className="filter__modal">{this.renderAuthors()}</ul> : ''}
        </div>
        <div className="filter__button button-year _btn-text" onClick={this.handlerYear}>году выпуска</div>
        {this.state.isActiveYear ? <ul className="filter__modal">{this.renderYears()}</ul> : ''}
        <div className="filter__button button-genre _btn-text" onClick={this.handlerGenre}>жанру</div>
        {this.state.isActiveGenre ? <ul className="filter__modal">{this.renderGenre()}</ul> : ''}
        
    </div>
    }
}


export default PlaylistFilter
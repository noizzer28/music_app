import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Tracks } from "./songs";

const PlaylistFilter = () => {
    const [isActiveAuthor, setIsActiveAuthor] = useState(false);
    const [isActiveYear, setIsActiveYear] = useState(false);
    const [isActiveGenre, setIsActiveGenre] = useState(false);

    const handleAuthor = () => {
        setIsActiveAuthor(!isActiveAuthor);
        setIsActiveYear(false);
        setIsActiveGenre(false);
    };

    const handleYear = () => {
        setIsActiveAuthor(false);
        setIsActiveYear(!isActiveYear);
        setIsActiveGenre(false);
    };

    const handleGenre = () => {
        setIsActiveAuthor(false);
        setIsActiveYear(false);
        setIsActiveGenre(!isActiveGenre);
    };

    const renderAuthors = () => {
        return Tracks.map((track) => (
            <li key={track.id} className="filter__list">
                {track.author}
            </li>
        ));
    };

    const renderYears = () => {
        const years = ["1990-2000", "2001-2010", "2011-2020", "2020+"];
        return years.map((year, index) => (
            <li key={index} className="filter__list">
                {year}
            </li>
        ));
    };

    const renderGenre = () => {
        const genres = ["Rock", "Pop", "RnB", "Jazz", "Hip-Hop"];
        return genres.map((genre, index) => (
            <li key={index} className="filter__list">
                {genre}
            </li>
        ));
    };

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text" onClick={handleAuthor}>исполнителю</div>
            {isActiveAuthor && (
                <ul className="filter__modal filter__author">
                    <SimpleBar forceVisible="y" style={{ height: '300px' }}>
                        {renderAuthors()}
                    </SimpleBar>
                </ul>
            )}
            <div className="filter__button button-year _btn-text" onClick={handleYear}>году выпуска</div>
            {isActiveYear && <ul className="filter__modal filter__year">{renderYears()}</ul>}
            <div className="filter__button button-genre _btn-text" onClick={handleGenre}>жанру</div>
            {isActiveGenre && <ul className="filter__modal filter__genre">{renderGenre()}</ul>}
        </div>
    );
};

export default PlaylistFilter;

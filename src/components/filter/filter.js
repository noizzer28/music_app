import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as S from "./filter.styles"

const PlaylistFilter = () => {
    const [isActiveAuthor, setIsActiveAuthor] = useState(false);
    const [isActiveYear, setIsActiveYear] = useState(false);
    const [isActiveGenre, setIsActiveGenre] = useState(false);
    
    const tracks = useSelector(state => state.tracks.tracks)

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
        const authorList = tracks.map((track) => {
            if (track.author !== "-") {
                return <S.FilterList key={track.id}>
                        {track.author}
                    </S.FilterList>
            }
        })
        return authorList
    };

    const renderYears = () => {
        const years = ["1990-2000", "2001-2010", "2011-2020", "2020+"];
        return years.map((year, index) => (
            <S.FilterList key={index}>
                {year}
            </S.FilterList>
        ));
    };

    const renderGenre = () => {
        const genres = ["Rock", "Pop", "RnB", "Jazz", "Hip-Hop"];
        return genres.map((genre, index) => (
            <S.FilterList key={index}>
                {genre}
            </S.FilterList>
        ));
    };

    return (
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterButton className="_btn-text" onClick={handleAuthor}>исполнителю</S.FilterButton>
            {isActiveAuthor && (
                <S.FilterAuthor>
                    <SimpleBar forceVisible="y" style={{ height: '300px' }}>
                        {renderAuthors()}
                    </SimpleBar>
                </S.FilterAuthor>
            )}
            <S.FilterButton className="_btn-text" onClick={handleYear}>году выпуска</S.FilterButton>
            {isActiveYear && <S.FilterYear>{renderYears()}</S.FilterYear>}
            <S.FilterButton className="_btn-text" onClick={handleGenre}>жанру</S.FilterButton>
            {isActiveGenre && <S.FilterGenre>{renderGenre()}</S.FilterGenre>}
        </S.CenterblockFilter>
    );
};

export default PlaylistFilter;

import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as S from "./filter.styles"


function yearFromDate(dateString) {
    const dateArray = dateString.split("-");
    if (dateArray.length >= 1) {
      return dateArray[0];
    } else {
      return null;
    }
  }

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
        const authorArray = []
        return tracks.map((track) => {
            if (authorArray.includes(track.author)) {
                return
            } else {
                authorArray.push(track.author)
                return <S.FilterList key={track.id}>
                {track.author}
                    </S.FilterList>
            }
        })
    };


    const renderGenre = () => {
        const genreArray = []
        return tracks.map((track) => {
            if (genreArray.includes(track.genre)) {
                return
            } else {
                genreArray.push(track.genre)
                return <S.FilterList key={track.id}>
                {track.genre}
                    </S.FilterList>
            }
        })
    };


  
    const renderSort = () => {
        const genreArray = []
        return tracks.map((track) => {
            if (genreArray.includes(track.genre)) {
                return
            } else {
                genreArray.push(track.genre)
                return <S.FilterList key={track.id}>
                {track.genre}
                    </S.FilterList>
            }
        })
    };

    return (
        <S.CenterblockFilter>

            <S.FilterFlex>
            <S.FilterTitle>Искать по:</S.FilterTitle>
                <S.FilterButton className="_btn-text" onClick={handleAuthor}>исполнителю</S.FilterButton>
                {isActiveAuthor && (
                    <S.FilterAuthor>
                        <SimpleBar forceVisible="y" style={{ height: '300px' }}>
                            {renderAuthors()}
                        </SimpleBar>
                    </S.FilterAuthor>
                )}
                <S.FilterButton style={{marginLeft: "15px"}} className="_btn-text" onClick={handleGenre}>жанру</S.FilterButton>
                {isActiveGenre && <S.FilterGenre>{renderGenre()}</S.FilterGenre>}
            </S.FilterFlex>
            <S.FilterFlex >
            <S.FilterTitle>Сортировка:</S.FilterTitle>
                <S.FilterButton  className="_btn-text" onClick={handleYear}> По умолчанию</S.FilterButton>
            {isActiveYear && <S.FilterSort>{renderSort()}</S.FilterSort>} 
            </S.FilterFlex>
        </S.CenterblockFilter>
    );
};

export default PlaylistFilter;



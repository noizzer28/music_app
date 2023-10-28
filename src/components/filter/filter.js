import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as S from "./filter.styles"
import { setSortedTracks } from "../../store/track.slice";
import { useDispatch } from "react-redux";



const PlaylistFilter = () => {
    const dispatch = useDispatch()
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeSort, setActiveSort] = useState("По умолчанию")
    
    const tracks = useSelector(state => state.tracks.tracks)

    const handleFilter = (filterName) => {
        setActiveFilter(filterName === activeFilter ? null : filterName);
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
        const sortArray = ["По умолчанию", 'Сначала старые', 'Сначала новые']
        return sortArray.map((element, index) => {
            if (element === activeSort) {
                return <S.FilterList key={index} >
                <strong>{element}</strong> 
                    </S.FilterList>
            }
                return <S.FilterList key={index} onClick={() => {
                    setActiveSort(element)
                    dispatch(setSortedTracks(element))
                    setActiveFilter(null)}}>
                {element}
                    </S.FilterList>
        })
    };

    return (
        <S.CenterblockFilter>

            <S.FilterFlex>
            <S.FilterTitle>Искать по:</S.FilterTitle>
                <S.FilterButton className="_btn-text" onClick={() => handleFilter("author")}>исполнителю</S.FilterButton>
                {activeFilter === "author" && (
                    <S.FilterAuthor>
                        <SimpleBar forceVisible="y" style={{ height: '300px' }}>
                            {renderAuthors()}
                        </SimpleBar>
                    </S.FilterAuthor>
                )}
                <S.FilterButton style={{marginLeft: "15px"}} className="_btn-text" onClick={() => handleFilter("genre")}>жанру</S.FilterButton>
                {activeFilter === "genre" && <S.FilterGenre>{renderGenre()}</S.FilterGenre>}
            </S.FilterFlex>
            <S.FilterFlex >
            <S.FilterTitle>Сортировка:</S.FilterTitle>
                <S.FilterButton  className="_btn-text" onClick={() => handleFilter("sort")}>{activeSort}</S.FilterButton>
            {activeFilter === "sort" && <S.FilterSort>{renderSort()}</S.FilterSort>} 
            </S.FilterFlex>
        </S.CenterblockFilter>
    );
};

export default PlaylistFilter;



import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector, useDispatch } from "react-redux";
import * as S from "./filter.styles"
import { setFilteredAuthor, setFilteredGenre, setSortedTracks, setFilteredTracks } from "../../store/track.slice";



export const PlaylistFilter = () => {
    const dispatch = useDispatch()
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeSort, setActiveSort] = useState("По умолчанию")
    const activeAuthors = useSelector(state => state.tracks.activeAuthors)
    const activeGenre = useSelector(state => state.tracks.activeGenre)
    const authors = useSelector(state => state.tracks.authors)
    const genres = useSelector(state => state.tracks.genres)
    

    const handleFilter = (filterName) => {
        setActiveFilter(filterName === activeFilter ? null : filterName);
    };

    const renderAuthors = () => {
        return authors.map((author, index) => {
                if (activeAuthors.includes(author)) {
                    return <S.FilterList key={index} onClick={() => {
                        dispatch(setFilteredAuthor(author))
                        dispatch(setFilteredTracks())
                    } }>
                        
                            <strong>{author}</strong>
                        </S.FilterList>
                }
                return <S.FilterList key={index} onClick={() => {
                    dispatch(setFilteredAuthor(author))
                    dispatch(setFilteredTracks())
                }}>
                            {author}
                    </S.FilterList>
            
        })
    };
    

    const renderGenre = () => {
        return genres.map((genre, index) => {
            if (activeGenre.includes(genre)) {
                return <S.FilterList key={index} onClick={ () => {
                     dispatch(setFilteredGenre(genre));
                    dispatch(setFilteredTracks())
                } }>
                <strong>{genre}</strong>
                    </S.FilterList>
            }
            return <S.FilterList key={index} onClick={() => {
                dispatch(setFilteredGenre(genre))
                dispatch(setFilteredTracks())
            }}>
            {genre}
                </S.FilterList>
        
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
            <S.FilterButtonWrapper>
                <S.FilterButton className="_btn-text" onClick={() => handleFilter("author")}>исполнителю</S.FilterButton>
                {activeAuthors.length > 0 &&  <S.FilterQuantity>{activeAuthors.length}</S.FilterQuantity>}
                {activeFilter === "author" && (
                    <S.FilterAuthor>
                        <SimpleBar forceVisible="y" style={{ height: '300px' }}>
                            {renderAuthors()}
                        </SimpleBar>
                    </S.FilterAuthor>
                )}
                </S.FilterButtonWrapper>
            <S.FilterButtonWrapper>
                <S.FilterButton style={{marginLeft: "15px"}} className="_btn-text" onClick={() => handleFilter("genre")}>жанру</S.FilterButton>
                {activeGenre.length > 0 &&  <S.FilterQuantity>{activeGenre.length}</S.FilterQuantity>}
                {activeFilter === "genre" && <S.FilterGenre>{renderGenre()}</S.FilterGenre>}
                </S.FilterButtonWrapper>
            </S.FilterFlex>
            <S.FilterFlex >
            <S.FilterTitle>Сортировка:</S.FilterTitle>
                <S.FilterButton  className="_btn-text" onClick={() => handleFilter("sort")}>{activeSort}</S.FilterButton>
            {activeFilter === "sort" && <S.FilterSort>{renderSort()}</S.FilterSort>} 
            </S.FilterFlex>
        </S.CenterblockFilter>
    );
};




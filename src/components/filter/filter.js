import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Tracks } from "../songs";
import styled  from "styled-components";

const StyledCenterblockFilter = styled.div`  display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-bottom: 51px;
position: relative;`


const StyledFilterTitle = styled.div`  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`
const StyledFilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
&:not(:last-child) {
    margin-right: 10px;
}`
const StyledFilterModal = styled.ul`
width: 248px;
background-color: #313131;
padding: 34px;
border-radius: 10px;
`
const StyledFilterAuthor = styled(StyledFilterModal)`
position: absolute;
top: calc(100% + 10px);
left: 8%;
`

const StyledFilterYear = styled(StyledFilterModal)`
position: absolute;
top: calc(100% + 10px);
left: 22%;
`
const StyledFilterGenre = styled(StyledFilterModal)`
position: absolute;
top: calc(100% + 10px);
left: 35%;
`
const StyledFilterList = styled.li`
margin-bottom: 25px;
transition: all 0.3s;
&:last-child {
    margin-bottom: 0;
  }
&:hover {
    text-decoration: underline;
    color: #ad61ff;
    cursor: pointer;
  }
`
// const Styled = styled.div``

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
            <StyledFilterList key={track.id}>
                {track.author}
            </StyledFilterList>
        ));
    };

    const renderYears = () => {
        const years = ["1990-2000", "2001-2010", "2011-2020", "2020+"];
        return years.map((year, index) => (
            <StyledFilterList key={index}>
                {year}
            </StyledFilterList>
        ));
    };

    const renderGenre = () => {
        const genres = ["Rock", "Pop", "RnB", "Jazz", "Hip-Hop"];
        return genres.map((genre, index) => (
            <StyledFilterList key={index}>
                {genre}
            </StyledFilterList>
        ));
    };

    return (
        <StyledCenterblockFilter>
            <StyledFilterTitle>Искать по:</StyledFilterTitle>
            <StyledFilterButton className="_btn-text" onClick={handleAuthor}>исполнителю</StyledFilterButton>
            {isActiveAuthor && (
                <StyledFilterAuthor>
                    <SimpleBar forceVisible="y" style={{ height: '300px' }}>
                        {renderAuthors()}
                    </SimpleBar>
                </StyledFilterAuthor>
            )}
            <StyledFilterButton className="_btn-text" onClick={handleYear}>году выпуска</StyledFilterButton>
            {isActiveYear && <StyledFilterYear>{renderYears()}</StyledFilterYear>}
            <StyledFilterButton className="_btn-text" onClick={handleGenre}>жанру</StyledFilterButton>
            {isActiveGenre && <StyledFilterGenre>{renderGenre()}</StyledFilterGenre>}
        </StyledCenterblockFilter>
    );
};

export default PlaylistFilter;

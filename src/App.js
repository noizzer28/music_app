import "./App.css";
import PlaylistItems from  "./components/songs"
import  Nav from "./components/navigation"
import { SideBar } from "./components/sidebar";
import { Bar } from "./components/playBar";
import SkeletonTrack from "./components/skeleton";
import { useState, useEffect } from "react";
import PlaylistFilter from "./components/filter";
import styled, { createGlobalStyle } from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`
const StyledContainer = styled.div`
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`

const StyledMain = styled.main`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`


const GlobalStyles = createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  

  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #fff;
  }
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../public/StratosSkyeng.woff2") format("woff2"),
      url("../public/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  ._btn-text:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  
  ._btn-icon:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  
  ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  
  ._btn-icon:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  
  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`


const StyledMainSenterblock = styled.div`  
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
const StyledCenterblockSearch = styled.div`
width: 100%;
border-bottom: 1px solid #4e4e4e;
margin-bottom: 51px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`

const StyledSenterblockHeader = styled.h2`  
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;`

const StyledCenterblockContent = styled.div`  
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;`


const StyledSearch = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #ffffff;
fill: transparent;
`


const StyledInputSearch = styled.input`
-webkit-box-flex: 100;
-ms-flex-positive: 100;
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
`

const StyledContentTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;`

const StyledPlaylistTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color:  #696969;
text-transform: uppercase;
`

const StyledPlaylistTitle_1 = styled(StyledPlaylistTitle)`
width: 447px;
`
const StyledPlaylistTitle_2 = styled(StyledPlaylistTitle)`
width: 321px;
`

const StyledPlaylistTitle_3 = styled(StyledPlaylistTitle)`
width: 245px;
`

const StyledPlaylistTitle_4 = styled(StyledPlaylistTitle)`
width: 60px;
text-align: end;
`
const StyledPlayListSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
const StyledContentPlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;`


function App() {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 5000);
  })
  return (  
    <>
    <GlobalStyles/>
    <StyledWrapper>
  <StyledContainer>
    <StyledMain>
      <Nav/>
      <StyledMainSenterblock>
        <StyledCenterblockSearch>
          <StyledSearch>
            <use xlinkHref="./icons/sprite.svg#icon-search"></use>
          </StyledSearch>
          <StyledInputSearch
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </StyledCenterblockSearch>
        <StyledSenterblockHeader>Треки</StyledSenterblockHeader>
        <PlaylistFilter/>
        <StyledCenterblockContent>
          <StyledContentTitle>
            <StyledPlaylistTitle_1>Трек</StyledPlaylistTitle_1>
            <StyledPlaylistTitle_2>ИСПОЛНИТЕЛЬ</StyledPlaylistTitle_2>
            <StyledPlaylistTitle_3>АЛЬБОМ</StyledPlaylistTitle_3>
            <StyledPlaylistTitle_4>
              <StyledPlayListSvg alt="time">
                <use xlinkHref="./icons/sprite.svg#icon-watch"></use>
              </StyledPlayListSvg>
            </StyledPlaylistTitle_4>
          </StyledContentTitle>
          <StyledContentPlaylist>
            {loading ? <SkeletonTrack/> : <PlaylistItems/>}
          </StyledContentPlaylist>
        </StyledCenterblockContent>
      </StyledMainSenterblock>
      <SideBar/>
    </StyledMain>
    <Bar/>
  </StyledContainer>
</StyledWrapper>
</>)
}


export default App;

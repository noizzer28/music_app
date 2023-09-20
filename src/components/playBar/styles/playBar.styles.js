import styled  from "styled-components";

export const BarContainer = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);`

export const BarContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;`

export const BarPlayerBlock = styled.div`
height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;`
export const BarPlayer = styled.div`
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
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;`
export const TrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  // display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  // -ms-flex-direction: row;
  // flex-direction: row;`
export const TrackPlayContainer = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`
export const TrackPlayImg = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 12px;
grid-row: 1;
-ms-grid-row-span: 2;
grid-column: 1;
grid-area: image;`
export const TrackPlaySvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;`
export const TrackPlayAuthor = styled.div`
grid-row: 1;
grid-column: 2;
grid-area: author;
min-width: 49px;`
export const TrackPlayAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
white-space: nowrap;`
export const TrackPlayAlbum = styled.div`
grid-row: 2;
grid-column: 2;
grid-area: album;
min-width: 49px;`
export const TrackPlayAlbumLink = styled.a`  
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #ffffff;`
export const TrackPlayLikeDis = styled.div`
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
margin-left: 26%;`

export const TrackPlayLike = styled.div`
padding: 5px;`
export const TrackPlayDisike = styled.div`
padding: 5px;
margin-left: 28.5px;`
export const TrackPlayLikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;`
export const TrackPlayDisLikeSvg = styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;`

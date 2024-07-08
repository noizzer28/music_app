import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
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
  ._btn,
  ._btn-icon {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  strong{
    color: rgb(182, 114, 255);
  }

  
  html,
  body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #fff;
  background-color: #181818;
}
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("/public/StratosSkyeng.woff2") format("woff2"),
      url("/public/StratosSkyeng.woff") format("woff");
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
  
  ._btn:hover svg {
    fill: #696969;
    stroke: #696969;
    cursor: pointer;
  }
  
  ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  
  ._btn-icon__active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  ._btn:active svg {
    fill: transparent;
    stroke: #D9D9D9;
    cursor: pointer;
  }
  
  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }

.playing-dot {
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
}

.playing-dot.active {
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 8px;
  display: block;
  animation: bubble_out 1s ease-in-out infinite both;
}

@keyframes bubble_out {
  0%, to {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
}

.activeLike svg{
  fill: #B672FF;
}
._btn-icon.activeLike:hover svg{
  fill: #B672FF
}

.mutedVolume::before {
 content: "";
 display: inline-block;
 position: absolute;
 width: 24px;
 height: 3px;
 transform: rotate(40deg);
 background-color: #D9D9D9;
 margin-top: 7px;
 margin-left: -6px;
}



`
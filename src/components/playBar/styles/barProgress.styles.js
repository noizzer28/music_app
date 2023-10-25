import styled  from "styled-components";


export const BarPlayerProgress = styled.div`
`

export const BarPlayerRange = styled.input`
--progress-width: 0px;
-webkit-appearance: none;
background-color: #2E2E2E;
height: 5px;
width: 100%;
margin: 0 auto;
outline: none;
position: relative;
&:hover{
    height: 8px;
}
&::-webkit-slider-thumb{

    cursor: pointer;
    -webkit-appearance: none;
}
&:hover::-webkit-slider-thumb{
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #FFF;
    opacity: 10%;
    cursor: pointer;
}
&:active::-webkit-slider-thumb{
    transfotm: scale(1.2);
    opacity: 30%;
    cursor: pointer;
}
&::before {
    content: "";
    height: 5px;
    position: absolute;
    background-color: #B672FF;
    width: var(--progress-width);
    top: 0;
    left: 0;    
    z-index: 2;
}
`

export const ProgressDuration = styled.div`
position: absolute;
top: -15px;
right: 20px;
color: #696969;
margin-right: 10px
font-size: 16px;
line-height: 18px;
`
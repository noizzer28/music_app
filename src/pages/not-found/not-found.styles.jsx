import styled  from "styled-components";


export const NotFoundFlex = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 60vh;

`

export const NotFoundNum = styled.h1`
font-size: 160px;
line-height: 168px;
font-weight: 400;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 36px;
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;

export const NotFoundText = styled.div`
color: #4E4E4E;
font-size: 18px;
line-height: 24px;

`
export const NotFound = styled.div`
font-size: 32px;
line-height: 40px; 
`

export const NotFoundSvg = styled.svg`
margin-left: 15px`

export const FlexWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 19px
`
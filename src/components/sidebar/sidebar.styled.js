import styled  from "styled-components";
import { Link } from "react-router-dom";

export const MainSideBar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;`
export const SideBarPersonal = styled.div`
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
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 12px 0 15px 0;`
export const SideBarName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin-right: 16px;`
export const SideBarIcon = styled.div`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
cursor: pointer;
`
export const SidebarBlock = styled.div`
height: 100%;
padding: 240px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;`
export const SideBarList = styled.div`  
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`
export const SidebarItem = styled.div`
width: 250px;
height: 150px;
transition-duration: 0.3s;
&:not(:last-child) {
  margin-bottom: 30px;
}
&:hover{
  transform: scale(1.04);

}`
export const Skeleton = styled.div`  width: 250px;
height: 150px;
background-color: #202020;`
export const SideBarLink = styled(Link)`
width: 100%;
height: 100%;`
export const SideBarImg = styled.img`
width: 100%;
height: auto;`

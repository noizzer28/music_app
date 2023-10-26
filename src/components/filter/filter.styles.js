import styled  from "styled-components";

export const CenterblockFilter = styled.div`  display: -webkit-box;
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
position: relative;
justify-content: space-between;`


export const FilterTitle = styled.div`  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`
export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
`
export const FilterModal = styled.ul`
width: 248px;
background-color: #313131;
padding: 34px;
border-radius: 10px;
z-index: 2;
`
export const FilterAuthor = styled(FilterModal)`
position: absolute;
top: calc(100% + 10px);
left: 8%;
`
export const FilterFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const FilterSort = styled(FilterModal)`
position: absolute;
top: calc(100% + 10px);
right: 0;
`
export const FilterGenre = styled(FilterModal)`
position: absolute;
top: calc(100% + 10px);
left: 22%;
`
export const FilterList = styled.li`
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

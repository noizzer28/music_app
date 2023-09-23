import styled  from "styled-components";

export const BarVolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;` 
export const VolumeContent = styled.div`
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
justify-content: flex-end;` 
export const VolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;` 
export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;` 
export const VolumeProgress = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 109px;` 
export const VolumeProgresLine = styled.input`
--volume-width: 10px;
-webkit-appearance: none;
background-color: #797979;
height: 2px;
width: 109px;
outline: none;
position: relative;
&::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    cursor: pointer;
    animate: 0.2s;
    background-color: #fff;
    border-radius: 50px;
    border: 2px solid #fff;
    opacity:1;
    z-index: 10;

}

&::before {
    content: "";
    height: 2px;
    position: absolute;
    background-color: #fff;
    width: var(--volume-width);
    top: 0;
    left: 0;    
}
` 

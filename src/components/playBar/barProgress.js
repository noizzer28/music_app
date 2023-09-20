import * as S from "./styles/barProgress.styles"


export const BarProgress = (({duration, setDuration}) => {
    return  <S.BarPlayerProgress>
        <S.ProgressDuration>{duration}</S.ProgressDuration>
        <S.BarPlayerRange type="range"  step='0.01'></S.BarPlayerRange>
    </S.BarPlayerProgress>
})
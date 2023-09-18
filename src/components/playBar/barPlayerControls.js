import * as S from "./styles/barPlayercontrols.styles"

 const  BarPlayerControls = ({isPlaying, setIsPlaying, audioRef}) =>  {

        function handlePlaying() {
            if (isPlaying) {
                setIsPlaying(false)
                audioRef.current.pause()
            } else {
                setIsPlaying(true)
                audioRef.current.play()
            }
        }
        return (<S.PlayerControls>
        <S.PlayerBtnPrev className="_btn">
            <S.PlayerBtnPrevSvg alt="prev">
            <use xlinkHref="./icons/sprite.svg#icon-next"></use>
            </S.PlayerBtnPrevSvg>
        </S.PlayerBtnPrev>
        <S.PlayerBtnPlay className="_btn" onClick={handlePlaying}>
        {isPlaying ?         
        <S.PlayerBtnPLaySvg alt="pause">
        <use xlinkHref="./icons/sprite.svg#icon-pause"></use>
        </S.PlayerBtnPLaySvg> :         
        <S.PlayerBtnPLaySvg alt="play">
        <use xlinkHref="./icons/sprite.svg#icon-play"></use>
        </S.PlayerBtnPLaySvg>}

    </S.PlayerBtnPlay>
    <S.PlayerBtnNext className="_btn">
        <S.PlayerBtnNextSvg alt="next">
        <use xlinkHref="./icons/sprite.svg#icon-next"></use>
        </S.PlayerBtnNextSvg>
    </S.PlayerBtnNext>
    <S.PlayerBtnRepeat className="_btn-icon">
        <S.PlayerBtnRepeatSvg alt="repeat">
        <use xlinkHref="/icons/sprite.svg#icon-repeat"></use>
        </S.PlayerBtnRepeatSvg>
    </S.PlayerBtnRepeat>
    <S.PlayerBtnShuffle className="_btn-icon">
        <S.PlayerBtnShuffleSvg alt="shuffle">
        <use xlinkHref="./icons/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
    </S.PlayerBtnShuffle>
    </S.PlayerControls>)
    }

    export default BarPlayerControls
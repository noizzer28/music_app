import * as S from "./styles/controls.styles"
import { useDispatch, useSelector } from "react-redux"
import { nextTrack } from "../../store/track.slice"
import { setIsPlaying } from "../../store/track.slice"

 const  BarPlayerControls = ({ audioRef, isLooped, setLoop}) =>  {

    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.tracks.isPlaying)

    function handleNext () {
        dispatch(nextTrack())
    }

        function handlePlaying() {

            if (isPlaying) {
                dispatch(setIsPlaying(false)) 
                audioRef.current.pause()
            } else {
                dispatch(setIsPlaying(true)) 
                audioRef.current.play()
            }
        }

        function handleLoop () {
            setLoop(!isLooped)
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
    <S.PlayerBtnNext className="_btn" onClick={handleNext}>
        <S.PlayerBtnNextSvg alt="next">
        <use xlinkHref="./icons/sprite.svg#icon-next"></use>
        </S.PlayerBtnNextSvg>
    </S.PlayerBtnNext>
    <S.PlayerBtnRepeat className={isLooped ? '_btn-icon _btn-icon__active' : '_btn-icon'}  onClick={handleLoop}>
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

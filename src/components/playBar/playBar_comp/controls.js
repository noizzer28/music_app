import * as S from "../styles/controls.styles"
import { useDispatch, useSelector } from "react-redux"
import { nextTrack, setIsPlaying, prevTrack, toggleShuffle, setShuffledTracks, setCurrentIndex } from "../../../store/track.slice"
import { useEffect } from "react"



export  const  BarPlayerControls = ({ audioRef, isLooped, setLoop, currentTime, setCurrentTime, targetRef}) =>  {

    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.tracks.isPlaying)
    const isShuffled = useSelector(state => state.tracks.isShuffled)
    const tracks = useSelector(state => state.tracks.tracks)
    const currentTrack = useSelector(state => state.tracks.currentTrack)
    const shuffledTracks = useSelector(state => state.tracks.shuffledTracks)
    const currentPlaylist = useSelector(state => state.tracks.currentPlaylist)


    function handleNext () {
        targetRef?.current?.scrollIntoView({ behavior: 'smooth' })
        dispatch((setIsPlaying(true)))
        dispatch(nextTrack())
    }

    function handlePrev () {
        targetRef?.current?.scrollIntoView({ behavior: 'smooth' });
        if (currentTime < 5) {
            dispatch((setIsPlaying(true)))
            dispatch(prevTrack())
        } else {
            audioRef.current.currentTime = 0;
            setCurrentTime(0)
        }
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

    function shuffle(array) {
        const newTracks = [...array]
        for (let i = newTracks.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [newTracks[i], newTracks[j]] = [newTracks[j], newTracks[i]];
        }
        return newTracks
    }

    function handleShuffle () {
        dispatch(toggleShuffle(!isShuffled))
        if (!isShuffled) {
            dispatch(setShuffledTracks(shuffle(currentPlaylist)))
            dispatch(setCurrentIndex(shuffledTracks.indexOf(currentTrack)))
        } else {
            dispatch(setCurrentIndex(currentPlaylist.indexOf(currentTrack)))
        }
    }
    useEffect(() => {
        if (isShuffled) {
            handleShuffle()
        }
    }, [currentPlaylist]);

    return (<S.PlayerControls>
    <S.PlayerBtnPrev className="_btn"  onClick={handlePrev}>
        <S.PlayerBtnPrevSvg alt="prev">
        <use xlinkHref="./icons/sprite.svg#icon-prev"></use>
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
    <S.PlayerBtnShuffle className={isShuffled ? '_btn-icon _btn-icon__active' : '_btn-icon'}  onClick={handleShuffle}>
        <S.PlayerBtnShuffleSvg alt="shuffle" >
        <use xlinkHref="./icons/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
    </S.PlayerBtnShuffle>
    </S.PlayerControls>)
    }

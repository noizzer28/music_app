import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState, useContext } from 'react'
import * as S from "./sidebar.styled"
import { SELECTED } from '../../pages/category/selected'
import { setInitialState } from '../../store/track.slice'
import { useNavigate } from 'react-router-dom'
import {  setRefreshToken } from "../../store/user.slice";
import { useDispatch, useSelector } from "react-redux";

export  const SideBar = ( ) => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.user.login)

  const navigate = useNavigate()
  const [loading, setloading] = useState(true)


  const handleLogout = () => {
    dispatch(setInitialState())
    localStorage.clear()
    dispatch(setRefreshToken(null))
    navigate('/login')
  }

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 700);
  })
    return(       
         <S.MainSideBar>
            {loading ? "" : <S.SideBarPersonal>
      <S.SideBarName>{login}</S.SideBarName>
      <S.SideBarIcon onClick={handleLogout}>
        <svg alt="logout">
          <use xlinkHref="/icons/sprite.svg#logout"></use>
        </svg>
      </S.SideBarIcon>
      </S.SideBarPersonal>} 

    <S.SidebarBlock>
      <S.SideBarList>
      {
        SELECTED.map((playlist) => (
          <S.SidebarItem key={playlist.id}>
          {loading ? <S.Skeleton></S.Skeleton> : <S.SideBarLink to={`/category/${playlist.id}`} >
              <S.SideBarImg
                src={playlist.image}
                alt={playlist.id}
              />
            </S.SideBarLink>}
  
          </S.SidebarItem>
        ))
      }
      </S.SideBarList>
    </S.SidebarBlock>
  </S.MainSideBar>)
  }
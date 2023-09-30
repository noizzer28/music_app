import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState, useContext } from 'react'
import * as S from "./sidebar.styled"
import { PLAYLISTS } from './categories'
import { UserContext } from '../context/context'

export  const SideBar = ( ) => {

  const {token, setToken} = useContext(UserContext)
  const [loading, setloading] = useState(true)
  const handleLogout = () => {
    localStorage.clear()
    setToken(null)
  }

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000);
  })
    return(       
         <S.MainSideBar>
            {loading ? "" : <S.SideBarPersonal>
      <S.SideBarName>{token}</S.SideBarName>
      <S.SideBarIcon onClick={handleLogout}>
        <svg alt="logout">
          <use xlinkHref="./icons/sprite.svg#logout"></use>
        </svg>
      </S.SideBarIcon>
      </S.SideBarPersonal>} 

    <S.SidebarBlock>
      <S.SideBarList>
      {
        PLAYLISTS.map((playlist) => (
          <S.SidebarItem key={playlist.id}>
          {loading ? <S.Skeleton></S.Skeleton> : <S.SideBarLink to={`/category/${playlist.id}`} >
              <S.SideBarImg
                src={playlist.image}
                alt={playlist.Playlist}
              />
            </S.SideBarLink>}
  
          </S.SidebarItem>
        ))
      }
      </S.SideBarList>
    </S.SidebarBlock>
  </S.MainSideBar>)
  }
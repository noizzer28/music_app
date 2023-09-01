import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'
import * as S from "./sidebar.styled"

export  const SideBar = () => {

  
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 5000);
  })
    return(       
         <S.MainSideBar>
            {loading ? "" :     <S.SideBarPersonal>

      <S.SideBarName>Sergey.Ivanov</S.SideBarName>
      <S.SideBarIcon>
        <svg alt="logout">
          <use xlinkHref="./icons/sprite.svg#logout"></use>
        </svg>
      </S.SideBarIcon>
      </S.SideBarPersonal>} 

    <S.SidebarBlock>
      <S.SideBarList>

        <S.SidebarItem>
        {loading ? <S.Skeleton></S.Skeleton> : <S.SideBarLink href="#">
            <S.SideBarImg
              src="./playlist01.png"
              alt="day's playlist"
            />
          </S.SideBarLink>    }

        </S.SidebarItem>
        <S.SidebarItem>
        {loading ? <S.Skeleton></S.Skeleton> :
          <S.SideBarLink href="#">
            <S.SideBarImg
              src="./playlist02.png"
              alt="day's playlist"
            />
          </S.SideBarLink>}
        </S.SidebarItem>
        <S.SidebarItem>
        {loading ? <S.Skeleton></S.Skeleton> :
          <S.SideBarLink href="#">
            <S.SideBarImg
              src="./playlist03.png"
              alt="day's playlist"
            />
          </S.SideBarLink>}
        </S.SidebarItem>
      </S.SideBarList>
    </S.SidebarBlock>
  </S.MainSideBar>)
  }
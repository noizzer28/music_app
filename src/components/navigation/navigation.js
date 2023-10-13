import React, { useState, useContext } from "react";
import * as S from "./navigation.styles"
import { UserContext } from "../context/context";


function Nav() {
  const {refreshToken, setRefreshToken} = useContext(UserContext)
  const [isActive, setIsActive] = useState(true);

  const hideSideBar = () => {
    setIsActive(!isActive);
  };

  const handleLogOut = () => {
    localStorage.clear()
    setRefreshToken({token: null})
  }

  const handleFavorites = async () => {
    console.log('1')
  }


  return (
    <S.MainNav >
      <S.NavLogo>
        <S.LogoImage src="./logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={hideSideBar}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {!isActive && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/" style={({ isActive }) => {
                  return {
                    color: isActive ? "#ad61ff" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}>
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to='/favorites' onClick={handleFavorites} style={({ isActive }) => {
                    return {
                      color: isActive ? "#ad61ff" : "",
                      textDecoration: isActive ? "underline" : "",
                    };
                  }}>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink onClick={handleLogOut} to='/login' style={({ isActive }) => {
                    return {
                      color: isActive ? "#ad61ff" : "",
                      textDecoration: isActive ? "underline" : "",
                    };
                  }}>
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}

export default Nav;

import React, { useState } from "react";
import * as S from "./navigation.styles"

function Nav() {
  const [isActive, setIsActive] = useState(true);

  const hideSideBar = () => {
    setIsActive(!isActive);
  };

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
              <S.MenuLink to='/favorites' style={({ isActive }) => {
    return {
      color: isActive ? "#ad61ff" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }}>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to='/login' style={({ isActive }) => {
    return {
      color: isActive ? "#ad61ff" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }}>
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}

export default Nav;

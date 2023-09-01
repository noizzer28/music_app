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
              <S.MenuLink>
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink>
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

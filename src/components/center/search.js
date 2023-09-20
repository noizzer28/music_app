import * as S from "../../pages/main/app.styles"

export function Search (){

    return (<S.CenterblockSearch>
        <S.Search>
          <use xlinkHref="./icons/sprite.svg#icon-search"></use>
        </S.Search>
        <S.InputSearch
          type="search"
          placeholder="Поиск"
          name="search"
        />
        </S.CenterblockSearch>)



}
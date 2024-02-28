import { useDispatch } from "react-redux"
import * as S from "../../pages/main/main.styles"
import { setSearch, setFilteredTracks } from "../../store/track.slice"


export function Search (){
  const dispatch = useDispatch()

    return (<S.CenterblockSearch>
        <S.Search>
          <use xlinkHref="./icons/sprite.svg#icon-search"></use>
        </S.Search>
        <S.InputSearch
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={(e)=> {
            dispatch(setSearch(e.target.value))
            dispatch(setFilteredTracks())
          } }
        />
        </S.CenterblockSearch>)



}
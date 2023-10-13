import { Link, useNavigate } from "react-router-dom"
import * as S from "./login.styled";
import { useContext, useEffect, useState } from "react";
import { Authorisation, Registration, GetToken } from "../../api";
import { UserContext } from "../../components/context/context";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setLogin } from "../../store/user.slice";

export  function AuthPage({ isLoginMode = false}) {
  const dispatch = useDispatch()
  const password = useSelector(state => state.user.password)
  const login = useSelector(state => state.user.login)
  const [error, setError] = useState(null)

  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {refreshToken, setRefreshToken, accessToken, setAccessToken} = useContext(UserContext)



  const handleLogin = async ({ login, password }) => {
    setLoading(true)  
    if (!password || !login)  {
      setError(`Все поля должны быть заполнены`)
      return
    }
    try {
      const data  = await Promise.all([Authorisation({login, password}), GetToken({login, password})])
      console.log(data)
      setRefreshToken(data[1].refresh)
      setAccessToken(data[1].access)
      localStorage.setItem('token', refreshToken)
      navigate(`/`)
    } catch (error) {
      console.error(error)
      setError(`Ошибка: ${error.message}`)
    }
    setLoading(false)
  };

  const handleRegister = async () => {
    setLoading(true)
    if (!password || !repeatPassword || !login)  {
      setError(`Все поля должны быть заполнены`)
      return
    }
    if (password !== repeatPassword) {
      setError(`Введенные пароли не совпадают`)
      return
    }

    try {
      const data  = await Promise.all([Registration({login, password}), GetToken({login, password})])
      setRefreshToken(data[1].refresh)
      localStorage.setItem('token', refreshToken)
      navigate(`/`)
    } catch (error) {
      console.error(error)
      setError(`Ошибка: ${error.message}`)
    }
    setLoading(false)
  }

  useEffect(() => {
    setError(null);
    setLoading(false)
  }, [isLoginMode, login, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="./logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={login}
                onChange={(event) => {
                  dispatch(setLogin(event.target.value));
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  dispatch(setPassword(event.target.value));
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading ? true : false} onClick={() => handleLogin({ login, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={login}
                onChange={(event) => {
                  dispatch(setLogin(event.target.value));
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  dispatch(setPassword(event.target.value));
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading ? true : false} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
              <Link to="/login">
                <S.SecondaryButton>Войти</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
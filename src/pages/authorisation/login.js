import { Link, useNavigate } from "react-router-dom"
import * as S from "./login.styled";
import {  useEffect, useState } from "react";
import { Authorisation, Registration, GetToken } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setLogin, setRefreshToken } from "../../store/user.slice";
import { FetchRefreshToken } from "../../store/user.slice";


export  function AuthPage({ isLoginMode = false}) {
  const dispatch = useDispatch()
  const {password, login } = useSelector(state => state.user)
  const [error, setError] = useState(null)
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()



  const handleLogin = async ({ login, password }) => {
    setLoading(true)  
    if (!password || !login)  {
      setError(`Все поля должны быть заполнены`)
      return
    }
    try {
      const data  = await Promise.all([Authorisation({login, password}), dispatch(FetchRefreshToken({login, password}))])

      const user = {
        token: data[1].payload.refresh,
        name: login 
        }

        localStorage.setItem("token", JSON.stringify(user))
        navigate('/')
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
      const userData = await Registration({login, password})
      const tokenData = await dispatch(FetchRefreshToken({login, password}))
      const user = {
        token: tokenData?.payload?.refresh || undefined,
        name: userData?.username || undefined
        }
      localStorage.setItem("token", JSON.stringify(user))
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
            <S.ModalLogoImage src="../logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <form>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={login}
                autoComplete={login}
                onChange={(e) => {
                  dispatch(setLogin(e.target.value));
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                autoComplete={password}
                onChange={(event) => {
                  dispatch(setPassword(event.target.value));
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton type="submit"  disabled={isLoading ? true : false} onClick={() => handleLogin({ login, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </form>
        ) : (
          <form>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={login}
                autoComplete={login}
                onChange={(event) => {
                  dispatch(setLogin(event.target.value));
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                autoComplete={password}
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
          </form>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
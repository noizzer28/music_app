import { Link, useNavigate } from "react-router-dom"
import * as S from "./login.styled";
import { useEffect, useState } from "react";
import { Authorisation, Registration } from "../../api";

export  function AuthPage({ isLoginMode = false, setToken }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleLogin = async ({ email, password }) => {
    setLoading(true)  
    Authorisation({email, password})
        .then((data) => {
          setToken(`token`, data.username)
          localStorage.setItem('token', data.username)
          navigate(`/`)
        }).catch((error) => {
          console.error(error)
        setError(`Ошибка: ${error.message}`)
      })

  };

  const handleRegister = async () => {
    setLoading(true)
    if (!password || !repeatPassword || !email)  {
      setError(`Все поля должны быть заполнены`)
      return
    }
    if (password !== repeatPassword) {
      setError(`Введенные пароли не совпадают`)
      return
    }
      Registration({email, password})
      .then((data) => {
        setToken(`token`, data.username)
        localStorage.setItem('token', data.username)
        navigate(`/`)
      }).catch((error) => {
        console.error(error)
      setError(`Ошибка: ${error.message}`)
    })
    setLoading(false)
  }

  useEffect(() => {
    setError(null);
    setLoading(false)
  }, [isLoginMode, email, password, repeatPassword]);

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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isLoading ? true : false} onClick={() => handleLogin({ email, password })}>
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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
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
import { Link } from "react-router-dom"
import styled  from "styled-components";

const StyledLogin = styled.h1`
margin: 50px auto;
`

const StyledEnterBtn = styled.button`
width: 50px;
height: 25px;
background-color: violet;
margin-bottom: 30px`


export const Login =() => {
    return (
        <div>
            <StyledLogin>Login</StyledLogin>
            <StyledEnterBtn>Войти</StyledEnterBtn>
            <div>
                <Link to="/authorisation">Зарегистрироваться</Link>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import styled  from "styled-components";
import { useState  } from "react";  


const StyledLogin = styled.h1`
margin: 50px 15px;
`

const StyledLoginBtn = styled.button`
width: 70px;
height: 50px;
background-color: violet;
margin: 30px 15px`

const StyledLinkBtn = styled(Link)`
display: block;
width: 70px;
height: 50px;
background-color: violet;
margin: 30px 15px`



export const Login = () => {

  
    return (
        <div>
            <StyledLogin>Login</StyledLogin>
            <StyledLoginBtn
                onClick={console.log("1")}>Войти</StyledLoginBtn>
            <div>
                <Link to="/authorisation">Зарегистрироваться</Link>
            </div>
            <div>
                <StyledLinkBtn to="/">К списку треков</StyledLinkBtn>
            </div>
        </div>
    )
}
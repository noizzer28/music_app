import { Link, Navigate, useNavigate } from "react-router-dom"
import styled  from "styled-components";


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



export const Login = ({setToken}) => {
    const navigate = useNavigate()
    const handleLogin = ()=> {
        setToken({token: "someToken"})
        localStorage.setItem("token", "user")
        navigate("/")
    }
  
    return (
        <div>
            <StyledLogin>Login</StyledLogin>
            <StyledLoginBtn
                onClick={handleLogin}>Войти</StyledLoginBtn>
            <div>
                <Link to="/authorisation">Зарегистрироваться</Link>
            </div>
        </div>
    )
}
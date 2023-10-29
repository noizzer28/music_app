import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setRefreshToken, setLogin } from "../../store/user.slice";


export const ProtectedRoute = () => {
    console.debug("Protected route")
    const login = useSelector(state => state.user.login)

    console.log(login)
    return (
        login ?  <Outlet/> : <Navigate to={'/login'}/>
    )

}
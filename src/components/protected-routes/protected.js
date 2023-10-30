import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";



export const ProtectedRoute = () => {

    const login = useSelector(state => state.user.login)

    return (
        login ?  <Outlet/> : <Navigate to={'/login'}/>
    )

}
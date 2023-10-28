import { Routes, Route, Router } from "react-router-dom";
import { MainApp } from "../../pages/main/main";
import  { AuthPage } from "../../pages/authorisation/login";
import { Favorites } from "../../pages/favorites/favorites";
import { Category } from "../../pages/category/category";
import { NotFound } from "../../pages/not-found/not-found";
import { ProtectedRoute } from "./protected";
import { MainTracks } from "../../pages/main/mainTracks";
import { useDispatch, useSelector } from "react-redux";
import { setRefreshToken, setLogin } from "../../store/user.slice";
import { useEffect } from "react";

export const AppRoutes = () => {
    console.log('here')
    const login = useSelector(state => state.user.login)
    console.log(login)
    const dispatch = useDispatch()
    useEffect(() => {
        const initializeUser =  () => {
            const user = JSON.parse(localStorage.getItem('token'));
            if (user) {
                dispatch(setRefreshToken(user.token));
                dispatch(setLogin(user.name));  
            }
            return user
        }
          initializeUser();
    });


    return (
        <Routes>
            <Route element={<ProtectedRoute  isAllowed={login}></ProtectedRoute>}>
                <Route path="/" element={<MainApp/>}>
                    <Route index path="/" element={<MainTracks/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/category/:id" element={<Category/>}/>
                </Route>
            </Route>
            <Route
                path="/login"
                element={<AuthPage  isLoginMode={true}></AuthPage>}
            ></Route>
            <Route
                path="/register"
                element={<AuthPage  isLoginMode={false}></AuthPage>}
            ></Route>
            <Route path="*" element={<NotFound/ >} />
        </Routes>
    )
}
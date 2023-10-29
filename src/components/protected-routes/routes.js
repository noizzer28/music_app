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
        console.debug("Routes")


        return (
            <Routes>
                <Route element={<ProtectedRoute/>}>
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
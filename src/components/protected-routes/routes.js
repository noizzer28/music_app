    import { Routes, Route, Router } from "react-router-dom";
    import { MainApp } from "../../pages/main/main";
    import  { AuthPage } from "../../pages/authorisation/login";
    import { Favorites } from "../../pages/favorites/favorites";
    import { Category } from "../../pages/category/category";
    import { NotFound } from "../../pages/not-found/not-found";
    import { ProtectedRoute } from "./protected";
    import { MainTracks } from "../../pages/main/mainTracks";
    import { useDispatch } from "react-redux";
    import { setRefreshToken, setLogin } from "../../store/user.slice";



    const user =  () => {
        const dispatch = useDispatch()
        const userData =  JSON.parse(localStorage.getItem('token'));
        if (userData) {
            dispatch(setRefreshToken(userData.token));
            dispatch(setLogin(userData.name));  
        }
        return userData
    }


    export const AppRoutes = () => {

        user()
    
        console.log('routes')
        return (
            <Routes>
                <Route element={<ProtectedRoute/>}>
                    <Route element={<MainApp/>}>
                        <Route path="/" element={<MainTracks/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/category/:id" element={<Category/>}/>
                        <Route path="*" element={<NotFound />} />
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
            </Routes>
        )
    }
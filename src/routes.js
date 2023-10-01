import { Routes, Route } from "react-router-dom";
import MainApp from "./pages/main/main";
import  { AuthPage } from "./pages/authorisation/login";
import { Favorites } from "./pages/favorites/favorites";
import { Category } from "./pages/category/category";
import { NotFound } from "./pages/not-found/not-found";
import { ProtectedRoute } from "./components/protected-routes/protected";
import { useContext, useReducer } from "react";
import { UserContext } from "./components/context/context";


export const AppRoutes = () => {
    const user = useContext(UserContext)
    return (
        <Routes>
            <Route element={<ProtectedRoute  isAllowed={localStorage.getItem('token')}></ProtectedRoute>}>
                <Route path="/" element={<MainApp/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/category/:id" element={<Category/>}/>
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
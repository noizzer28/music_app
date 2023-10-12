import { Routes, Route } from "react-router-dom";
import { MainApp } from "./pages/main/main";
import  { AuthPage } from "./pages/authorisation/login";
import { Favorites } from "./pages/favorites/favorites";
import { Category } from "./pages/category/category";
import { NotFound } from "./pages/not-found/not-found";
import { ProtectedRoute } from "./components/protected-routes/protected";
import { Layout }  from "./components/layout/layout"
import { AllTracks } from "./components/tracks/mainTracks";



export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute  isAllowed={localStorage.getItem('token')}></ProtectedRoute>}>
                <Route path="/" element={<MainApp/>}>
                    <Route index path="/" element={<AllTracks/>}/>
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
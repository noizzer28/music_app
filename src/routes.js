import { Routes, Route } from "react-router-dom";
import MainApp from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Favorites } from "./pages/favorites/favorites";
import { Authorisation } from "./pages/authorisation/auth";
import { Category } from "./pages/category/category";
import { NotFound } from "./pages/not-found/not-found";
import { ProtectedRoute } from "./components/protected-routes/protected";

export const AppRoutes = ({ setToken }) => {

    return (
        <Routes>
            <Route element={<ProtectedRoute  isAllowed={Boolean(localStorage.getItem("token"))}></ProtectedRoute>}>
                <Route path="/" element={<MainApp setToken={setToken}/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/category/:id" element={<Category/>}/>
            </Route>
            <Route path="/login" element={<Login setToken={setToken}/>}/>
            <Route path="/authorisation" element={<Authorisation/>}/>   
            <Route path="*" element={<NotFound/ >} />

        </Routes>
    )
}
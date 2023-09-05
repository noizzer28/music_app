import { Routes, Route } from "react-router-dom";
import MainApp from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Favorites } from "./pages/favorites/favorites";
import { Authorisation } from "./pages/authorisation/auth";
import { Category } from "./pages/category/category";
import { NotFound } from "./pages/not-found/not-found";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainApp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/authorisation" element={<Authorisation/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="*" element={<NotFound/ >} />
        </Routes>
    )
}
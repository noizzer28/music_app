import { Routes, Route } from "react-router-dom";
import MainApp from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Favorites } from "./pages/favorites/favorites";
import { Authorisation } from "./pages/authorisation/auth";
import { Category1 } from "./pages/category/category1";
import { Category2 } from "./pages/category/category2";
import { Category3 } from "./pages/category/category3";
import { NotFound } from "./pages/not-found/not-found";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainApp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/authorisation" element={<Authorisation/>}/>
            <Route path="/category1" element={<Category1/>}/>
            <Route path="/category2" element={<Category2/>}/>
            <Route path="/category3" element={<Category3/>}/>
            <Route path="*" element={<NotFound/ >} />
        </Routes>
    )
}
import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>Smoke-city</h1>
            <p>Интернет-магазин</p>
            <div className="blog">
                <NavLink to="/Main">Главная</NavLink>
                <NavLink to="/Delivery">Доставка</NavLink>
                <NavLink to="/Pay">Оплата</NavLink>
                <NavLink to="/Contact">Контакты</NavLink>
            </div>
        </div >
    )
}

export default Header;
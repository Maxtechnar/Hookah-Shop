import React from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="/Hookah">Кальяны</NavLink>
            <a href="№">Уголь</a>
            <a href="№">Табак</a>
            <a href="№">Комплектующие</a>
            <a href="№">Аксессуары</a>
            <a href="№">Аренда Кальянов</a>
        </div>
    )
}

export default Nav;
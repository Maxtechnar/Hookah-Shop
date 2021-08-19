import React from "react";
import "./Container.css"

const Container = () => {
    return (
        <div className="container">
            <h1>ИНТЕРНЕТ МАГАЗИН И АРЕНДА<br />
                КАЛЬЯНОВ В МИНСКЕ</h1>
            <h4>Шахты, колбы, шланги, чаши и другие комплектующие и аксессуары для кальянов. Всегда в наличии, доставка в день заказа.</h4>
            <div className="btn">
                <div className="btn1"><a href="№">КАТАЛОГ ТОВАРОВ</a></div>
                <div className="btn2"><a href="№">АРЕНДА КАЛЬЯНОВ</a></div>
            </div>
        </div>
    )
}

export default Container;
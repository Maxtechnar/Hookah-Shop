import React from "react";
import "./Section.css";


const Section = () => {
    return (
        <div className="section">
            <div className="gallery1">
                <div className="card1">
                    <h1>Кальяны</h1>
                    <p>ВСЕГДА В НАЛИЧИИ. ДОСТАВКА ДЕНЬ В ДЕНЬ</p>
                    <div className="transition1"><a href="№">В КАТАЛОГ</a></div>
                    <img src="https://smokeshop.by/design/smokeshopby/assets/images/hookah-category.png" alt="" />
                </div>
                <div className="card2">
                    <h1>Комплектующие</h1>
                    <p>ЧАШИ, КОЛБЫ, ШЛАНГИ И МНОГОЕ ДРУГОЕ</p>
                    <div className="transition1"><a href="№">В КАТАЛОГ</a></div>
                    <img src="https://smokeshop.by/design/smokeshopby/assets/images/complect-category.png" alt="" />
                </div>
            </div>
            <div className="gallery1">
                <div className="card1">
                    <h1>Аксессуары</h1>
                    <p>ВСЕГДА В НАЛИЧИИ. ДОСТАВКА ДЕНЬ В ДЕНЬ</p>
                    <div className="transition1"><a href="№">В КАТАЛОГ</a></div>
                    <img src="https://smokeshop.by/design/smokeshopby/assets/images/access-category.png" alt="" />
                </div>
                <div className="card2">
                    <h1>Уголь</h1>
                    <p>ЧАШИ, КОЛБЫ, ШЛАНГИ И МНОГОЕ ДРУГОЕ</p>
                    <div className="transition1"><a href="№">В КАТАЛОГ</a></div>
                    <img src="https://smokeshop.by/design/smokeshopby/assets/images/coco-category.png" alt="" />
                </div>
            </div>
        </div>


    )
}

export default Section;
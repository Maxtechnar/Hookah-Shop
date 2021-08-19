import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="background1">
                <h1>КОНТАКТЫ</h1>
            </div>
            <div className="feedback">
                <h1>ОБРАТНАЯ СВЯЗЬ</h1>
                <p>Гирко Алексей Николаевич Индивидуальный предприниматель<br />
                    Адрес:РБ, Г. МИНСК, УЛ. КАРВАТА, Д. 29А ОФ. 3<br />
                    УНП: 193165309<br />
                    Текущий (расчетный) <br />
                    № BY06ALFA30132410950030270000 в BYN <br />
                    в ЗАО "Альфа-Банк" <br />
                    БИК: ALFABY2X, <br />
                    Юридический адрес банка Сурганова 43-47</p>
                <br />
                <h4>Режим работы:</h4>
                <h4>пн-пт 10:00 - 20:00</h4>
                <p>Книга замечаний и предложений находится по адресу: <br />
                    Г. МИНСК, УЛ. КАРВАТА, Д. 29А ОФ. 3</p>
                <h3>+375 29 564 27 65 <br />
                    smokecityby@gmail.com
                </h3>
            </div>
            <div className="form">
                <p>Имя<br />
                    <p></p>
                    <input type="text" />
                </p>

                <p>Email<br />
                    <p></p>
                    <input type="text" />
                </p>

                <p>Сообщение<br />
                    <p></p>
                    <textarea name="" id="" cols="30" rows=""></textarea>
                </p>
                <button>
                    Отправить
                </button>

            </div>
        </div>
    )
}

export default Contact;
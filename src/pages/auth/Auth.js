import React, { useState } from 'react';
import logo from "../../images/logo.png"


const Auth = () => {
    const [email, setEmail] = useState(null);
    const [warning, setWarning] = useState(false);


    function onEmailSubmit() {
        email ? setWarning(false) : setWarning(true)
    };


    return (
        <div className="authoriz">
            <div className="container">
                <div className="authoriz__wrapper">
                    <form onSubmit={onEmailSubmit}
                        className="authoriz__logo logo">
                        <img src={logo} alt="logo" />
                        <div className="authoriz__title">Авторизация</div>
                        <div className="authoriz__text">Введите e-mail</div>
                        <div className="authoriz__input">
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                onSubmit={onEmailSubmit}
                                type="email"
                                required
                                placeholder="mail@yandex.ru"></input>
                            {warning &&
                                <div className="authoriz__input-error">Заданный email не найден, введите другой email</div>}
                        </div>

                        <button
                            type="submit"
                            className="btn authoriz__btn">Получить пароль</button>
                    </form>
                </div>
            </div>
        </div >
    );
};


export default Auth;

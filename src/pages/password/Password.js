import React, { useState } from 'react';
import logo from "../../images/logo.png"



const Password = () => {
    const [password, setPassword] = useState(null);
    const [warning, setWarning] = useState(false);

    function onPasswordSubmit() {
        password ? setWarning(false) : setWarning(true)
    };

    return (
        <div className="password">
            <div className="container">
                <div className="password__wrapper">
                    <form onSubmit={onPasswordSubmit}
                        className="password__logo logo">
                        <img src={logo} alt="logo" />
                        <div className="password__title">Введите пароль</div>
                        <div className="password__text">На email ***@gmail.com был отправлен пароль, пожалуйста, введите его"</div>
                        <div className="password__input">
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                type="password"
                                required
                                placeholder="12GH3213123GH" />
                            {warning &&
                                <div className="password__input-error">Заданный email не найден, введите другой email</div>}
                        </div>

                        <div className="password__button">
                            <button
                                type="submit"
                                className="btn password__button-btn">Продолжить</button>
                            <button className="btn password__button-cancel">Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Password;

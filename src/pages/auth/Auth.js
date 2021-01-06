import React, { useState } from 'react';
import logo from "../../images/logo.png";
import { logIn } from '../../helpers/authorization';


const Auth = () => {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    //const [error, setError] = useState(false);
    const [authData, setAuthData] = useState(null);


    function onAuthorizationSubmit(event) {
        event.preventDefault();
        logIn(login, password)
            .then(resp => setAuthData(resp))
    };

    //{console.log("error:", error, "authData:", authData)}
   // console.log(authData)

    return (
        <div className="authoriz">
            <div className="container">
                <div className="authoriz__wrapper">
                    <form onSubmit={(event) => { onAuthorizationSubmit(event) }}
                        className="authoriz__logo logo">
                        <img src={logo} alt="logo" />
                        <div className="authoriz__title">Авторизация</div>


                        <div className="login">
                            <div className="authoriz__text">Введите логин</div>
                            <div className="authoriz__input">
                                <input
                                    onChange={(event) => setLogin(event.target.value)}
                                    type="text"
                                    required
                                    placeholder="логин"></input>
                            </div>
                        </div>

                        <div className="password">
                            <div className="password__text">Введите пароль</div>
                            <div className="password__input">
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    required
                                    placeholder="*****" />
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="btn authoriz__btn">Продолжить</button>
                    </form>
                </div>
            </div>
        </div >
    );
};


export default Auth;

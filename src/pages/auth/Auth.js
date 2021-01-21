import React, { useState, useEffect } from 'react';
import logo from "../../images/logo.png";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginModal from '../../components/Modals/LoginModal';
import Loader from "../../components/Loader/Loader"
import { loginRequest } from "../../store/authorization/actions";


const Auth = (props) => {
    const { history, token, loader, error } = props;

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);


    const onAuthorizationSubmit = (event) => {
        event.preventDefault();
        const data = { login, password };
        props.loginUser(data);
    };


    useEffect(() => {
        if (token) {
            history.push('/overhead')
        }
    }, [token, history]);


    return (
        <div className="authoriz">
            <div className="container">
                <div className="authoriz__wrapper">

                    {loader ?
                        <Loader />
                        :
                        error ?
                            <LoginModal />
                            :
                            < form onSubmit={(event) => { onAuthorizationSubmit(event) }}
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
                    }

                </div>
            </div>
        </div >
    );
};



const mapStateToProps = (state) => ({
    token: state.authorization.token,
    loader: state.authorization.loader,
    error: state.authorization.error
});

const mapDispatchToProps = dispatch => ({
    loginUser: (data) => dispatch(loginRequest(data))
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Auth)
);

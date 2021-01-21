import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../store/authorization/actions';



const Navbar = (props) => {

    const onLogOut = () => {
        localStorage.clear();
        props.logOut();
        props.history.push('/');
    };

    const userData = `${props.user}(${localStorage.getItem('drSoftLogin')})`;


    return (
        <>
            <header className="header">
                <ul className="menu">

                    <li className="menu__list">
                        <Link to="/overhead" className="menu__list-link">Все накладные</Link>
                    </li>

                    <li className="menu__list">
                        <Link to="/accent" className="menu__list-link">Одна накладная</Link>
                    </li>

                    {/*<li className="menu__list">
                        <Link  to="/skan" className="menu__list-link">Skan Page</Link>
                    </li>*/} 


                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Справочники</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Формы
                            <div className="menu__list-sublink">
                                <div className="menu__list-sublink-word">
                                    <span>Справочники</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Продажи</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Должники</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Предоплата</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Наряды</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Дни рождения пациентов</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Госпитализация</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                                <div className="menu__list-sublink-word">
                                    <span>Раздватри</span>
                                    <div className="menu__list-sublink-block">
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                        <div className="menu__list-sublink-subword">Справочники</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">ТМЦ</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Профосмотры</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Отчеты</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Польз.отчеты</a>
                    </li>
                    {/*<li className="menu__list">
                        <a href="#" className="menu__list-link">Опросы</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Helix</a>
                    </li>
                     <li className="menu__list">
                        <a href="#" className="menu__list-link">Администрирование</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Помощь</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Докторов Д.Д. (sa)</a>
                    </li>
                    <li className="menu__list">
                        <a href="#" className="menu__list-link">Пациенты</a>
                    </li> */}

                    <li className="menu__list">
                        <a className="menu__list-link-user">{userData}</a>
                    </li>

                    <button onClick={() => (onLogOut())}
                        className="menu__list"
                    >Выход</button>
                </ul>
            </header>
        </>
    );
};


const mapStateToProps = (state) => ({
    nakladni: state.nakladni.nakladni,
    loader: state.nakladni.loader,
    error: state.nakladni.error,
    addNaklModal: state.nakladni.addNaklModal,
    user: state.authorization.user
});

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));


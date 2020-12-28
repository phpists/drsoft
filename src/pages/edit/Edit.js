import React, { useState } from 'react';



const Edit = () => {


    return (
        <div className="edit">
            <div className="container">
                <div className="edit__block">
                    <div className="edit__block-title">Поставщик</div>
                    <div className="edit__block-subtitle">Для записи к гинекологу</div>
                    <form className="edit__block-form">
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">ФИО</div>
                            <div className="edit__block-form-right">
                                <input
                                    type="text"
                                    placeholder="Анатолий Анатольевич Анатольев"
                                />
                            </div>
                        </div>
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">Телефон</div>
                            <div className="edit__block-form-right">
                                <input type="tel" />
                            </div>
                        </div>
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">Дата рождения</div>
                            <div className="select edit__block-form-right">
                                <div className="edit__block-selector edit__block-form-right">
                                    <span className="select__current">2020</span>
                                </div>
                                <div className="select__body-bg"></div>
                                <div className="select__body">
                                    <div className="edit__block-option">2020</div>
                                    <div className="edit__block-option">2019</div>
                                    <div className="edit__block-option">2018</div>
                                    <div className="edit__block-option">2017</div>
                                    <div className="edit__block-option">2016</div>
                                    <div className="edit__block-option">2015</div>
                                </div>
                            </div>
                        </div>
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">Примечание</div>
                            <div className="edit__block-form-right">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </form>
                    <div className="edit__block-check">
                        <div>
                            <label className="label">
                                <input type="checkbox" className="checkbox" />
                                <span className="fake"></span>
                            </label>
                        </div>
                        <div className="edit__block-text">
                            Сохранить мои данные на этом компьютере в течении 5 минут
              </div>
                    </div>
                    <div className="skan__button">
                        <a href="#" className="btn skan__button-btn">Отправить</a>
                        <a href="#" className="btn skan__button-cancel">Отмена</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Edit;

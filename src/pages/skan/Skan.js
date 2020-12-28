import React, { useState } from 'react';
import skan from "../../images/skan.png"



const Skan = () => {


    return (
        <div className="skan">
            <div className="container">
                <div className="skan__block">
                    <div className="skan__block-title">Сканирование кодов маркировки</div>
                    <div className="skan__block-subtitle">
                        Ацц 600МГ порошок д/приг.Р-ра/приемка внутрь пак. X6 (R)
            </div>

                    <div className="skan__block-wp">
                        <div className="skan__block-img">
                            <img src={skan} alt="skan" ></img>
                        </div>
                        <div className="skan__block-num">
                            <div className="skan__block-number">7</div>
                            <div className="skan__block-text">Отсканирование кодов</div>
                        </div>
                    </div>

                    <div className="table__block-wrapper">
                        <table className="table__block-table">
                            <thead>
                                <tr className="table__block-title">
                                    <th>№</th>
                                    <th colSpan="2">Коды маркировки</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="table__block-table-text">
                                    <td>1</td>
                                    <td>Агрегат</td>
                                    <td>39312345600000000053</td>
                                </tr>

                                <tr className="table__block-table-text">
                                    <td>1</td>
                                    <td>Агрегат</td>
                                    <td>39312345600000000053</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <a href="#" className="skan__block-link"
                    >Сбросить результат и начать заново</a
                    >
                    <div className="skan__button">
                        <a href="#" className="btn skan__button-btn">Продолжить</a>
                        <a href="#" className="btn skan__button-cancel">Отмена</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Skan;

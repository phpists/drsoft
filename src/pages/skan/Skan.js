import React, { useState, useEffect } from 'react';
import skan from "../../images/skan.png"
import SkanTable from './SkanTable';
import { getSkans } from '../../helpers/skans';
import Spinner from "../../components/Loader/Loader";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';



const Skan = () => {
    const [skans, setSkans] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        getSkans()
            .then((data) => setSkans(data))
            .catch(() => setError(true));
    }, [getSkans]);


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
                            <div className="skan__block-number">
                                {skans === null ? 0 : skans.length}
                            </div>
                            <div className="skan__block-text">Отсканированих кодов</div>
                        </div>
                    </div>

                    <div className="table__block-wrapper">
                        {error ?
                            <ErrorMessage />
                            :
                            skans === null
                                ?
                                <Spinner />
                                :
                                <SkanTable
                                    skans={skans}
                                />
                        }
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
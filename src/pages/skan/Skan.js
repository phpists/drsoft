import React,  {useEffect } from 'react';
import skan from "../../images/skan.png"
import SkanTable from './SkanTable';
import Loader from "../../components/Loader/Loader";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSkansRequest } from "../../store/skans/actions";


const Skan = (props) => {
    const { loader, skans, error } = props;

    useEffect(() => {
        props.getSkans();
    }, [props.getSkans]);


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
                                {skans === null || skans === undefined ? 0 : skans.length}
                            </div>
                            <div className="skan__block-text">Отсканированих кодов</div>
                        </div>
                    </div>

                    <div className="table__block-wrapper">

                        {loader || skans === null ?
                            <Loader />
                            :
                            error ?
                                <ErrorMessage />
                                :
                                <>
                                    <SkanTable
                                        skans={skans}
                                    />

                                    <a href="#" className="skan__block-link"
                                    >Сбросить результат и начать заново</a
                                    >
                                    <div className="skan__button">
                                        <a href="#" className="btn skan__button-btn">Продолжить</a>
                                        <a href="#" className="btn skan__button-cancel">Отмена</a>
                                    </div>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};



const mapStateToProps = (state) => ({
    skans: state.skans.skans,
    loader: state.skans.loader,
    error: state.skans.error
});

const mapDispatchToProps = dispatch => ({
    getSkans: () => dispatch(getSkansRequest())
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Skan)
);

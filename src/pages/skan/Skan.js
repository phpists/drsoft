import React, { useEffect } from 'react';
import skan from "../../images/skan.png"
import SkanTable from './SkanTable';
import Loader from "../../components/Loader/Loader";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSkansRequest } from "../../store/skans/actions";
import { deleteSkans } from "../../helpers/skans";
import { showButtonsModal } from "../../store/nakladni/actions";
import AccentButtonsSuccessModal from '../../components/Modals/AccentButtonsSuccessModal';



const Skan = (props) => {
    const { loader, skans, error, idForSkans, titleForSkans, history, buttonsModal } = props;


    useEffect(() => {
        props.getSkans({ idForSkans });
    }, [props.getSkans, idForSkans]);

    const onDeleteSkansClick = () => {
        deleteSkans(idForSkans);
        props.showButtonsModal();
        // window.location.reload();
    };


    let skansQuantity;
    { !skans ? skansQuantity = 0 : skansQuantity = skans.length };

    let newSkansQuantity;
    { !skans ? newSkansQuantity = 0 : newSkansQuantity = skans.filter(item => item.status === "Новый").length };

    let testedSkansQuantity;
    { !skans ? testedSkansQuantity = 0 : testedSkansQuantity = skans.filter(item => item.status === "Проверен").length };

    let notTestedSkansQuantity;
    { !skans ? notTestedSkansQuantity = 0 : notTestedSkansQuantity = skans.filter(item => item.status === "Не проверен").length };


    return (
        buttonsModal
            ?
            <AccentButtonsSuccessModal />
            :
            <div className="skan">
                <div className="container">
                    <div className="skan__block">
                        <div className="skan__block-title">Сканирование кодов маркировки</div>
                        <div className="skan__block-subtitle">
                            {titleForSkans}
                        </div>

                        <div className="skan__block-wp">
                            <div className="skan__block-img">
                                <img src={skan} alt="skan" ></img>
                            </div>


                            <div className="skan__block-num">
                                <div className="skan__block-number">
                                    {skansQuantity}
                                </div>
                                <div className="skan__block-text">Отсканированих кодов</div>
                            </div>


                            <div className="skan__block-num">
                                <div className="skan__block-number">
                                    {newSkansQuantity}
                                </div>
                                <div className="skan__block-text">Новых</div>
                            </div>

                            <div className="skan__block-num">
                                <div className="skan__block-number">
                                    {testedSkansQuantity}
                                </div>
                                <div className="skan__block-text">Провереныx</div>
                            </div>

                            <div className="skan__block-num">
                                <div className="skan__block-number">
                                    {notTestedSkansQuantity}
                                </div>
                                <div className="skan__block-text">Не провереныx</div>
                            </div>
                        </div>

                        <div className="table__block-wrapper">

                            {loader || !skans ?
                                <Loader />
                                :
                                error ?
                                    <ErrorMessage />
                                    :
                                    <SkanTable skans={skans} />
                            }

                        </div>

                        <a onClick={() => onDeleteSkansClick()}
                            className="skan__block-link"
                        >Сбросить результат и начать заново</a>

                        <div className="skan__button">
                            <button
                                onClick={() => history.push("/accent")}
                                className="btn skan__button-btn">Продолжить</button>
                            {/*                         
                        <button
                            className="btn skan__button-cancel">Отмена</button> */}
                        </div>
                    </div>
                </div>
            </div>
    );
};



const mapStateToProps = (state) => ({
    skans: state.skans.skans,
    idForSkans: state.skans.idForSkans,
    titleForSkans: state.skans.titleForSkans,
    loader: state.skans.loader,
    error: state.skans.error,
    buttonsModal: state.nakladni.buttonsModal,

});

const mapDispatchToProps = dispatch => ({
    getSkans: (id) => dispatch(getSkansRequest(id)),
    showButtonsModal: () => dispatch(showButtonsModal()),
});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Skan)
);

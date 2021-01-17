import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { getEditNaklData, closeModal, addOneNakl } from "../../store/nakladni/actions";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getCompanies } from '../../helpers/common';



const EditModal = (props) => {
    const { editNaklData, loader, error } = props;

    const [companies, setCompanies] = useState(null)
    const [activeSelect, setActiveSelect] = useState(false);


    useEffect(() => {
        getCompanies()
            .then(res => setCompanies(res.data));
        props.getNaklData();
    }, [props.getNaklData]);


    const onAddNakl = (event) => {
        event.preventDefault();
        props.addNakl();
        props.closeEditModal();
        props.history.push("/accent");
    };

    function onSelectClick() {
        setActiveSelect(activeSelect => !activeSelect)
    };

    // const companies = [
    //     {
    //         "company_id": 1,
    //         "name": "ОАО Мартышкин Труд",
    //         "inn": "23322"
    //     },
    //     {
    //         "company_id": 2,
    //         "name": "Тяпс Ляпс Энд Корпорейдет",
    //         "inn": "99ss33"
    //     },
    //     {
    //         "company_id": 3,
    //         "name": "РОГА И КОПЫТА",
    //         "inn": "99s977"
    //     }
    // ]

    //console.log(companies)

    return (
        <div className="edit">
            <div className="container">
                <div className="edit__block">

                    {
                        loader || editNaklData === null
                            ?
                            <Loader />
                            :
                            error ?
                                <ErrorMessage />
                                :
                                <>
                                    <div className="edit__block-title">Поставщик</div>
                                    <form
                                        onSubmit={(event) => { onAddNakl(event) }}
                                        className="edit__block-form">


                                        {/* <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Поставщик</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                // defaultValue={editNaklData.provider_id}
                                                />
                                            </div>
                                        </div> */}



                                        {companies === null
                                            ?
                                            <Loader />
                                            :

                                            <div className="edit__block-form-item">
                                                <div className="edit__block-form-left">Поставщик</div>
                                                <div className="edit__block-form-right">

                                                    <div className="list-select">
                                                        <div className={activeSelect ? "select active" : "select"}
                                                            onClick={() => onSelectClick()}>
                                                            <div className="list-select-selector">
                                                                <span className="select__current">-</span>
                                                            </div>
                                                            <div className="select__body-bg"></div>

                                                            <div className="select__body">
                                                                {companies.map((companie) => (
                                                                    <div
                                                                        key={companie.id}
                                                                        //onClick={() => changeStatus(companies)}
                                                                        className="list-select-option">{companie.name}</div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        }


                                        {/* <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Адрес поставщика</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.operation_date}
                                                />
                                            </div>
                                        </div> */}

                                        {/* <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата получения товара</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.operation_date}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата накладной</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.doc_date}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Номер накладной</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.doc_num}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Вид операции отгрузки</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.receive_type_id}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Источник финансирования</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.source_type_id}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Тип контракта</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.contract_type_id}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Номер контракта<br></br> *необязательное поле</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    defaultValue={editNaklData.contract_num}
                                                />
                                            </div>
                                        </div>
 */}

                                        <div className="skan__button">
                                            <button className="btn skan__button-btn">Отправить</button>
                                            <button
                                                onClick={() => { props.closeEditModal() }}
                                                className="btn skan__button-cancel">Отмена</button>
                                        </div>

                                    </form>
                                </>
                    }
                </div>
            </div>
        </div>
    );
};



const mapStateToProps = (state) => ({
    editNaklData: state.nakladni.editNaklData,
    loader: state.nakladni.loader,
    error: state.nakladni.error
});

const mapDispatchToProps = dispatch => ({
    getNaklData: () => dispatch(getEditNaklData()),
    closeEditModal: () => dispatch(closeModal()),
    addNakl: () => dispatch(addOneNakl())
});



export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditModal)
);



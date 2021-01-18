import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { getEditNaklData, closeModal, addOneNakl } from "../../store/nakladni/actions";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getProviders, getSourceTypes, getTurnoverTypes, getContractTypes } from '../../helpers/common';



const EditModal = (props) => {
    const { editNaklData, loader, error } = props;

    const [providers, setProviders] = useState(null);
    const [sourceTypes, setSourceTypes] = useState(null);
    const [turnoverTypes, setTurnoverTypes] = useState(null);
    const [contractTypes, setContractTypes] = useState(null);

    const [activeSelect, setActiveSelect] = useState(false);
    const [provider, setProvider] = useState("-");
    const [sourceType, setSourceType] = useState("-");
    const [turnoverType, setTurnoverType] = useState("-");
    const [contractType, setContractType] = useState("-");

    const [type, setType] = useState(null);


    useEffect(() => {
        getProviders()
            .then(res => setProviders(res.data));

        getSourceTypes()
            .then(res => setSourceTypes(res.data));

        getTurnoverTypes()
            .then(res => setTurnoverTypes(res.data));

        getContractTypes()
            .then(res => setContractTypes(res.data));

        props.getNaklData();
    }, [props.getNaklData]);


    const onAddNakl = (event) => {
        event.preventDefault();
        props.addNakl();
        props.closeEditModal();
        props.history.push("/accent");
    };

    const onSelectClick = (item) => {
        setActiveSelect(activeSelect => !activeSelect);
        item === "provider" && setType("provider")
        item === "sourceType" && setType("sourceType")
        item === "turnoverType" && setType("turnoverType")
        item === "contractType" && setType("contractType")
    };

    const changeProvider = (provider) => {
        setProvider(provider);
    };

    const changeSourceType = (sourceType) => {
        setSourceType(sourceType);
    };

    const changeTurnoverType = (turnoverType) => {
        setTurnoverType(turnoverType);
    };

    const changeContractType = (contractType) => {
        setContractType(contractType);
    };



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

                                        {providers === null
                                            ?
                                            <Loader />
                                            :
                                            <div className="edit__block-form-item">
                                                <div className="edit__block-form-left">Поставщик</div>
                                                <div
                                                    onClick={() => onSelectClick("provider")}
                                                    className={activeSelect && type === "provider" ? "select edit__block-form-right active" : "select edit__block-form-right"}>
                                                    <div className="edit__block-selector edit__block-form-right">
                                                        <span className="select__current">{provider}</span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {providers.map((provider) => (
                                                                <div
                                                                    onClick={() => changeProvider(provider.name)}
                                                                    key={provider.company_id}
                                                                    className="edit__block-option">{provider.name}</div>
                                                            ))}
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
                                                    placeholder={editNaklData.operation_date}
                                                />
                                            </div>
                                        </div> */}

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата получения товара</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder={editNaklData.operation_date || "-"}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата накладной</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder={editNaklData.doc_date}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Номер накладной</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder={editNaklData.doc_num}
                                                />
                                            </div>
                                        </div>

                                        {turnoverTypes === null
                                            ?
                                            <Loader />
                                            :
                                            <div className="edit__block-form-item">
                                                <div className="edit__block-form-left">Вид операции отгрузки</div>
                                                <div
                                                    onClick={() => onSelectClick("turnoverType")}
                                                    className={activeSelect && type === "turnoverType" ? "select edit__block-form-right active" : "select edit__block-form-right"}>
                                                    <div
                                                        className="edit__block-selector edit__block-form-right">
                                                        <span className="select__current">{turnoverType}</span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {turnoverTypes.map((turnoverType) => (
                                                                <div
                                                                    onClick={() => changeTurnoverType(turnoverType.value)}
                                                                    key={turnoverType.turnover_type_id}
                                                                    className="edit__block-option">{turnoverType.value}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {sourceTypes === null
                                            ?
                                            <Loader />
                                            :
                                            <div className="edit__block-form-item">
                                                <div className="edit__block-form-left">Источник финансирования</div>
                                                <div
                                                    onClick={() => onSelectClick("sourceType")}
                                                    className={activeSelect && type === "sourceType" ? "select edit__block-form-right active" : "select edit__block-form-right"}>
                                                    <div className="edit__block-selector edit__block-form-right">
                                                        <span className="select__current">{sourceType}</span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {sourceTypes.map((sourceType) => (
                                                                <div
                                                                    onClick={() => changeSourceType(sourceType.value)}
                                                                    key={sourceType.source_type_id}
                                                                    className="edit__block-option">{sourceType.value}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {contractTypes === null
                                            ?
                                            <Loader />
                                            :
                                            <div className="edit__block-form-item">
                                                <div className="edit__block-form-left">Тип контракта</div>
                                                <div
                                                    onClick={() => onSelectClick("contractType")}
                                                    className={activeSelect && type === "contractType" ? "select edit__block-form-right active" : "select edit__block-form-right"}>
                                                    <div
                                                        className="edit__block-selector edit__block-form-right">
                                                        <span className="select__current">{contractType}</span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {contractTypes.map((contractType) => (
                                                                <div
                                                                    onClick={() => changeContractType(contractType.value)}
                                                                    key={contractType.contract_type_id}
                                                                    className="edit__block-option">{contractType.value}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Номер контракта<br></br> *необязательное поле</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    placeholder={editNaklData.contract_num}
                                                />
                                            </div>
                                        </div>


                                        {/*  <div className="skan__button">
                                            <button className="btn skan__button-btn">Отправить</button>
                                            <button
                                                onClick={() => { props.closeEditModal() }}
                                                className="btn skan__button-cancel">Отмена</button>
                                        </div> */}


                                        {/* 

                                        

                                       

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Вид операции отгрузки</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder={editNaklData.receive_type_id}
                                                />
                                            </div>
                                        </div> */}

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



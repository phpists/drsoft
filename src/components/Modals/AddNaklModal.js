import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { closeModal, addOneNakl } from "../../store/nakladni/actions";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getProviders, getSourceTypes, getTurnoverTypes, getContractTypes } from '../../helpers/common';



const AddNaklModal = (props) => {
    const { loader, error, naklId } = props;

    const [providers, setProviders] = useState(null);
    const [sourceTypes, setSourceTypes] = useState(null);
    const [turnoverTypes, setTurnoverTypes] = useState(null);
    const [contractTypes, setContractTypes] = useState(null);

    const [activeSelect, setActiveSelect] = useState(false);
    const [type, setType] = useState(null);
    const [provider, setProvider] = useState("-");

    const [providerId, setProviderId] = useState(1);
    const [operationDate, setOperation_date] = useState(null);
    const [docDate, setDoc_date] = useState(null);
    const [docNum, setDoc_num] = useState(null);
    const [sourceType, setSourceType] = useState(null);
    const [sourceTypeId, setSourceTypeId] = useState(1);
    const [turnoverType, setTurnoverType] = useState(null);
    const [turnoverTypeId, setTurnoverTypeId] = useState(1);
    const [contractType, setContractType] = useState(null);
    const [contractTypeId, setContractTypeId] = useState(1);
    const [contractNum, setContract_num] = useState(null);


    useEffect(() => {
        getProviders()
            .then(res => setProviders(res.data));
        getSourceTypes()
            .then(res => setSourceTypes(res.data));
        getTurnoverTypes()
            .then(res => setTurnoverTypes(res.data));
        getContractTypes()
            .then(res => setContractTypes(res.data));
    }, [naklId]);


    const onAddNakl = (event) => {
        event.preventDefault();
        //console.log("provider_id:", providerId);
        const provider_id = providerId
        //console.log("operation_date:", operation_date);
        const operation_date = operationDate;
        //console.log("doc_date:", doc_date );
        const doc_date = docDate;
        //console.log("doc_num:", doc_num );
        const doc_num = docNum;
        //console.log("receive_type_id:", turnoverTypeId );
        const receive_type_id = turnoverTypeId;
        //console.log("source_type_id:", sourceTypeId );
        const source_type_id = sourceTypeId;
        //console.log("contract_type_id:", contractTypeId );
        const contract_type_id = contractTypeId;
        //console.log("contract_num:", contract_num);
        const contract_num = contractNum;
        //console.log("contract_num:", contract_num );
        const data = { provider_id, operation_date, doc_date, doc_num, receive_type_id, source_type_id, contract_type_id, contract_num };
        props.addNakl(data);
        props.closeAddNaklModal();
        props.history.push("/accent");
    };

    const onSelectClick = (item) => {
        setActiveSelect(activeSelect => !activeSelect);
        item === "provider" && setType("provider")
        item === "sourceType" && setType("sourceType")
        item === "turnoverType" && setType("turnoverType")
        item === "contractType" && setType("contractType")
    };

    const changeProvider = (provider, id) => {
        setProvider(provider);
        setProviderId(id);
    };

    const changeSourceType = (sourceType, id) => {
        setSourceType(sourceType);
        setSourceTypeId(id);
    };

    const changeTurnoverType = (turnoverType, id) => {
        setTurnoverType(turnoverType);
        setTurnoverTypeId(id);
    };

    const changeContractType = (contractType, id) => {
        setContractType(contractType);
        setContractTypeId(id);
    };


    return (
        <div className="edit">
            <div className="container">
                <div className="edit__block">
                    {
                        loader
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

                                        {!providers
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
                                                                    onClick={() => changeProvider(provider.name, provider.company_id)}
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
                                                <input type="text"
                                                    onChange={event => setOperation_date(event.target.value)} />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата накладной</div>
                                            <div className="edit__block-form-right">
                                                <input type="text"
                                                    onChange={event => setDoc_date(event.target.value)} />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Номер накладной</div>
                                            <div className="edit__block-form-right">
                                                <input type="text"
                                                    onChange={event => setDoc_num(event.target.value)} />
                                            </div>
                                        </div>

                                        {!turnoverTypes
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
                                                        <span className="select__current">
                                                            {turnoverType ? turnoverType : turnoverTypes[0].value}
                                                        </span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {turnoverTypes.map((turnoverType) => (
                                                                <div
                                                                    onClick={() => changeTurnoverType(turnoverType.value, turnoverType.turnover_type_id)}
                                                                    key={turnoverType.turnover_type_id}
                                                                    className="edit__block-option">{turnoverType.value}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {!sourceTypes
                                            ?
                                            <Loader />
                                            :
                                            <div className="edit__block-form-item">
                                                <div className="edit__block-form-left">Источник финансирования</div>
                                                <div
                                                    onClick={() => onSelectClick("sourceType")}
                                                    className={activeSelect && type === "sourceType" ? "select edit__block-form-right active" : "select edit__block-form-right"}>
                                                    <div className="edit__block-selector edit__block-form-right">
                                                        <span className="select__current">
                                                            {sourceType ? sourceType : sourceTypes[0].value}
                                                        </span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {sourceTypes.map((sourceType) => (
                                                                <div
                                                                    onClick={() => changeSourceType(sourceType.value, sourceType.source_type_id)}
                                                                    key={sourceType.source_type_id}
                                                                    className="edit__block-option">{sourceType.value}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {!contractTypes
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
                                                        <span className="select__current">
                                                            {contractType ? contractType : contractTypes[0].value}
                                                        </span>
                                                        <div className="select__body-bg"></div>
                                                        <div className="select__body">
                                                            {contractTypes.map((contractType) => (
                                                                <div
                                                                    onClick={() => changeContractType(contractType.value, contractType.contract_type_id)}
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
                                                <input type="text"
                                                    onChange={event => setContract_num(event.target.value)} />
                                            </div>
                                        </div>

                                        <div className="skan__button">
                                            <button type="submit"
                                                className="btn skan__button-btn">Отправить</button>
                                            <button
                                                onClick={() => { props.closeAddNaklModal() }}
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
    naklId: state.nakladni.naklId,
    loader: state.nakladni.loader,
    error: state.nakladni.error
});

const mapDispatchToProps = dispatch => ({
    closeAddNaklModal: () => dispatch(closeModal()),
    addNakl: (data) => dispatch(addOneNakl(data))
});



export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddNaklModal)
);



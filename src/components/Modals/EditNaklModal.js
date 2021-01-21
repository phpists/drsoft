import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { getEditNaklData, closeEditNaklModal, updateNaklData } from "../../store/nakladni/actions";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getProviders, getSourceTypes, getTurnoverTypes, getContractTypes } from '../../helpers/common';



const EditNaklModal = (props) => {
    const { editNaklData, loader, error, naklId, acceptanceType } = props;

    const [providers, setProviders] = useState(null);
    const [sourceTypes, setSourceTypes] = useState(null);
    const [turnoverTypes, setTurnoverTypes] = useState(null);
    const [contractTypes, setContractTypes] = useState(null);

    const [activeSelect, setActiveSelect] = useState(false);
    const [type, setType] = useState(null);
    const [provider, setProvider] = useState("-");

    const [providerId, setProviderId] = useState(null);
    const [operationDate, setOperation_date] = useState(null);
    const [docDate, setDoc_date] = useState(null);
    const [docNum, setDoc_num] = useState(null);
    const [sourceType, setSourceType] = useState(null);
    const [sourceTypeId, setSourceTypeId] = useState(null);
    const [turnoverType, setTurnoverType] = useState(null);
    const [turnoverTypeId, setTurnoverTypeId] = useState(null);
    const [contractType, setContractType] = useState(null);
    const [contractTypeId, setContractTypeId] = useState(null);
    const [contractNum, setContract_num] = useState(null);

    useEffect(() => {
        props.getNaklData({ naklId });
        getProviders()
            .then(res => setProviders(res.data));
        getSourceTypes()
            .then(res => setSourceTypes(res.data));
        getTurnoverTypes()
            .then(res => setTurnoverTypes(res.data));
        getContractTypes()
            .then(res => setContractTypes(res.data));
    }, [props.getNaklData, naklId]);


    const onUpdateNakl = (event) => {
        event.preventDefault();
        // console.log("nakl_id:", editNaklData.nakl_id);
        const nakl_id = editNaklData.nakl_id;
        //console.log("provider_id:", providerId);
        const provider_id = providerId || editNaklData.provider_id;
        //console.log("operation_date:", operation_date || editNaklData.operation_date);
        const operation_date = operationDate || editNaklData.operation_date;
        //console.log("doc_date:", doc_date || editNaklData.doc_date);
        const doc_date = docDate || editNaklData.doc_date;
        //console.log("doc_num:", doc_num || editNaklData.doc_num);
        const doc_num = docNum || editNaklData.doc_num;
        //console.log("receive_type_id:", turnoverTypeId || editNaklData.receive_type_id);
        const receive_type_id = turnoverTypeId || editNaklData.receive_type_id;
        //console.log("source_type_id:", sourceTypeId || editNaklData.source_type_id);
        const source_type_id = sourceTypeId || editNaklData.source_type_id;
        //console.log("contract_type_id:", contractTypeId || editNaklData.contract_type_id);
        const contract_type_id = contractTypeId || editNaklData.contract_type_id;
        //console.log("contract_num:", contract_num || editNaklData.contract_num);
        const contract_num = contractNum || editNaklData.contract_num;
        //console.log("contract_num:", contract_num || editNaklData.contract_num);

        const data = { nakl_id, provider_id, operation_date, doc_date, doc_num, receive_type_id, source_type_id, contract_type_id, contract_num };

        props.updateNakl(data);
        props.closeEditNaklModal();
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


    // editNaklData && console.log("editNaklData.provider_id", editNaklData.provider_id)
    //providers && console.log(providers.map(company => company.company_id))

    // let defProv;
    // {
    //     editNaklData && providers ?
    //         defProv = providers.filter((company) => ( 
    //             company.company_id === editNaklData.provider_id))
    //     :
    //     defProv = "хз"
    //     console.log("defProv", ...defProv)
    // }


    return (
        <div className="edit">
            <div className="container">
                <div className="edit__block">
                    {
                        loader || !editNaklData
                            ?
                            <Loader />
                            :
                            error ?
                                <ErrorMessage />
                                :
                                <>
                                    <div className="edit__block-title">Поставщик</div>
                                    <form
                                        onSubmit={(event) => { onUpdateNakl(event) }}
                                        className="edit__block-form">

                                        {acceptanceType === "Прямой"
                                            ?
                                            <>
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
                                                            onChange={event => setOperation_date(event.target.value)}
                                                            defaultValue={editNaklData.operation_date} />
                                                    </div>
                                                </div>

                                                <div className="edit__block-form-item">
                                                    <div className="edit__block-form-left">Дата накладной</div>
                                                    <div className="edit__block-form-right">
                                                        <input type="text"
                                                            onChange={event => setDoc_date(event.target.value)}
                                                            defaultValue={editNaklData.doc_date} />
                                                    </div>
                                                </div>

                                                <div className="edit__block-form-item">
                                                    <div className="edit__block-form-left">Номер накладной</div>
                                                    <div className="edit__block-form-right">
                                                        <input type="text"
                                                            onChange={event => setDoc_num(event.target.value)}
                                                            defaultValue={editNaklData.doc_num} />
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
                                                            onChange={event => setContract_num(event.target.value)}
                                                            defaultValue={editNaklData.contract_num} />
                                                    </div>
                                                </div>
                                            </>

                                            :

                                            <>
                                                <span>*Редактируеме поле - Дата получения товара</span>
                                                <div className="edit__block-form-item">
                                                    <div className="edit__block-form-left">Дата получения товара</div>
                                                    <div className="edit__block-form-right">
                                                        <input type="text"
                                                            onChange={event => setOperation_date(event.target.value)}
                                                            defaultValue={editNaklData.operation_date} />
                                                    </div>
                                                </div>

                                                <div className="edit__block-form-item">
                                                    <div className="edit__block-form-left">Дата накладной</div>
                                                    <div className="edit__block-form-right">
                                                        <input type="text"
                                                            onChange={event => setDoc_date(event.target.value)}
                                                            value={editNaklData.doc_date} />
                                                    </div>
                                                </div>

                                                <div className="edit__block-form-item">
                                                    <div className="edit__block-form-left">Номер накладной</div>
                                                    <div className="edit__block-form-right">
                                                        <input type="text"
                                                            onChange={event => setDoc_num(event.target.value)}
                                                            value={editNaklData.doc_num} />
                                                    </div>
                                                </div>

                                                {!turnoverTypes
                                                    ?
                                                    <Loader />
                                                    :
                                                    <div className="edit__block-form-item">
                                                        <div className="edit__block-form-left">Вид операции отгрузки</div>
                                                        <div
                                                            //onClick={() => onSelectClick("turnoverType")}
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
                                                            //onClick={() => onSelectClick("sourceType")}
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
                                                            //onClick={() => onSelectClick("contractType")}
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
                                                            onChange={event => setContract_num(event.target.value)}
                                                            value={editNaklData.contract_num} />
                                                    </div>
                                                </div>
                                            </>
                                        }

                                        <div className="skan__button">
                                            <button
                                                type="submit"
                                                className="btn skan__button-btn">Отправить</button>
                                            <button
                                                onClick={() => { props.closeEditNaklModal() }}
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
    acceptanceType: state.nakladni.acceptanceType,
    editNaklData: state.nakladni.editNaklData,
    loader: state.nakladni.loader,
    error: state.nakladni.error
});

const mapDispatchToProps = dispatch => ({
    getNaklData: (id) => dispatch(getEditNaklData(id)),
    closeEditNaklModal: () => dispatch(closeEditNaklModal()),
    updateNakl: (data) => dispatch(updateNaklData(data))
});



export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditNaklModal)
);



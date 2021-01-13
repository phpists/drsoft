import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { getEditNaklData, closeModal, addOneNakl } from "../../store/nakladni/actions";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';



const EditModal = (props) => {
    const { editNaklData, loader, error } = props;

    useEffect(() => {
        props.getNaklData()
    }, []);


    const onAddNakl = (event) => {
        event.preventDefault();
        props.addNakl();
        props.closeEditModal();
        props.history.push("/accent");
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

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Поставщик</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    placeholder={editNaklData.provider_id}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата получения товара</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    placeholder={editNaklData.operation_date}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Дата накладной</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    placeholder={editNaklData.doc_date}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Номер накладной</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    placeholder={editNaklData.doc_num}
                                                />
                                            </div>
                                        </div>

                                        <div className="edit__block-form-item">
                                            <div className="edit__block-form-left">Источник финансирования</div>
                                            <div className="edit__block-form-right">
                                                <input
                                                    type="text"
                                                    placeholder={editNaklData.source_type_id}
                                                />
                                            </div>
                                        </div>


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



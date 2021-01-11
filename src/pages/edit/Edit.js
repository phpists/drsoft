import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editNakl, addNakl } from "../../helpers/nakladni";
import Loader from "../../components/Loader/Loader"




const Edit = (props) => {
    const [nakl, setNakl] = useState(null);

    useEffect(() => {
        editNakl()
            .then((data) => setNakl(data.data))
    }, []);


    const onAddNakl = (event) => {
        event.preventDefault();
        addNakl()
            .then((data) => console.log(data));
        props.history.push("/accent");
    };


    return (
        <div className="edit">
            <div className="container">
                <div className="edit__block">

                    {
                        nakl === null
                            ?
                            <Loader />
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
                                                placeholder={nakl.provider_id}
                                            />
                                        </div>
                                    </div>

                                    <div className="edit__block-form-item">
                                        <div className="edit__block-form-left">Дата получения товара</div>
                                        <div className="edit__block-form-right">
                                            <input
                                                type="text"
                                                placeholder={nakl.operation_date}
                                            />
                                        </div>
                                    </div>

                                    <div className="edit__block-form-item">
                                        <div className="edit__block-form-left">Дата накладной</div>
                                        <div className="edit__block-form-right">
                                            <input
                                                type="text"
                                                placeholder={nakl.doc_date}
                                            />
                                        </div>
                                    </div>

                                    <div className="edit__block-form-item">
                                        <div className="edit__block-form-left">Номер накладной</div>
                                        <div className="edit__block-form-right">
                                            <input
                                                type="text"
                                                placeholder={nakl.doc_num}
                                            />
                                        </div>
                                    </div>

                                    <div className="edit__block-form-item">
                                        <div className="edit__block-form-left">Источник финансирования</div>
                                        <div className="edit__block-form-right">
                                            <input
                                                type="text"
                                                placeholder={nakl.source_type_id}
                                            />
                                        </div>
                                    </div>


                                    <div className="skan__button">
                                        <button className="btn skan__button-btn">Отправить</button>
                                        {/* <button className="btn skan__button-cancel">Отмена</button> */}
                                    </div>

                                </form>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};


// const mapStateToProps = (state) => ({
//     //nakladni: state.nakladni.nakladni,
//     loader: state.nakladni.loader,
//     error: state.nakladni.error
//   });

// const mapDispatchToProps = dispatch => ({
//     getNakladni: (data) => dispatch(getNakladniRequest(data))
//   });


//   export default withRouter(
//     connect(mapStateToProps, mapDispatchToProps)(OverHead)
//   );


export default Edit;

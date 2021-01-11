import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNakl } from "../../helpers/nakladni";




const Edit = () => {
    const [nakl, setNakl] = useState(null);

    useEffect(() => {

        addNakl()
            .then((data) => setNakl(data.data))
        //.then((data) => console.log(data.data.provider_id))
    }, [])

    const numbers = { nakl_id: 1, provider_id: 1 };

    console.log(nakl)


    return (
        <div className="edit">
            <div className="container">
                <div className="edit__block">

                    {
                        nakl === null
                            ?
                            < h3 >Загрузка...</h3>
                            :
                            <>
                                < h3 >data</h3>
                                {/* <ul>
                                    {nakl.map((item) => <li>{item}</li>)}
                                </ul> */}
                                <div>{nakl.provider_id}, {nakl.nakl_id}</div>
                            </>
                    }

                    <div className="edit__block-title">Поставщик</div>
                    {/* <div className="edit__block-subtitle">Для записи к гинекологу</div> */}
                    <form className="edit__block-form">
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">ФИО</div>
                            <div className="edit__block-form-right">
                                <input
                                    type="text"
                                    placeholder="Анатолий Анатольевич Анатольев"
                                />
                            </div>
                        </div>
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">Телефон</div>
                            <div className="edit__block-form-right">
                                <input type="tel" />
                            </div>
                        </div>
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">Дата рождения</div>
                            <div className="select edit__block-form-right">
                                <div className="edit__block-selector edit__block-form-right">
                                    <span className="select__current">2020</span>
                                </div>
                                <div className="select__body-bg"></div>
                                <div className="select__body">
                                    <div className="edit__block-option">2020</div>
                                    <div className="edit__block-option">2019</div>
                                    <div className="edit__block-option">2018</div>
                                    <div className="edit__block-option">2017</div>
                                    <div className="edit__block-option">2016</div>
                                    <div className="edit__block-option">2015</div>
                                </div>
                            </div>
                        </div>
                        <div className="edit__block-form-item">
                            <div className="edit__block-form-left">Примечание</div>
                            <div className="edit__block-form-right">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </form>

                    <div className="skan__button">
                        <a href="#" className="btn skan__button-btn">Отправить</a>
                        <a href="#" className="btn skan__button-cancel">Отмена</a>
                    </div>
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

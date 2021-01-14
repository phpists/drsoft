import React from 'react';
import Loader from "../../components/Loader/Loader";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { naklTrustAccept } from "../../helpers/nakladni";


const AccentButtons = (props) => {
    const { naklHeaderData } = props;

    const onTrustedAcceptanceButtonClick = () => {
       // console.log(naklHeaderData.nakl_id)
        naklTrustAccept(naklHeaderData.nakl_id)
    };


    const onSignAndSendButtonClick = () => {
    };


    const onBackButtonClick = () => {
        props.history.push("/overhead");
    };

    return (
        <div className="accent__block-button">
            <button
                onClick={() => onTrustedAcceptanceButtonClick()}
                className="btn">Доверительная приемка</button>

            <button
                onClick={() => onSignAndSendButtonClick()}
                className="btn">Подписать и отправить</button>

            <button
                onClick={() => onBackButtonClick()}
                className="btn">Вернуться к списку накладных</button>
            {/* <button className="btn">Завершить приемку</button> */}
        </div>
    );
};



const mapStateToProps = (state) => ({
    naklHeaderData: state.nakladni.naklHeaderData,
    loader: state.nakladni.loader,
    error: state.nakladni.error
});

const mapDispatchToProps = dispatch => ({

});


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AccentButtons)
);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { naklTrustAccept, naklSignAndSend } from "../../helpers/nakladni";



const AccentButtons = (props) => {
    const { naklHeaderData, history } = props;

    const onTrustedAcceptanceButtonClick = () => {
        naklTrustAccept(naklHeaderData.nakl_id)
    };

    const onSignAndSendButtonClick = () => {
        naklSignAndSend(naklHeaderData.nakl_id)
    };

    const onBackButtonClick = () => {
        history.push("/overhead");
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



export default withRouter(
    connect(mapStateToProps, null)(AccentButtons)
);

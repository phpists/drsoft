import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { naklTrustAccept, naklSignAndSend } from "../../helpers/nakladni";
import { showButtonsModal } from "../../store/nakladni/actions";



const AccentButtons = (props) => {
    const { naklHeaderData, history, setModal } = props;

    const onTrustedAcceptanceButtonClick = () => {
        props.showButtonsModal();
        naklTrustAccept(naklHeaderData.nakl_id);
    };

    const onSignAndSendButtonClick = () => {
        props.showButtonsModal();
        naklSignAndSend(naklHeaderData.nakl_id);
    };

    const onBackButtonClick = () => {
        history.push("/overhead");
    };


    return (
        <div className="accent__block-button">
            {/* <AccentButtonsSuccessModal /> */}
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
    naklHeaderData: state.nakladni.naklHeaderData
});

const mapDispatchToProps = dispatch => ({
    showButtonsModal: () => dispatch(showButtonsModal()),
});



export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AccentButtons)
);

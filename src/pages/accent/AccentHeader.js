import React from 'react';
import Loader from "../../components/Loader/Loader";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const AccentHeader = ({ header, openEditModal,naklStatus}) => {

    return (
        !header
            ?
            <Loader />
            :
            <>
                <div className="accent__block-title">{header.form_caption}</div>
                <div className="accent__block-subtitle">Cтатус накладной:
                    {naklStatus}
                </div>

                <div className="accent__block-post">
                    <div className="accent__block-post-left">
                        <a
                            onClick={() => openEditModal()}
                            className="accent__block-post-title cursor-pointer">Поставщик</a>
                        <div className="accent__block-post-subtitle">{header.provider_name}</div>

                        <div className="accent__block-post-inn">ИНН {header.provider_inn}</div>
                        <div className="accent__block-post-text">
                            {header.provider_address}
                        </div>
                    </div>

                    <div className="accent__block-post-right">
                        <a className="accent__block-post-title">Получатель</a>
                        <div className="accent__block-post-subtitle">{header.receiver_name}</div>

                        <div className="accent__block-post-inn">ИНН {header.receiver_inn}</div>
                        <div className="accent__block-post-text">
                            {header.receiver_address}
                        </div>
                    </div>

                </div>
            </>
    );
};


const mapStateToProps = (state) => ({
    naklStatus: state.nakladni.naklStatus
});


export default withRouter(
    connect(mapStateToProps, null)(AccentHeader)
);


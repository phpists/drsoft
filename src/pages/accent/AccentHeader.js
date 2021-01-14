import React from 'react';
import Loader from "../../components/Loader/Loader";



const AccentHeader = ({ header }) => {

    return (
        !header
            ?
            <Loader />
            :
            <>
                <div className="accent__block-title">{header.form_caption}</div>
                {/* <div className="accent__block-subtitle">Поясняющий текст</div> */}
                <div className="accent__block-subtitle">Cтатус накладной {header.nakl_status_id}</div>
                <div className="accent__block-subtitle">Тип акцепта {header.acceptance_type}</div>
                <div className="accent__block-post">
                    <div className="accent__block-post-left">
                        <a className="accent__block-post-title">Поставщик</a>
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


export default AccentHeader;

import React, { useState, useEffect } from 'react';
import Loader from "../../components/Loader/Loader"
import AccentTable from './AccentTable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNakladnaRequest, getNaklHeaderDataRequest } from "../../store/nakladni/actions";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import AccentHeader from './AccentHeader';



const Accent = (props) => {
  const { naklData, naklHeaderData, loader, error, naklId } = props;

  const [activeClass, setActiveClass] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);
  const [defaultDate, setDefaultDate] = useState("01.11.2020");


  useEffect(() => {
    props.getNakladna({ id: naklId });
    props.getHeader({ id: naklId });
  }, [props.getHeader, props.getNakladna]);


  let toggleClass;
  activeClass ? toggleClass = "accent__block-toggle" : toggleClass = "accent__block-toggle noactive";

  let toggleSelect;
  activeSelect ? toggleSelect = "select active" : toggleSelect = "select";



  return (
    <div className="accent">
      <div className="accent__block">

        {
          loader || naklHeaderData === null
            ?
            <Loader />
            :
            error ?
              <ErrorMessage />
              :
              <AccentHeader
                header={naklHeaderData}
              />
        }

        <div className="accent__block-post-line">
          <div className="accent__block-post-point1 point">
            <div className="accent__block-post-point1-text">
              Поставщик отгрузил товары
              </div>
          </div>
          <div className="accent__block-post-point2 point">
            <div className="accent__block-post-point2-text">Приемка товаров</div>
          </div>
          <div className="accent__block-post-point3 point">
            <div className="accent__block-post-point3-text">
              Подписка и отправка
              </div>
          </div>
          <div className="accent__block-post-point4 point">
            <div className="accent__block-post-point4-text">Готово</div>
          </div>
        </div>
        <div className="accent__block-select">
          <div className="list-select">
            <div className="list-select-text">Дата приемки</div>
            <div
              onClick={() => { setActiveSelect(activeSelect => !activeSelect) }}
              className={toggleSelect}>
              <div className="list-select-selector">
                <span className="select__current">{defaultDate}</span>
              </div>
              <div className="select__body-bg"></div>
              <div className="select__body">
                <div
                  onClick={() => { setDefaultDate("01.11.2020") }}
                  className="list-select-option">01.11.2020</div>

                <div
                  onClick={() => { setDefaultDate("02.11.2020") }}
                  className="list-select-option">02.11.2020</div>

                <div
                  onClick={() => { setDefaultDate("03.11.2020") }}
                  className="list-select-option">03.11.2020</div>
              </div>
            </div>

            {/* <select className="select">
              <div className="list-select-selector">
                <span className="">01.11.2020</span>
              </div>
              <div className="select__body-bg"></div>
              <div className="select__body">
                <option className="list-select-option select__current">01.11.2020</option>
                <option className="list-select-option">02.11.2020</option>
              </div>
            </select> */}
          </div>
          {/* <div className="list-select">
            <div
              onClick={() => { setActiveClass(activeClass => !activeClass) }}
              className={toggleClass}>
              <div className="accent__block-toggle-point"></div>
            </div>
            <div className="list-select-text">Отозванные товары</div>
          </div> */}
        </div>
        <div className="table__block-wrapper">

          {
            loader || naklData === null
              ?
              <Loader />
              :
              error ?
                <ErrorMessage />
                :
                <AccentTable
                  results={naklData} />
          }

        </div>
        <div className="accent__block-button">
          <button className="btn">Прервать приемку</button>
          <button className="btn">Доверительная приемка</button>
          <button className="btn">Отказ</button>
          <button className="btn">Завершить приемку</button>
        </div>
      </div >
    </div >
  );
};


const mapStateToProps = (state) => ({
  naklData: state.nakladni.naklData,

  naklId: state.nakladni.naklId,

  naklHeaderData: state.nakladni.naklHeaderData,
  loader: state.nakladni.loader,
  error: state.nakladni.error
});


const mapDispatchToProps = dispatch => ({
  getNakladna: (id) => dispatch(getNakladnaRequest(id)),
  getHeader: (id) => dispatch(getNaklHeaderDataRequest(id))
});



export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Accent)
);


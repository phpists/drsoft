import React, { useState, useEffect } from 'react';
import OverHeadTable from './OverHeadTable';
import Loader from "../../components/Loader/Loader";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNakladniRequest, showModal } from "../../store/nakladni/actions";
import AddNaklModal from '../../components/Modals/AddNaklModal';
import Navbar from '../../components/Navbar';



const OverHead = (props) => {
  const { nakladni, loader, error, addNaklModal } = props;

  const [activeSelect, setActiveSelect] = useState(false);
  const [type, setType] = useState(null);
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState({ number: 1, value: "Январь" });
  const [status, setStatus] = useState({ id: null, value: "-" });


  useEffect(() => {
    const data = { year, month: month.number, status: 1 };
    props.getNakladni(data);
  }, [props.getNakladni]);

  ////////////   Show/hide dropdown
  const onSelectClick = (item) => {
    setActiveSelect(activeSelect => !activeSelect)
    item === "year" && setType("year")
    item === "month" && setType("month")
    item === "status" && setType("status")
  };

  ////////////   Data for table filters
  const years =
    [
      2021,
      2020,
      2019,
      2018,
      2017,
      2016,
      2015
    ];

  const months =
    [
      { number: null, value: "-" },
      { number: 1, value: "Январь" },
      { number: 2, value: "Февраль" },
      { number: 3, value: "Март" },
      { number: 4, value: "Апрель" },
      { number: 5, value: "Май" },
      { number: 6, value: "Июнь" },
      { number: 7, value: "Июль" },
      { number: 8, value: "Август" },
      { number: 9, value: "Сентябрь" },
      { number: 10, value: "Октябрь" },
      { number: 11, value: "Ноябрь" },
      { number: 12, value: "Декабрь" },
    ];

  const statuses = [
    { id: null, value: "-" },
    { id: 1, value: "Новая поставка" },
    { id: 2, value: "Приемка товара" },
    { id: 3, value: "Отправка данных" },
    { id: 4, value: "Ошибка" },
    { id: 5, value: "Завершено" }
  ];


  const changeYear = (year) => {
    setYear(year);
    const data = { year, month: month.number, status: status.id };
    props.getNakladni(data);
  };

  const changeMonth = (month) => {
    setMonth(month);
    const data = { year, month: month.number, status: status.id };
    props.getNakladni(data);
  };

  const changeStatus = (status) => {
    setStatus(status);
    const data = { year, month: month.number, status: status.id };
    props.getNakladni(data);
  };

  const openAddNaklModal = () => {
    props.showAddNaklModal()
  };


  return (
    <div className="container">

      {addNaklModal
        ?
        <AddNaklModal />
        :
        <>
          <Navbar />

          <div className="overhead height">
            <div className="overhead__block">
              <div className="overhead__block-top">
                <div className="overhead__block-top-right">
                  <div className="overhead__block-top-title">
                    Накладные
                  <button
                      onClick={() => { openAddNaklModal() }}
                      className="buttonPlus">
                      <div className="buttonPlus-item"></div>
                      <div className="buttonPlus-item"></div>
                    </button>
                  </div>
                  <div className="overhead__block-top-subtitle">Поясняющий текст</div>
                </div>
              </div>
              <div className="overhead__block-bottom">
                <div className="overhead__block-select">

                  <div className="list-select">
                    <div className="list-select-text">Год</div>
                    <div
                      className={activeSelect && type === "year" ? "select active" : "select"}
                      onClick={() => onSelectClick("year")}>
                      <div className="list-select-selector">
                        <span className="select__current">{year}</span>
                      </div>
                      <div className="select__body-bg"></div>
                      <div className="select__body">
                        {years.map((year) => (
                          <div key={year}
                            onClick={() => changeYear(year)}
                            className="list-select-option">{year}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="list-select">
                    <div className="list-select-text">Месяц</div>
                    <div className={activeSelect && type === "month" ? "select active" : "select"}
                      onClick={() => onSelectClick("month")}>
                      <div className="list-select-selector">
                        <span className="select__current">{month.value}</span>
                      </div>
                      <div className="select__body-bg"></div>
                      <div className="select__body">
                        {months.map((month) => (
                          <div key={month.number}
                            onClick={() => changeMonth(month)}
                            className="list-select-option">{month.value}</div>
                        ))}
                      </div>
                    </div>
                  </div>


                  <div className="list-select">
                    <div className="list-select-text">Статус</div>
                    <div className={activeSelect && type === "status" ? "select active" : "select"}
                      onClick={() => onSelectClick("status")}>
                      <div className="list-select-selector">
                        <span className="select__current">{status.value}</span>
                      </div>
                      <div className="select__body-bg"></div>
                      <div className="select__body">
                        {statuses.map((status) => (
                          <div key={status.id}
                            onClick={() => changeStatus(status)}
                            className="list-select-option">{status.value}</div>
                        ))}
                      </div>
                    </div>
                  </div>


                </div>
                <div className="table__block-wrapper">

                  {
                    loader || !nakladni
                      ?
                      <Loader />
                      :
                      error ?
                        <ErrorMessage />
                        :
                        <OverHeadTable
                          props={props}
                          results={nakladni} />
                  }

                </div>
              </div>
            </div>
          </div >
        </>
      }
    </div >
  );
};


const mapStateToProps = (state) => ({
  nakladni: state.nakladni.nakladni,
  loader: state.nakladni.loader,
  error: state.nakladni.error,
  addNaklModal: state.nakladni.addNaklModal,
});


const mapDispatchToProps = dispatch => ({
  getNakladni: (data) => dispatch(getNakladniRequest(data)),
  showAddNaklModal: () => dispatch(showModal())
});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OverHead)
);


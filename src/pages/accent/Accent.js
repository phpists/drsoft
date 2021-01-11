import React, { useState, useEffect } from 'react';
import { getNaklData } from "../../helpers/nakladni";
import Loader from "../../components/Loader/Loader"
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage';



const Accent = () => {
  const [activeClass, setActiveClass] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);
  const [defaultDate, setDefaultDate] = useState("01.11.2020");
  const [naklData, setNaklData] = useState(null);


  useEffect(() => {
    getNaklData()
      .then((data) => setNaklData(data.data));
    //.then((data) => console.log(data.data))
  }, []);


  let toggleClass;
  activeClass ? toggleClass = "accent__block-toggle" : toggleClass = "accent__block-toggle noactive";

  let toggleSelect;
  activeSelect ? toggleSelect = "select active" : toggleSelect = "select";


  return (
    <div className="accent">
      <div className="accent__block">
        <div className="accent__block-title">Прямой акцепт №124 от 24.09.19</div>
        <div className="accent__block-subtitle">Поясняющий текст</div>
        <div className="accent__block-post">
          <div className="accent__block-post-left">
            <a href="#" className="accent__block-post-title">Поставщик</a>
            <div className="accent__block-post-subtitle">ООО «Фармстандарт»</div>
            <div className="accent__block-post-inn">ИНН 0848323654273</div>
            <div className="accent__block-post-text">
              Свердловская область, Екатеринбург, ул. Мамина-Сибиряка 23
              </div>
          </div>
          <div className="accent__block-post-right">
            <a href="#" className="accent__block-post-title">Получатель</a>
            <div className="accent__block-post-subtitle">
              ООО «ФМ-Логистик» Склад №21
              </div>
            <div className="accent__block-post-inn">ИНН 0848323654273</div>
            <div className="accent__block-post-text">
              Свердловская область, Екатеринбург, ул. Комарова 12
              </div>
          </div>
        </div>
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
          <div className="list-select">
            <div
              onClick={() => { setActiveClass(activeClass => !activeClass) }}
              className={toggleClass}>
              <div className="accent__block-toggle-point"></div>
            </div>
            <div className="list-select-text">Отозванные товары</div>
          </div>
        </div>
        <div className="table__block-wrapper">

          {
            naklData === null
              ?
              <Loader />
              :

              naklData.length === 0
                ?
                <NoDataMessage />
                :
                <table className="table__block-table">
                  <thead>
                    <tr className="table__block-title">
                      <th>Статус</th>
                      <th>Наименование</th>
                      <th>Коды маркировки</th>
                      <th>Кол-во</th>
                      <th>Проверка</th>
                      <th>Цена, Р.</th>
                      <th>НДС, Р.</th>
                      <th>Сумма(с НДС)</th>
                    </tr>
                  </thead>

                  <tbody>
                    {naklData.map((item) => {
                      return (
                        <tr key={item.name}
                          className="table__block-table-disagree">

                          <td><span>hz</span></td>
                          <td>{item.name}</td>
                          <td>{item.code_count}</td>
                          <td>{item.count}</td>
                          <td>{item.validation}</td>
                          <td>{item.price}</td>
                          <td>{item.nds}</td>
                          <td>{item.sum}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
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


export default Accent;

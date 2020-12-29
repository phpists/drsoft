import React, { useState } from 'react';
import icon1 from "../../images/icon-1.png"


const OverHead = () => {
  const [activeSelect, setActiveSelect] = useState(false);
  const [type, setType] = useState(null);
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState("Январь");
  const [status, setStatus] = useState("Завершён");


  ////////////   Show/hide dropdown
  function onSelectClick(item) {
    setActiveSelect(activeSelect => !activeSelect)
    item === "year" && setType("year")
    item === "month" && setType("month")
    item === "status" && setType("status")
  };

  const years =
    [
      2020,
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002
    ];

  const months =
    [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ];

  const statuses = ["Завершён", "Не завершён"];


  return (
    <div className="container">
      <header className="header">
        <ul className="menu">
          <li className="menu__list">
            <a href="#" className="menu__list-link">Справочники</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">
              Формы
                <div className="menu__list-sublink">
                <div className="menu__list-sublink-word">
                  <span>Справочники</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Продажи</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Должники</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Предоплата</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Наряды</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Дни рождения пациентов</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Госпитализация</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
                <div className="menu__list-sublink-word">
                  <span>Раздватри</span>
                  <div className="menu__list-sublink-block">
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                    <div className="menu__list-sublink-subword">Справочники</div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">ТМЦ</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Профосмотры</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Отчеты</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Польз.отчеты</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Опросы</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Helix</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Администрирование</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Помощь</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Докторов Д.Д. (sa)</a>
          </li>
          <li className="menu__list">
            <a href="#" className="menu__list-link">Пациенты</a>
          </li>
        </ul>
        <div className="recording">
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Расписание</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Пациенты</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Прайс</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Запись</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Напоминание</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Шаблоны</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Документы</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Отчеты</a
            >
          </div>
          <div className="recording__item">
            <a href="#" className="recording__item-link"
            ><div className="recording__item-icon">
                <img src={icon1} alt="" />
              </div>
              Сообщения</a
            >
          </div>
        </div>
      </header>

      <div className="overhead">
        <div className="overhead__block">
          <div className="overhead__block-top">
            <div className="overhead__block-top-right">
              <div className="overhead__block-top-title">
                Накладные
                  <button className="buttonPlus">
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
                        onClick={() => setYear(year)}
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
                    <span className="select__current">{month}</span>
                  </div>
                  <div className="select__body-bg"></div>
                  <div className="select__body">
                    {months.map((month) => (
                      <div key={month}
                        onClick={() => setMonth(month)}
                        className="list-select-option">{month}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="list-select">
                <div className="list-select-text">Статус</div>
                <div className={activeSelect && type === "status" ? "select active" : "select"}
                  onClick={() => onSelectClick("status")}>
                  <div className="list-select-selector">
                    <span className="select__current">{status}</span>
                  </div>
                  <div className="select__body-bg"></div>
                  <div className="select__body">
                    {statuses.map((status) => (
                      <div key={status}
                        onClick={() => setStatus(status)}
                        className="list-select-option">{status}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>




            <div className="table__block-wrapper">
              <table className="table__block-table">
                
                <thead>
                  <tr className="table__block-title">
                    <th>Статус</th>
                    <th>№</th>
                    <th>Дата</th>
                    <th>Поставщик</th>
                    <th>Акцент</th>
                    <th>Тип договора</th>
                    <th>Сумма, Р.</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="table__block-newover">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-reception">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-shipment">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-error">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>
                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>
                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>
                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>

                  <tr className="table__block-end">
                    <td><span>Новая поставка</span></td>
                    <td>123</td>
                    <td>21.12.09</td>
                    <td>ООО «Фармстандарт»</td>
                    <td>Прямой</td>
                    <td>Купля-продажа</td>
                    <td>З10 000,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};


export default OverHead;

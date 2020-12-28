import React, { useState } from 'react';
import icon1 from "../../images/icon-1.png"


const OverHead = () => {


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
                <div className="select">
                  <div className="list-select-selector">
                    <span className="select__current">2020</span>
                  </div>
                  <div className="select__body-bg"></div>
                  <div className="select__body">
                    <div className="list-select-option">2020</div>
                    <div className="list-select-option">2019</div>
                    <div className="list-select-option">2018</div>
                    <div className="list-select-option">2017</div>
                    <div className="list-select-option">2016</div>
                    <div className="list-select-option">2015</div>
                    <div className="list-select-option">2014</div>
                    <div className="list-select-option">2013</div>
                    <div className="list-select-option">2012</div>
                    <div className="list-select-option">2011</div>
                    <div className="list-select-option">2010</div>
                    <div className="list-select-option">2009</div>
                    <div className="list-select-option">2008</div>
                    <div className="list-select-option">2007</div>
                    <div className="list-select-option">2006</div>
                    <div className="list-select-option">2005</div>
                    <div className="list-select-option">2004</div>
                    <div className="list-select-option">2003</div>
                    <div className="list-select-option">2002</div>
                    <div className="list-select-option">2010</div>
                    <div className="list-select-option">2009</div>
                    <div className="list-select-option">2008</div>
                    <div className="list-select-option">2007</div>
                    <div className="list-select-option">2006</div>
                    <div className="list-select-option">2005</div>
                    <div className="list-select-option">2002</div>
                  </div>
                </div>
              </div>

              <div className="list-select">
                <div className="list-select-text">Месяц</div>
                <div className="select">
                  <div className="list-select-selector">
                    <span className="select__current">Январь</span>
                  </div>
                  <div className="select__body-bg"></div>
                  <div className="select__body">
                    <option value="" className="list-select-option">Январь</option>
                    <option value="" className="list-select-option">Февраль</option>
                    <option value="" className="list-select-option">Март</option>
                    <option value="" className="list-select-option">Апрель</option>
                    <option value="" className="list-select-option">Май</option>
                    <option value="" className="list-select-option">Июнь</option>
                    <option value="" className="list-select-option">Июль</option>
                    <option value="" className="list-select-option">Август</option>
                    <option value="" className="list-select-option">
                      Сентябрь
                      </option>
                    <option value="" className="list-select-option">Октябрь</option>
                    <option value="" className="list-select-option">Ноябрь</option>
                    <option value="" className="list-select-option">Декабрь</option>
                  </div>
                </div>
              </div>

              <div className="list-select">
                <div className="list-select-text">Статус</div>
                <div className="select">
                  <div className="list-select-selector">
                    <span className="select__current">Завершён</span>
                  </div>
                  <div className="select__body-bg"></div>
                  <div className="select__body">
                    <option value="" className="list-select-option">
                      Завершён
                      </option>
                    <option value="" className="list-select-option">
                      Не завершён
                      </option>
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
      </div>
    </div>
  );
};


export default OverHead;

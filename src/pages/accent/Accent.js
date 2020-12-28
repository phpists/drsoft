import React, { useState } from 'react';



const Accent = () => {
  const [activeClass, setActiveClass] = useState(false)

  let toggleClass;
  activeClass ? toggleClass = "accent__block-toggle" : toggleClass = "accent__block-toggle noactive";


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
           


            <div className="select">
              <div className="list-select-selector">
                <span className="select__current">01.11.2020</span>
              </div>
              <div className="select__body-bg"></div>
              <div className="select__body">
                <div className="list-select-option">01.11.2020</div>
                <div className="list-select-option">02.11.2020</div>
                <div className="list-select-option">03.11.2020</div>
                <div className="list-select-option">04.11.2020</div>
                <div className="list-select-option">05.11.2020</div>
                <div className="list-select-option">06.11.2020</div>
              </div>
            </div>
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
              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
              <tr className="table__block-table-coincide">
                <td><span>Проверили, данные не совпадают</span></td>
                <td>аскорбин</td>
                <td>23.04.12</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
              <tr className="table__block-table-unverified">
                <td><span>Проверили, данные совпадают</span></td>
                <td>креатинин</td>
                <td>12.01.02</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
              <tr className="table__block-table-unverified">
                <td><span>Проверили, данные совпадают</span></td>
                <td>креатинин</td>
                <td>12.01.02</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
              <tr className="table__block-table-unverified">
                <td><span>Проверили, данные совпадают</span></td>
                <td>креатинин</td>
                <td>12.01.02</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
              <tr className="table__block-table-unverified">
                <td><span>Проверили, данные совпадают</span></td>
                <td>креатинин</td>
                <td>12.01.02</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
              <tr className="table__block-table-unverified">
                <td><span>Проверили, данные совпадают</span></td>
                <td>креатинин</td>
                <td>12.01.02</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>

              <tr className="table__block-table-disagree">
                <td><span>Ещё не проверили</span></td>
                <td>аспиран</td>
                <td>123</td>
                <td>123</td>
                <td>нет</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
                <td>З10 000,00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="accent__block-button">
          <button className="btn">Прервать приемку</button>
          <button className="btn">Доверительная приемка</button>
          <button className="btn">Отказ</button>
          <button className="btn">Завершить приемку</button>
        </div>
      </div>
    </div>
  );
};


export default Accent;

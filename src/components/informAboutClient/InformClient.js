import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import "./informClient.scss";
const informClient = () => {
  return (
    <>
      <div className="allKiper">
        <h2 className="informaboutklient">Информация о клиенте</h2>
        <h2>Клиент</h2>
        <div className="allKlient">
          <div>
            <p>ИМЯ ОТЧЕСТВО</p>
            <input type="text" />
          </div>
          <div>
            <p>ФАМИЛИЯ</p>
            <input type="text" />
          </div>
          <div>
            <p>ДОП. ИНФО</p>
            <input type="text" />
          </div>
          <div>
            <p>ТЕЛЕФОН</p>
            <input type="number" />
            <div className="icon">
              <PlusSquareOutlined />
            </div>
          </div>
          <div>
            <p>EMAIL</p>
            <input type="text" />
            <div className="icon">
              <PlusSquareOutlined />
            </div>
          </div>
          <div>
            <p>№ КАРТЫ</p>
            <input type="number" />
          </div>
        </div>
        <div className="adresBtn">
          <h2>Адрес</h2>
          <button>Добавить</button>
        </div>

        <div className="allKlient">
          <div>
            <p>СТРАНА</p>
            <input type="text" />
          </div>
          <div>
            <p>ГОРОД</p>
            <input type="text" />
            <div className="icon">
              <PlusSquareOutlined />
            </div>
          </div>
          <div>
            <p>УЛИЦА</p>
            <input type="text" />
          </div>
          <div>
            <p>ДОМ</p>
            <input type="number" />
          </div>
          <div>
            <p>ЭТАЖ</p>
            <input type="text" />
          </div>
          <div>
            <p>ПОДЪЕЗД</p>
            <input type="number" />
          </div>
        </div>
        <h2>Заказ</h2>
        <div className="allKlient">
          <div>
            <p>ТИП ЗАКАЗА</p>
            <input type="text" />
          </div>
          <div>
            <p>РЕСТОРАН</p>
            <input type="text" />
          </div>
          <div>
            <p>ВРЕМЯ ДОСТАВКИ</p>
            <input type="text" />
          </div>
          <div>
            <p>СУММА ЗАКАЗА</p>
            <input type="number" />
          </div>
          <div>
            <p>СУММА К ОПЛАТЕ</p>
            <input type="text" />
          </div>
          <div>
            <p>СПОСОБ ОПЛАТЫ</p>
            <input type="number" />
          </div>
        </div>
        <div className="allResult">
          <div>Перейти к заказу</div>
          <div>Принять заказ</div>
          <div>Отмена</div>
        </div>
      </div>
    </>
  );
};

export default informClient;

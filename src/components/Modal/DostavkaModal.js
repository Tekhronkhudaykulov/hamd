import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import ArrowLeft from "../../assets/img/arrow-left.svg";

import "./DostavkaModal.scss";
const DostavkaModal = ({ closeModal }) => {
  return (
    <div className="dostavkamodal">
      <div className="adresBtn">
        <h2>Адрес</h2>
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
      <div className="dob-exit">
        <button>Добавить</button>
        <img onClick={() => closeModal(true)} src={ArrowLeft} alt="" />
      </div>
    </div>
  );
};

export default DostavkaModal;

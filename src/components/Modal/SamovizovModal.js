import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import ArrowLeft from "../../assets/img/arrow-left.svg";

import "./SamovizovModal.scss";
const SamovizovModal = ({ closeModal }) => {
  return (
    <div className="samovizovmodal">
      <div className="allKlient">
        <div>
          <h2>Клиент</h2>
        </div>
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
        <div className="imgNext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SamovizovModal;

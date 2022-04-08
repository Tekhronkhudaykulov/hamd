import React, { useState } from "react";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import "./DostavkaModal.scss";
import MapModal from "./MapModal";
import DostavkaInput from "./DostavkaInput";
const DostavkaModal = ({ closeModal }) => {
  return (
    <div className="dostavkamodal">
      <div className="container">
        <p className="samo">Доставка</p>
        <div className="imgArrow imgnext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div>
        <DostavkaInput />
        {/* <MapModal /> */}
        <div className="price">
          <div className="summa-zakaza">
            <p>Сумма заказа:</p>
            <span>10000 сум</span>
          </div>
          <div className="summa-dostavki">
            <p>Сумма доставки:</p>
            <span>2000 сум</span>
          </div>
          <div className="summa-all">
            <p>Общая сумма:</p>
            <span>1000000 сум</span>
          </div>
          <div className="zakazat">
            <p>Подвердить</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DostavkaModal;

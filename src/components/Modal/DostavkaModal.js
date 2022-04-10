import React, { useState } from "react";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import "./DostavkaModal.scss";
import MapModal from "./MapModal";
import DostavkaInput from "./DostavkaInput";
import { useSelector } from "react-redux";
const DostavkaModal = ({ closeModal }) => {
  return (
    <div className="dostavkamodal">
      <div className="container">
        <p className="samo">Доставка</p>
        <div className="imgArrow imgnext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div>
        <DostavkaInput />
      </div>
    </div>
  );
};

export default DostavkaModal;

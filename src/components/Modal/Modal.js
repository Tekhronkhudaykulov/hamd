import React from "react";
import "./Modal.scss";
import BackNext from "../Back/BackNext";
import DostavkaPng from "../../assets/img/dostavka.png";
import SamovizovPng from "../../assets/img/Group.png";
import { Link } from "react-router-dom";
const Modal = () => {
  return (
    <>
      <div className="allKiper">
        <div className="container">
          <p className="informaboutklient">Информация о клиенте</p>
          <BackNext />
          <div className="type-dostavka">
            {/* <Link to="samovivozInput">
              <div className="allSamovizov">
                <img src={SamovizovPng} alt="" />
                <p>Самовызов</p>
              </div>
            </Link> */}
            <Link to="dostavkaInput">
              <div className="allDostavka">
                <img src={DostavkaPng} alt="" />
                <p>Доставка</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

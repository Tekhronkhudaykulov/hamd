import React, { useEffect } from "react";
import CurierImg from "../../../assets/img/courier.svg";
import "./FreCourier.scss";
const FreeCourier = () => {
  return (
    <div className="courier-free-component">
      <div className="about-courier">
        <img src={CurierImg} alt="" />
        <div className="courier-inform">
          <p>
            id: <span>#33</span>
          </p>
          <p>
            Курьер: <span>Texron</span>
          </p>
          <p>
            Тел: <span>+998993603424</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeCourier;

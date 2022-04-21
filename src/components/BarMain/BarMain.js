import React from "react";
import "./BarMain.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Curiers from "../Curiers";
import Orders from "../Orders";
import AllCurierMap from "../Map";

const BarMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bar-main">
        <div className="bar-main-left">
          <div className="left-header">
            <div className="left-header-name">r_k</div>
          </div>
          <div className="left-maptop">
            <span>15.03.2021 16:02</span>
            <span>Основная</span>
            <span>Администратор</span>
          </div>
          <AllCurierMap />
          <Curiers />
          <div onClick={() => navigate("/main/bar")} className="left-bottom">
            <div>Кухня</div>
          </div>
        </div>
        <div className="bar-main-right">
          <Outlet />
          <Orders />
        </div>
        <div className="bar-main-bottom">Меню</div>
      </div>
    </>
  );
};

export default BarMain;

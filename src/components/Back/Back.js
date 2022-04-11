import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import "./back.scss";
const Back = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className="div">
      <img className="imgArrow" src={ArrowLeft} alt="" />
    </div>
  );
};

export default Back;

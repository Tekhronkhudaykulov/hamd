import React from "react";
import { useNavigate } from "react-router-dom";
import "./back.scss";
import ArrowLeft from "../../assets/img/arrow-left.svg";
const BackNext = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className="next-div">
      <img className="imgArrowNext" src={ArrowLeft} alt="" />
    </div>
  );
};

export default BackNext;

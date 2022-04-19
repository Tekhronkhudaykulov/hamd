import React, { useState, useEffect } from "react";
import axios from "axios";
import CurierImg from "../../../assets/img/courier.svg";
import "./FreCourier.scss";

const FreeCourier = () => {
  const [freeCourier, setFreeCourier] = useState([""]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://hamd.loko.uz/api/operator/couriers-free"
      );
      setFreeCourier(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="courier-free-component">
      {freeCourier &&
        freeCourier.map((item) => {
          <div className="about-courier">
            <img src={CurierImg} alt="" />
            <div className="courier-inform">
              <p>
                id: <span>#{item.id}</span>
              </p>
              <p>
                Курьер: <span>{item.name}</span>
              </p>
              <p>
                Тел: <span>{item.phone}</span>
              </p>
            </div>
          </div>;
        })}
    </div>
  );
};

export default FreeCourier;

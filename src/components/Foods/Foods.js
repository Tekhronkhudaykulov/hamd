import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import Back from "../Back";
import "./Foods.scss";
import axios from "axios";

const Foods = () => {
  const [product, setProduct] = useState([""]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://hamd.loko.uz/api/operator/product"
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="allFoods">
      <Back />
      {product.map((item, ind) => (
        <div
          key={ind}
          onClick={() => {
            console.log({ item });
          }}
          className="div"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Foods;

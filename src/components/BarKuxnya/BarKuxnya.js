import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";

import Back from "../Back";
import "./BarKuxnya.scss";
function BarKuxnya() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [categoryProduct, setCategoryProduct] = useState([""]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      console.log("loading yest");
      const { data } = await axios.get(
        "https://hamd.loko.uz/api/operator/category?type=product"
      );
      setCategoryProduct(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="allBar">
        <Back />
        {categoryProduct.map((item, index) => (
          <>
            <div
              onClick={() => navigate(`/main/allFoods/${item.id}`)}
              key={index}
              className="div"
            >
              {item.name}
            </div>
          </>
        ))}
      </div>
      <div className="loading">
        {isLoading && (
          <ReactLoading
            className="loadingFoods"
            width={80}
            type="spinningBubbles"
            color={"#849ec8"}
          />
        )}
      </div>
    </>
  );
}

export default BarKuxnya;

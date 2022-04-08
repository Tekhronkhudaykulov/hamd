import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Back from "./Back";
import { useDispatch } from "react-redux";
import { addMeal } from "../store/orderSlice";
import ReactLoading from "react-loading";

const AllProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const { categoryId } = useParams();
  const dispacht = useDispatch();

  const mealAdd = (product) => {
    const meal = {
      id: product.id,
      amount: 1,
      price: product.price,
      name: product.name,
    };
    dispacht(addMeal(meal));
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://hamd.loko.uz/api/operator/product?category_id=${categoryId}`
      );
      setAllProduct(data.data);
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
        {allProduct.map((item, index) => (
          <div key={index} className="div" onClick={() => mealAdd(item)}>
            <p>{item.name}</p>
            <span>{item.price} sum</span>
          </div>
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
};

export default AllProduct;

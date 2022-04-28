import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCuriers } from "../store/kurierSlice";
import ReactLoading from "react-loading";
import { addModal } from "../store/kurierSlice";
import Curier from "./Curier";
import CourierInput from "./Courier/CourierInput";

const Curiers = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [courerFilter, setCourerFilter] = useState({
    search: "",
    status: 1,
  });

  const data = useSelector((state) => {
    const st = state.curier;
    return {
      curiers: st.curiers,
      isLoading: st.isLoading,
    };
  });

  const curierAdd = (product) => {
    const curier = {
      id: product.id,
      name: product.courier.name,
      addres: product.address,
      map_location: product.map_location,
      phone: product.courier.phone,
    };
    dispatch(addModal(curier));
  };

  useEffect(() => {
    dispatch(getCuriers(courerFilter));
  }, []);

  return (
    <>
      <div className="couriers">
        <div className="input-title">
          <p className="curier-title">Курьеры</p>
          <CourierInput
            onChengeSearch={(search) => {
              let newFilter = {
                ...courerFilter,
                search,
              };
              // dispatch(getCuriers(newFilter));
              setCourerFilter(newFilter);
            }}
          />
        </div>
        <div className="loading">
          {data.isLoading && (
            <ReactLoading
              className="loadingFoods"
              width={40}
              type="spinningBubbles"
              color={"#849ec8"}
            />
          )}
        </div>
        <div className="all_curier">
          {data.curiers.map((item) => (
            <Curier item={item} curierAdd={curierAdd} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Curiers;

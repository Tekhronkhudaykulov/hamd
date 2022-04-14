import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCuriers } from "../store/kurierSlice";
import ReactLoading from "react-loading";
import { addModal } from "../store/kurierSlice";
import Curier from "./Curier";

const Curiers = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
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
    };
    dispatch(addModal(curier));
  };
  useEffect(() => {
    dispatch(getCuriers());
  }, []);
  return (
    <>
      <div className="couriers">
        <div className="input-title">
          <p className="curier-title">Курьеры</p>
          <input
            type="text"
            className="curier_input"
            placeholder="Kurierning idisini kiriting"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
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
          {search.length > 0
            ? data.curiers
                .filter((item) => item.id == search)
                .map((item, id) => (
                  <Curier
                    item={item}
                    curierAdd={curierAdd}
                    id={id}
                    status={item.status}
                  />
                ))
            : data.curiers.map((item, id) => (
                <Curier
                  item={item}
                  curierAdd={curierAdd}
                  id={id}
                  status={item.status}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Curiers;

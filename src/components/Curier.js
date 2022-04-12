import React from "react";
import CurierImg from "../assets/img/courier.svg";
const Curier = ({ item, curierAdd, id, status }) => {
  return (
    <>
      {status == 2 ? (
        <div>
          <div className="courier" onClick={() => curierAdd(item)} key={id}>
            <img src={CurierImg} alt="" />
            <div className="courier-info">
              <p>
                <span>Курьер:</span>
                {item.courier.name ?? "NE UKAZANO"}
              </p>
              <p>
                <span>ID заказа:</span>#{item.id}
              </p>
              <p>
                <span>Маршрут:</span>
                {item.address}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Curier;

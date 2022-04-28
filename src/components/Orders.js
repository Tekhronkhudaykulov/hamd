import React, { useEffect, useState } from "react";

import axios from "axios";

const Orders = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [orders, setOrders] = useState([]);

  const fetchData = async (status) => {
    try {
      const { data } = await axios.get(
        `https://hamd.loko.uz/api/operator/orders?status=${status}`
      );
      setOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="main_bottom_orders">
        <div className="group-button">
          <button
            onClick={() => {
              fetchData(0);
              setActiveButton("button1");
            }}
            className={activeButton === "button1" ? `active_button` : ""}
          >
            Список заказов
          </button>
          <button
            onClick={() => {
              fetchData(1);
              setActiveButton("button2");
            }}
            className={activeButton === "button2" ? `active_button` : ""}
          >
            Принятые заказы
          </button>
          <button
            onClick={() => {
              fetchData(2);
              setActiveButton("button3");
            }}
            className={activeButton === "button3" ? `active_button` : ""}
          >
            Заказы в пути
          </button>
          <button
            onClick={() => {
              fetchData(3);
              setActiveButton("button4");
            }}
            className={activeButton === "button4" ? `active_button` : ""}
          >
            Завершенные заказы
          </button>
        </div>
        <div className="all-orders">
          {orders.map((item) => (
            <>
              <div className="main_bottom_items">
                <div className="main_bottom_border"></div>
                <p>id:{item.id}</p>
                <div className="main_bottom_border"></div>
              </div>
              {item.orderProducts &&
                item.orderProducts.map((item) => (
                  <p className="gamburger">
                    {item.product.name} ..кл: {item.count} ...
                    {item.product.price}
                    сум
                  </p>
                ))}
              {
                <>
                  <div className="itog">
                    <span>Адресс доставки: {item.address}</span>
                  </div>
                  <div className="itog-allSuma">
                    <span>Сумма доставки: {item.delivery_price}сум</span>
                    <span>Сумма заказа: {item.product_total_sum} сум</span>
                    <span style={{ color: "white" }}>
                      Итог......
                      {item.delivery_price + item.product_total_sum}
                      сум
                    </span>
                  </div>
                </>
              }
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;

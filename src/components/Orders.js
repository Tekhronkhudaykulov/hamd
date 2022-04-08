import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setInterval(() => fetchData(), 1000);
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://hamd.loko.uz/api/operator/orders"
      );
      setOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const deleteId = async (id) => {
  //   const order_id = orders.filter((item) => item.id === id);
  //   const payload = {
  //     order_id: order_id,
  //   };
  //   try {
  //     const { data } = await axios.post(
  //       "http://hamd.loko.uz/api/operator/order-remove",
  //       payload
  //     );
  //     setOrders(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className="main_bottom_orders">
        {orders.map((item) => (
          <>
            <div className="main_bottom_items">
              <div className="main_bottom_border"></div>
              <p>#{item.id}</p>
              <div className="main_bottom_border"></div>
            </div>
            {item.orderProducts &&
              item.orderProducts.map((item) => (
                <p className="gamburger">
                  {item.product.name} ... {item.count} ... {item.product.price}
                  сум
                </p>
              ))}
            {
              <p className="itog">
                <span>Итог......</span>
                <span>{item.product_total_sum} сум</span>
                {/* <div className="delete" onClick={() => deleteId(item.id)}>
                  <DeleteOutlined style={{ fontSize: "30px" }} />
                </div> */}
              </p>
            }
          </>
        ))}
        {/* <div className="loading">
          {isLoading && (
            <ReactLoading
              className="loadingFoods"
              width={80}
              type="spinningBubbles"
              color={"white"}
            />
          )}
        </div> */}
      </div>
    </>
  );
};

export default Orders;

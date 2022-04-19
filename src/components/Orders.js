import React, { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setInterval(() => fetchData(), 10000);
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

  return (
    <>
      <div className="main_bottom_orders">
        {orders.map((item) =>
          item.status == 0 ? (
            <>
              <div className="main_bottom_items">
                <div className="main_bottom_border"></div>
                <p>#{item.id}</p>
                <div className="main_bottom_border"></div>
              </div>
              {item.orderProducts &&
                item.orderProducts.map((item) => (
                  <p className="gamburger">
                    {item.product.name} ... {item.count} ...
                    {item.product.price}
                    сум
                  </p>
                ))}
              {
                <>
                  <div className="itog">
                    <div className="itog-address">
                      <MdOutlineLocationOn
                        size={50}
                        style={{ color: "white" }}
                      />
                      <span>{item.address}</span>
                    </div>
                    <div className="itog-allSuma">
                      <span>Итог......</span>
                      <span>{item.product_total_sum} сум</span>
                    </div>
                  </div>
                </>
              }
            </>
          ) : null
        )}
      </div>
    </>
  );
};

export default Orders;

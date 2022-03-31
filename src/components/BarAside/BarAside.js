import React from "react";
import "./BarAside.scss";
import succes from "../../assets/img/check-succes.svg";
import xclosesvg from "../../assets/img/Xclosesvg.svg";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearOrder } from "../../store/orderSlice";

const BarAside = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.order.meals);
  const initialState = 0;
  const allSum = meals.reduce(
    (amount, meal) => amount + meal.amount * meal.price,
    initialState
  );
  const initial = "";
  const allName = meals.map((item) => item.name);
  const count = meals.map((item) => item.amount, initial);

  const filter = () => {
    dispatch(clearOrder(meals));
  };

  return (
    <div className="bar-aside">
      <div className="bar-aside-head">
        <div className="window">
          <div>
            {allName.map((item) => (
              <>
                <p>{item}</p>
              </>
            ))}
          </div>
          <div className="bar_main_bot">
            {count.map((item) => (
              <>
                <p>{item}</p>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="bar-aside-bottom">
        <div className="bar-total">Оплатить Сум: {allSum}</div>
      </div>
      <div className="bar-aside-bottom-img">
        <NavLink className="img-1" to={`/main/payment`}>
          <img src={succes} alt="" />
        </NavLink>
        <NavLink className="img-2" to={"/main/first"}>
          <img onClick={filter} src={xclosesvg} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default BarAside;

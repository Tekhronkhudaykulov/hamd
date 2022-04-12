import React, { useState } from "react";
import "./BarAside.scss";
import succes from "../../assets/img/check-succes.svg";
import xclosesvg from "../../assets/img/Xclosesvg.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { clearOrder } from "../../store/orderSlice";
import { changeCount } from "../../store/orderSlice";
import { Link } from "react-router-dom";
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
  const count = meals.map((item) => {
    return { amount: item.amount, id: item.id };
  }, initial);
  console.log("====================================");
  console.log(count);
  console.log("====================================");
  const filter = () => {
    dispatch(clearOrder(meals));
  };

  return (
    <>
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
                  <div className="buttonWindow">
                    <button
                      onClick={() =>
                        dispatch(changeCount({ id: item.id, node: 1 }))
                      }
                    >
                      -
                    </button>
                    <p>{item.amount}</p>
                    <button
                      onClick={() =>
                        dispatch(changeCount({ id: item.id, node: -1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="bar-aside-bottom">
          <div className="bar-total">Оплатить Сум: {allSum}</div>
        </div>
        <div className="bar-aside-bottom-img">
          <NavLink to="/modal">
            <div className="img-1">
              <img src={succes} alt="" />
            </div>
          </NavLink>
          <NavLink onClick={filter} className="img-2" to={"/main/first"}>
            <img src={xclosesvg} alt="" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BarAside;
// const [change, setChange] = useState(false);

// const ToggleSwtich = () => {
//   change ? setChange(false) : setChange(true);
// };

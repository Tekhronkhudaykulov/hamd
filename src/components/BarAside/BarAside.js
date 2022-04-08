import React, { useState } from "react";
import "./BarAside.scss";
import succes from "../../assets/img/check-succes.svg";
import xclosesvg from "../../assets/img/Xclosesvg.svg";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearOrder } from "../../store/orderSlice";
import { changeCount } from "../../store/orderSlice";
import Modal from "../Modal/Modal";
const BarAside = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
                  <button
                    onClick={() =>
                      dispatch(changeCount({ id: item.id, node: 1 }))
                    }
                  >
                    +
                  </button>
                  <p>{item.amount}</p>
                  <button
                    onClick={() =>
                      dispatch(changeCount({ id: item.id, node: -1 }))
                    }
                  >
                    -
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="bar-aside-bottom">
          <div className="bar-total">Оплатить Сум: {allSum}</div>
        </div>
        <div className="bar-aside-bottom-img">
          <div
            className="img-1"
            onClick={() => {
              if (!modalOpen) setModalOpen(true);
            }}
          >
            <img src={succes} alt="" />
          </div>
          <NavLink className="img-2" to={"/main/first"}>
            <img onClick={filter} src={xclosesvg} alt="" />
          </NavLink>
        </div>
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default BarAside;
// const [change, setChange] = useState(false);

// const ToggleSwtich = () => {
//   change ? setChange(false) : setChange(true);
// };

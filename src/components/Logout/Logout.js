import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { clearOrder } from "../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.scss";
const Logout = () => {
  const meals = useSelector((state) => state.order.meals);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutButton = () => {
    localStorage.removeItem("token");
    navigate("/login");
    dispatch(clearOrder(meals));
  };
  return (
    <div onClick={logoutButton} className="logout">
      <LogoutOutlined style={{ fontSize: "30px", color: "black" }} />
    </div>
  );
};

export default Logout;

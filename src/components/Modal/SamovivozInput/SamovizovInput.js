import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PlusSquareOutlined } from "@ant-design/icons";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackNext from "../../Back/BackNext";
import { clearOrder } from "../../../store/orderSlice";
import "./SamovivozInput.scss";
const SamovizovInput = () => {
  const [typeOrder, setTypeOrder] = useState("самовывоз");
  const [data, setData] = useState({});
  const [change, setChange] = useState(false);
  const [filial, setFilial] = useState("Самарканд");
  const ToggleSwtich = () => {
    change ? setChange(false) : setChange(true);
  };

  const handleChange = (e) => {
    console.log("====================================");
    console.log({ e: e.target.name, DSADAS: "DAAAA" });
    console.log("====================================");
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const meals = useSelector((state) => state.order.meals);

  const products_id = meals.map((item) => item.id);
  const products_amount = meals.map((item) => item.amount);
  const productName = meals.map((item) => item.name);
  const initialState = 0;
  const allSum = meals.reduce(
    (amount, meal) => amount + meal.amount * meal.price,
    initialState
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    console.log("====================================");
    console.log("click");
    console.log("====================================");
    try {
      let requestData = {
        name: data.name,
        phone: data.phone,
        phone1: data.phone1,
        address: typeOrder,
        filial: filial,
        map_location: null,
        comment: "asdasdas",
        payment_type_id: 16,
        delivery_type_id: 13,
        payment_type_id: 1,
        products_amount: products_amount,
        products_id: products_id,
        productName: productName,
      };
      let response = await axios.post(
        "https://hamd.loko.uz/api/operator/order-new",
        requestData
      );
      navigate("main/first");
      dispatch(clearOrder(meals));
      console.log(response, "res");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meals, "asdadadad");
  const handlePhone = (e) => {
    setData({ ...data, phone: e });
  };
  const handlePhone1 = (e) => {
    setData({ ...data, phone1: e });
  };
  return (
    <>
      <div className="allVivoz">
        <div className="container">
          <p className="informaboutklient">Самовывоз</p>
          <BackNext />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="allInput">
              <TextField
                required
                label="Имя"
                placeholder="Имя"
                value={data.name}
                onChange={handleChange}
                name="name"
              />
              <div className="phone-input">
                <PhoneInput
                  inputClass="inputColor"
                  country={"uz"}
                  defaultMask={"(..) ...-..-.."}
                  alwaysDefaultMask={true}
                  name="phone"
                  onChange={handlePhone}
                  value={data.phone}
                />
              </div>
              {change ? (
                <PhoneInput
                  inputClass="inputColor"
                  country={"uz"}
                  defaultMask={"(..) ...-..-.."}
                  alwaysDefaultMask={true}
                  name="phone1"
                  onChange={handlePhone1}
                  value={data.phone1}
                />
              ) : null}
              <PlusSquareOutlined onClick={ToggleSwtich} className="icon" />
              <TextField
                required
                name="type_order"
                placeholder="самовывоз"
                label="Тип заказа"
                value={typeOrder}
              />
              <TextField
                required
                name="orientir"
                placeholder="самовывоз"
                label="Fillial"
                value={filial}
              />
            </div>
          </Box>
          <div className="samovizovP">
            {meals.map((item) => (
              <>
                <p>
                  {item.name} ... {item.amount} ... {item.price} сум
                </p>
              </>
            ))}
          </div>
          <div className="price">
            <div className="summa-all">
              <p>Общая сумма:</p>
              <span>{allSum} сум</span>
            </div>
            <div className="zakazat" onClick={handleSubmit}>
              <p>Подвердить</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SamovizovInput;

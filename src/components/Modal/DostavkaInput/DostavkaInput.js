import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import { PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons";
import BackNext from "../../Back/BackNext";
import { clearOrder } from "../../../store/orderSlice";
import "./DostavkaInput.scss";
import { useNavigate } from "react-router-dom";
const DostavkaInput = () => {
  const [valueSam, setValueSam] = useState("Доставка");
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");
  const [change, setChange] = useState(false);
  const [filial, setFilial] = useState("Самарканд");
  const [strana, setStrana] = useState("Самарканд");
  const [data, setData] = useState({});

  const ToggleSwtich = () => {
    change ? setChange(false) : setChange(true);
  };

  const handleChange = (e) => {
    console.log("====================================");
    console.log({ e: e.target.name, DSADAS: "DAAAA" });
    console.log("====================================");
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.street]: e.target.value,
      [e.target.house]: e.target.value,
      [e.target.entrance]: e.target.value,
      [e.target.floor]: e.target.value,
      [e.target.flat]: e.target.value,
      [e.target.reference_point]: e.target.value,
    });
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
        street: data.street,
        house: data.house,
        entrance: data.entrance,
        floor: data.floor,
        flat: data.flat,
        reference_point: data.reference_point,
        address: "Лисунова 3, 56, 43",
        map_location: null,
        comment: "Хорошего вам дня!",
        payment_type_id: 16,
        delivery_type_id: 12,
        products_amount: products_amount,
        products_id: products_id,
        productName: productName,
      };
      let response = await axios.post(
        "https://hamd.loko.uz/api/operator/order-new",
        requestData
      );
      navigate("first");
      dispatch(clearOrder(meals));

      console.log(response, "res");
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  };

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
          <p className="informaboutklient">Доставка</p>
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
                id="outlined-required"
                label="Имя"
                placeholder="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Город"
                placeholder="Город"
                value={strana}
              />
              <TextField
                required
                id="outlined-required"
                label="Улица"
                placeholder="Улица"
                name="street"
                value={data.street}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Дом"
                placeholder="Дом"
                type={"number"}
                name="house"
                value={data.house}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Подьезд"
                placeholder="Подьезд"
                type={"number"}
                name="entrance"
                value={data.entrance}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Этаж"
                placeholder="Этаж"
                type={"number"}
                value={data.floor}
                name="floor"
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Кв"
                placeholder="Кв"
                type={"number"}
                value={data.flat}
                name="flat"
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Ориентир"
                placeholder="Ориентир"
                name="reference_point"
                value={data.reference_point}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-required"
                label="Курьеры"
                placeholder="Курьеры"
              />
              <div className="phone-input ">
                <PhoneInput
                  inputClass="inputColor"
                  country={"uz"}
                  onChange={handlePhone}
                  value={data.phone}
                  name="phone"
                  defaultMask={"(..) ...-..-.."}
                  alwaysDefaultMask={true}
                />
              </div>
              {change ? (
                <PhoneInput
                  inputClass="inputColor"
                  country={"uz"}
                  onChange={handlePhone1}
                  value={data.phone1}
                  name="phone1"
                  defaultMask={"(..) ...-..-.."}
                  alwaysDefaultMask={true}
                />
              ) : null}
              {change ? (
                <MinusSquareOutlined className="icon" onClick={ToggleSwtich} />
              ) : (
                <PlusSquareOutlined className="icon" onClick={ToggleSwtich} />
              )}
            </div>
            <div className="tip-fill">
              <TextField
                required
                id="outlined-required"
                placeholder="самовывоз"
                label="Тип заказа"
                value={valueSam}
                className="dd"
              />
              <TextField
                required
                id="outlined-required"
                placeholder="самовывоз"
                label="Fillial"
                value={filial}
                className="dd"
              />
            </div>
          </Box>
          <div className="samo-price">
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
              <div onClick={handleSubmit} className="zakazat">
                <p>Подвердить</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DostavkaInput;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import { PlusSquareOutlined } from "@ant-design/icons";
const DostavkaInput = () => {
  const [valueSam, setValueSam] = useState("Доставка");
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");
  const [change, setChange] = useState(false);
  const [filial, setFilial] = useState("Самарканд");
  const [strana, setStrana] = useState("Самарканд");
  const ToggleSwtich = () => {
    change ? setChange(false) : setChange(true);
  };
  return (
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
        />
        <TextField
          required
          id="outlined-required"
          label="Дом"
          placeholder="Дом"
          type={"number"}
        />
        <TextField
          required
          id="outlined-required"
          label="Подьезд"
          placeholder="Подьезд"
          type={"number"}
        />
        <TextField
          required
          id="outlined-required"
          label="Этаж"
          placeholder="Этаж"
          type={"number"}
        />
        <TextField
          required
          id="outlined-required"
          label="Кв"
          placeholder="Кв"
          type={"number"}
        />
        <TextField
          required
          id="outlined-required"
          label="Ориентир"
          placeholder="Ориентир"
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
            value={phone}
            onChange={(phone) => setPhone(phone)}
            defaultMask={"(..) ...-..-.."}
            alwaysDefaultMask={true}
          />
        </div>
        {change ? (
          <PhoneInput
            inputClass="inputColor"
            country={"uz"}
            value={phone1}
            onChange={(phone) => setPhone1(phone)}
            defaultMask={"(..) ...-..-.."}
            alwaysDefaultMask={true}
          />
        ) : null}
        <PlusSquareOutlined onClick={ToggleSwtich} className="icon" />
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
  );
};

export default DostavkaInput;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PlusSquareOutlined } from "@ant-design/icons";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SamovizovModal.scss";
const SamovizovModal = ({ closeModal }) => {
  const [value, setValue] = useState("самовывоз");
  const [change, setChange] = useState(false);
  const [phone, setPhone] = useState("");
  const [filial, setFilial] = useState("Самарканд");

  const ToggleSwtich = () => {
    change ? setChange(false) : setChange(true);
  };

  return (
    <div className="samovizovmodal">
      <div className="container">
        <p>Самовывоз</p>
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
            <div className="phone-input">
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
                value={phone}
                onChange={(phone) => setPhone(phone)}
                defaultMask={"(..) ...-..-.."}
                alwaysDefaultMask={true}
              />
            ) : null}
            <PlusSquareOutlined onClick={ToggleSwtich} className="icon" />
            <TextField
              required
              id="outlined-required"
              placeholder="самовывоз"
              label="Тип заказа"
              value={value}
            />
            <TextField
              required
              id="outlined-required"
              label="Филлал"
              placeholder="Филлал"
              value={filial}
            />
          </div>
        </Box>
        <div className="summa-zakaza">
          <p>
            Сумма заказа: <span>10000</span>
          </p>
        </div>
        <div className="summa-dostavki">
          <p>
            Сумма доставки: <span>2000</span>
          </p>
        </div>
        <div className="imgNext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SamovizovModal;

{
  /* <div className="summa-zakaza">
          <p>
            Сумма заказа: <span>10000</span>
          </p>
        </div>
        <div className="summa-dostavki">
          <p>
            Сумма доставки: <span>2000</span>
          </p>
        </div>
        <div className="sposob-oplata">
          <div>Nalichi</div>
          <div>Terminal</div>
        </div>
        <div className="imgNext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div> */
}

// const [change, setChange] = useState(false);

// const ToggleSwtich = () => {
//   change ? setChange(false) : setChange(true);
// };

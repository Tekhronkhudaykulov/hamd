import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PlusSquareOutlined } from "@ant-design/icons";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SamovizovModal.scss";

const SamovizovModal = ({ closeModal }) => {
  const [valueSam, setValueSam] = useState("самовывоз");
  const [change, setChange] = useState(false);
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");

  const [filial, setFilial] = useState("Самарканд");

  const ToggleSwtich = () => {
    change ? setChange(false) : setChange(true);
  };

  return (
    <div className="samovizovmodal">
      <div className="container">
        <p className="samo">Самовывоз</p>
        <div className="imgArrow imgnext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div>
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
                value={phone1}
                onChange={(phone) => setPhone1(phone)}
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
              value={valueSam}
            />
            <TextField
              required
              id="outlined-required"
              placeholder="самовывоз"
              label="Fillial"
              value={filial}
            />
          </div>
        </Box>
        <div className="price">
          <div className="summa-zakaza">
            <p>Сумма заказа:</p>
            <span>10000 сум</span>
          </div>
          <div className="summa-dostavki">
            <p>Сумма доставки:</p>
            <span>2000 сум</span>
          </div>
          <div className="summa-all">
            <p>Общая сумма:</p>
            <span>1000000 сум</span>
          </div>
          <div className="zakazat">
            <p>Подвердить</p>
          </div>
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

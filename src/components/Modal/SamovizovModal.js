import React, { useState } from "react";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import "./SamovizovModal.scss";
import SamovizovInput from "./SamovizovInput";

const SamovizovModal = ({ closeModal }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="samovizovmodal">
      <div className="container">
        <p className="samo">Самовывоз</p>
        <div className="imgArrow imgnext" onClick={() => closeModal(true)}>
          <img src={ArrowLeft} alt="" />
        </div>
        <SamovizovInput closeModal={() => setModal(false)} />
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

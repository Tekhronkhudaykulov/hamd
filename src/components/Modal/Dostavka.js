import React, { useState } from "react";
import DostavkaModal from "./DostavkaModal";
import SamovizovPng from "../../assets/img/Group.png";

const Dostavka = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div
        className="allDostavka"
        onClick={() => {
          if (!modal) setModal(true);
        }}
      >
        <img src={SamovizovPng} alt="" />
        <p>Доставка</p>
      </div>
      {modal && <DostavkaModal closeModal={() => setModal(false)} />}
    </>
  );
};

export default Dostavka;

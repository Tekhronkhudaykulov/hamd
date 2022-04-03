import React, { useState } from "react";
import SamovizovModal from "./SamovizovModal";
import Dostavka from "../../assets/img/dostavka.png";
const Samovizov = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className="allSamovizov"
        onClick={() => {
          if (!modal) setModal(true);
        }}
      >
        <img src={Dostavka} alt="" />
        <p>Самовызов</p>
      </div>
      {modal && <SamovizovModal closeModal={() => setModal(false)} />}
    </>
  );
};

export default Samovizov;

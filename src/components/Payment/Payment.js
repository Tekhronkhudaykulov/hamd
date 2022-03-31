import React, { useState } from "react";
import Back from "../Back";
import "./Payment.scss";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
const Payment = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="payment_all">
      <Back />
      {/* <NavLink to={}>Безналичный расчет</NavLink> */}
      <div
        onClick={() => {
          if (!modalOpen) setModalOpen(true);
        }}
      >
        Наличность
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Payment;

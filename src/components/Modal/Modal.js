import React from "react";
import { useDispatch, useSelector } from "react-redux";
import danger from "../../assets/img/danger.svg";
import axios from "axios";
import "./Modal.scss";
import { PlusSquareOutlined } from "@ant-design/icons";

import { clearOrder } from "../../store/orderSlice";
import { useNavigate } from "react-router-dom";
import Samovizov from "./Samovizov";
import Dostavka from "./Dostavka";
import ArrowLeft from "../../assets/img/arrow-left.svg";

const Modal = ({ closeModal }) => {
  // const meals = useSelector((state) => state.order.meals);
  // const navigate = useNavigate();
  // const products_id = meals.map((item) => item.id);
  // console.log(products_id);
  // const products_amount = meals.map((item) => item.amount);
  // const dispatch = useDispatch();
  // const fetchData = async () => {
  //   const payload = {
  //     name: "Texron",
  //     phone: "998993693424",
  //     address: "slkdfjsal",
  //     map_location: "41.323311, 69.304796",
  //     comment: "comment",
  //     products_id: products_id,
  //     products_amount: products_amount,
  //     payment_type_id: 16,
  //     delivery_type_id: 12,
  //   };
  //   dispatch(clearOrder());
  //   navigate("/main/bar");
  //   try {
  //     const { data } = await axios.post(
  //       "http://hamd.loko.uz/api/operator/order-new",
  //       payload
  //     );

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="allKiper">
        <div className="container">
          <h2 className="informaboutklient">Информация о клиенте</h2>
          <div className="imgArrow" onClick={() => closeModal(true)}>
            <img src={ArrowLeft} alt="" />
          </div>
          <div className="type-dostavka">
            <Samovizov />
            <Dostavka />
          </div>
          {/* <div className="allResult">
            <div>Перейти к заказу</div>
            <div>Принять заказ</div>
            <div onClick={() => closeModal(true)}>Отмена</div>
          </div> */}
        </div>
      </div>
      {/* <div className="i-modal">
        <div onClick={() => closeModal(true)} className="i-modal-box">
          <img src={danger} alt="" />
          <p className="mb-3">Подтвердить</p>
          <p className="mb-3">Вы хотите оплатить чек с помощью “ Сум “?</p>
          <p className="d-flex">
            <a onClick={fetchData} href="#">
              Да
            </a>
            <a href="#">Нет</a>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Modal;

// import React from "react";
// import { PlusSquareOutlined } from "@ant-design/icons";
// import "./informClient.scss";
// const informClient = () => {
//   return (
//     <>
//       <div className="allKiper">
//         <h2 className="informaboutklient">Информация о клиенте</h2>
//         <h2>Клиент</h2>
//         <div className="allKlient">
//           <div>
//             <p>ИМЯ ОТЧЕСТВО</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ФАМИЛИЯ</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ДОП. ИНФО</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ТЕЛЕФОН</p>
//             <input type="number" />
//             <div className="icon">
//               <PlusSquareOutlined />
//             </div>
//           </div>
//           <div>
//             <p>EMAIL</p>
//             <input type="text" />
//             <div className="icon">
//               <PlusSquareOutlined />
//             </div>
//           </div>
//           <div>
//             <p>№ КАРТЫ</p>
//             <input type="number" />
//           </div>
//         </div>
//         <div className="adresBtn">
//           <h2>Адрес</h2>
//           <button>Добавить</button>
//         </div>

//         <div className="allKlient">
//           <div>
//             <p>СТРАНА</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ГОРОД</p>
//             <input type="text" />
//             <div className="icon">
//               <PlusSquareOutlined />
//             </div>
//           </div>
//           <div>
//             <p>УЛИЦА</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ДОМ</p>
//             <input type="number" />
//           </div>
//           <div>
//             <p>ЭТАЖ</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ПОДЪЕЗД</p>
//             <input type="number" />
//           </div>
//         </div>
//         <h2>Заказ</h2>
//         <div className="allKlient">
//           <div>
//             <p>ТИП ЗАКАЗА</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>РЕСТОРАН</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>ВРЕМЯ ДОСТАВКИ</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>СУММА ЗАКАЗА</p>
//             <input type="number" />
//           </div>
//           <div>
//             <p>СУММА К ОПЛАТЕ</p>
//             <input type="text" />
//           </div>
//           <div>
//             <p>СПОСОБ ОПЛАТЫ</p>
//             <input type="number" />
//           </div>
//         </div>
//         <div className="allResult">
//           <div>Перейти к заказу</div>
//           <div>Принять заказ</div>
//           <div>Отмена</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default informClient;

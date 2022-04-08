import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Phone from "../../assets/img/phone.svg";
import axios from "axios";
import Back from "../Back";
import "./Call.scss";
import Loading from "react-loading";
const Call = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [call, setCall] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://hamd.loko.uz/api/operator/last-calls"
      );
      setCall(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="back">
        <Back />
      </div>
      <h2>Последние звонки:</h2>
      {isLoading && (
        <div className="loading">
          <ReactLoading width={40} type="spinningBubbles" color={"#849ec8"} />
        </div>
      )}
      <div className="main_call">
        {call.map((item, i) => (
          <div key={i} className="main-right-center">
            <p className="d-flex">
              <p>
                {item.id}.<span>{item.phone}</span>
              </p>
              <span className="time">{item.date}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Call;

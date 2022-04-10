import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllProduct from "./components/AllProduct";
import BarAside from "./components/BarAside/BarAside";
import BarKuxnya from "./components/BarKuxnya/BarKuxnya";
import BarMain from "./components/BarMain/BarMain";
import Call from "./components/Call/Call";
import FirstBar from "./components/FirstBar/FirstBar";
import Payment from "./components/Payment/Payment";
import Auth from "./components/LoginPage/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/profileSlice";
import Logout from "./components/Logout/Logout";
import InformClient from "./components/informAboutClient/InformClient";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
  InfoBox,
  Scrtip,
  InfoWindow,
  Data,
} from "@react-google-maps/api";
function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.profile);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(setToken(token));
  }, []);
  const apiKey = "AIzaSyAoud-_7sLGaEDVV5s8QvtTeGzI9dunLqU";
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <BrowserRouter>
        <Routes>
          <Route path={"inform"} element={<InformClient />} />
          <Route
            path={"*"}
            element={<Navigate to={!token ? "login" : "main/first"} />}
          />
          <Route path={"login"} element={<Auth />} />
          <Route path={"main"} element={<MainPage />}>
            <Route path={"first"} element={<FirstBar />} />
            <Route path={"call"} element={<Call />} />
            <Route path={"bar"} element={<BarKuxnya />} />
            <Route path={"allFoods/:categoryId"} element={<AllProduct />} />
            <Route path={"payment"} element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadScript>
  );
}

export default App;

const MainPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="i-container">
          <BarMain />
          <BarAside />
        </div>
        <Logout />
      </div>
    </>
  );
};

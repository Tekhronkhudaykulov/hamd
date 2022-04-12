import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllProduct from "./components/AllProduct";
import BarAside from "./components/BarAside/BarAside";
import BarKuxnya from "./components/BarKuxnya/BarKuxnya";
import BarMain from "./components/BarMain/BarMain";
import Call from "./components/Call/Call";
import FirstBar from "./components/FirstBar/FirstBar";
import Auth from "./components/LoginPage/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/profileSlice";
import Logout from "./components/Logout/Logout";
import Modal from "../src/components/Modal/Modal";
import SamovizovInput from "./components/Modal/SamovivozInput/SamovizovInput";
import DostavkaInput from "./components/Modal/DostavkaInput/DostavkaInput";
function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.profile);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(setToken(token));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"login"} element={<Auth />} />
        <Route
          path={"*"}
          element={<Navigate to={!token ? "login" : "main/first"} />}
        />
        <Route path={"main"} element={<MainPage />}>
          <Route path={"first"} element={<FirstBar />} />
          <Route path={"call"} element={<Call />} />
          <Route path={"bar"} element={<BarKuxnya />} />
          <Route path={"allFoods/:categoryId"} element={<AllProduct />} />
        </Route>
        <Route path={"/modal"} element={<Modal />} />
        <Route path={"modal/samovivozInput"} element={<SamovizovInput />} />
        <Route path={"modal/dostavkaInput"} element={<DostavkaInput />} />
      </Routes>
    </BrowserRouter>
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

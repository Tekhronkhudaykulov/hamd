import React, { useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import "./LoginPage.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { setToken } from "../../store/profileSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://hamd.loko.uz/api/operator/sign-in",
        values
      );
      localStorage.setItem("token", data.data.token);
      axios.defaults.headers["Authorization"] = `Bearer ${data.data.token}`;
      dispatch(setToken(null));
      navigate("/main/first");
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="allAuth">
        <h1>
          <span style={{ color: "black" }}>HAMD</span>
        </h1>
        <div className="body">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={login}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="login">
              <Input placeholder="Логин" />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="button" type="primary" htmlType="submit">
                {isLoading ? (
                  <div className="loading">
                    <ReactLoading
                      width={40}
                      type="spinningBubbles"
                      color={"white"}
                    />
                  </div>
                ) : (
                  "Войти"
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Auth;

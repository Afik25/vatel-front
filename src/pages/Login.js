import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "../middlewares/icons";
//
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaLogin, wait } from "../utils/utils";
//
import { login } from "../services/login";
import useAuth from "../state/context/hooks/useAuth";
//
const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [classNameMsg, setClassNameMsg] = useState(
    "width msg-box display-flex justify-content-center align-items-center"
  );

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchemaLogin),
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    await wait(1000);
    //
    login(data)
      .then((result) => {
        if (result?.data?.isLogged) {
          setIsSending(false);
          setResponseMessage(result?.data?.message);
        }
        const accessToken = result?.data?.accessToken;
        const sys_role = result?.data?.sys_role;
        const to = "/" + sys_role;
        setAuth({ sys_role, accessToken });
        navigate(to, { replace: true });
      })
      .catch((error) => {
        setIsSending(false);
        setClassNameMsg(
          "width msg-box onFailed fade-in display-flex justify-content-center align-items-center"
        );
        if (!error?.response) {
          setResponseMessage("No server response");
        } else {
          setResponseMessage(error?.response?.data?.message);
        }
        const timer = setTimeout(() => {
          setClassNameMsg(
            "width msg-box display-flex justify-content-center align-items-center"
          );
          setResponseMessage("");
        }, 5000);
        return () => clearTimeout(timer);
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Vatel Smart Contract - Login.</title>
        <meta
          name="description"
          content="Get connected and navigate in opportunities."
        />
        <meta
          name="keywords"
          content="École, School, Masomo, Étudier, Éducation, Se connecter, Login, Connexion"
        />
      </Helmet>
      <div className="sign-in">
        <div className="container">
          <div className="head">
            <Link to="/" className="logo link">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="log-app" />
            </Link>
            <h2 className="title t-1">Hey, Sign In !</h2>
            <p>
              Welcome back, get connected and explore opportunities that is
              waiting for you...
            </p>
          </div>
          <form className="body" onSubmit={handleSubmit(onSubmit)}>
            {responseMessage && (
              <div className={classNameMsg}>{responseMessage}</div>
            )}
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                Username ou E-mail ou Telephone
              </label>
              {errors.username && (
                <span className="fade-in">{errors.username.message}</span>
              )}
            </div>
            <div className="input-div">
              <input
                type={showPwd ? "text" : "password"}
                className="input-form"
                autoComplete="none"
                placeholder=" "
                {...register("password")}
              />
              <label htmlFor="password" className="label-form">
                Password
              </label>
              <label htmlFor="password" className="label-icon">
                {showPwd ? (
                  <BsEye
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPwd(!showPwd)}
                  />
                ) : (
                  <BsEyeSlash
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPwd(!showPwd)}
                  />
                )}
              </label>
              {errors.password && (
                <span className="fade-in">{errors.password.message}</span>
              )}
            </div>
            <div className="width display-flex justify-content-flex-end">
              <Link to="" className="link">
                Forgot password ?
              </Link>
            </div>
            <div className="width">
              <button
                type="submit"
                className={isSending ? "width button" : "width button normal"}
              >
                {isSending ? "Connexion..." : "Sign In"}
              </button>
            </div>
            <div className="get_sign-in">
              <span>You don't have account ?</span>
              <Link to="/register" className="btn-sign-in link">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};
export default Login;

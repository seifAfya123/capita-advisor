import React, { useState } from "react";
import MainLogo from "../../components/MainLogo";
import { useNavigate } from "react-router-dom";
import { links } from "../../utils/paths";

const classStyles = {
  page: "flex h-screen items-center justify-center lg:mx-24  ",
  container:
    "lg:min-w-[450px] lg:max-w-[40%] rounded-2xl bg-white p-[8px] lg:p-[3rem] gap-[1rem] flex flex-col items-center mx-[16px] ",
  logo: "w-[80%] my-1 overflow-hidden  ",
  inputContainer: "w-full overflow-hidden p-2 rounded-lg bg-[#F2F5FF]",
  input: "w-full overflow-hidden focus:outline-none focus:ring-0 text-black",
  button: "w-full text-white bg-[#3F69FF] rounded-lg py-2 font-semibold",
  error: "text-red-500 ",
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    const url = "http://localhost:8000/api/admin/login"; //undefind ?????????
    try {
      console.log("here");

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate(links.dashboard_companyRegiseration);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(true);
    }
  };
  return (
    <div className={classStyles.page}>
      <form action="" onSubmit={(e) => handleLogin(e)}>
        <div className={classStyles.container}>
          Welcome back !
          <MainLogo width="w-[8rem]" />
          <div className={classStyles.inputContainer}>
            <input
              type="text"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className={classStyles.input}
            />
          </div>
          <div className={classStyles.inputContainer}>
            <input
              type="text"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className={classStyles.input}
            />
          </div>
          <button className={classStyles.button}>Login</button>
          {error && (
            <p className={classStyles.error}>Invalid email or password</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import MainLogo from "../../components/MainLogo";

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

const handelLogin = () => {
  // post login request
  // If sucess save token to local storage then nav to home
  // If faild show error message
  SetError(true);
};

const onchangeInput = () => {
  SetError(false);
};

const LoginPage = () => {
  const [error, SetError] = useState(false);
  return (
    <div className={classStyles.page}>
      <form action="">
        <div className={classStyles.container}>
          Welcome back !
          <MainLogo width="w-[8rem]"/>
          <div className={classStyles.inputContainer}>
            <input
              type="text"
              placeholder="Enter email"
              onChange={() => {}}
              className={classStyles.input}
            />
          </div>
          <div className={classStyles.inputContainer}>
            <input
              type="text"
              placeholder="Enter password"
              onChange={() => {}}
              className={classStyles.input}
            />
          </div>
          <button
            className={classStyles.button}
            onSubmit={() => SetError(true)}
          >
            Login
          </button>
          {error && (
            <p className={classStyles.error}>Invalid email or password</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

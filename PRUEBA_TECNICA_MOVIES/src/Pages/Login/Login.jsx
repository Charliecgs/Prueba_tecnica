import "./Login.css";

import React from "react";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../Context/userContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const inputText = useRef(null);
  const navigate = useNavigate();
  return (
    <main>
      <div className="loginMain">
        <div className="headerMain">
          <h1>Login</h1>
        </div>
        <div>
          <div className="input">
            <h1>
              Por favor introduce tu nombre para poder acceder a series y pelis
            </h1>
            <input type="text" ref={inputText} defaultValue={user} />
            <button
              onClick={() => {
                setUser(inputText.current.value);
                localStorage.setItem("user", inputText.current.value);
                navigate("/series");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

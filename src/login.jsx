import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import Logo from "./assets/kv-login.jpeg";
import Logo1 from "./assets/kv-logo.png";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

  const [error, onError] = useState(false);
  const[errorPassword, onErrorPassword]=useState(false)
  const userRef=useRef(null)
  const navigate=useNavigate()

  useEffect(()=>{
    userRef.current.focus()
  },[])

  const onHandleUser = (username) => {
    setUserName(username);
    if (username.length > 10) {
      onError("Max length exceeds 10");
    } else onError(false);
  };

  const onHandlePassword = (password) => {
    setPassword(password);
    if (password.length > 10) {
      onErrorPassword("Max length exceeds 10");
    } else onErrorPassword(false);
  };

  const handleLogin=()=>{
      navigate("/employee")
  }


  return (
    <Fragment>
      <main className="main_Login">
        <div className="hero">
          <div className="wrapper-hero">
            <img src={Logo} alt="Login Image" className="login-image" />
          </div>
        </div>

        <div className="login">
          <form className="formLogin" action="/" method="post">
            <img src={Logo1} alt="Logo" className="logo" />
            <TextField
              text={userName}
              label="Username"
              type="text"
              placeholder="Enter username"
              error={error}
              onChange={onHandleUser}
              ref={userRef}
            />
            <TextField
              text={userPassword}
              label="Password"
              type="password"
              placeholder="Enter password"
              error={errorPassword}
              onChange={onHandlePassword}
            />
            <Button
              name="Login"
              type="buttonLogin"
              onClick={handleLogin}


            />
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;

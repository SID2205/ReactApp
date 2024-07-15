import {useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Logout = () => {
  
  const navigate = useNavigate();

  let token = localStorage.getItem("login");
  token=false

  useEffect(() => {
    if (!token || token !== true) {
      navigate("/");
    }
  }, [token, navigate]);

  return <div>Logout</div>;
};

export default Logout;

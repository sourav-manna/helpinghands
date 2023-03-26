import "./Sty.css";
import {useNavigate } from "react-router-dom";
import {useEffect } from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  // const dispath = useDispatch();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [warning, setWarning] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("category")){
      navigate("/mypage");
    }
  });

  const loginnow = () => {
    if (!email) {
      setWarning("Enter Email Id");
    } else if (!pass) {
      setWarning("Enter Password");
    } else {
      const data = { email: email, password: pass };
      axios
        .post("https://floodsupportapi.azurewebsites.net/login", data)
        // .then(() => dispath(authActions.login()))
        .then((response) => {
          if (response.data.status) {
            localStorage.setItem("category", response.data.docs.category);
            localStorage.setItem("name", response.data.docs.name);
            navigate("/mypage");
          } else {
            setWarning("Invalid \n  Email Id or Password");
          }
        });
    }
  };

  return (
    <div className="log">
      <table>
        <tr>
          <h2>Log In</h2>
          
          <pre>{warning}</pre>
        </tr>
        <tr>
          <td>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Email id"
             
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="password"
              value={pass}
              name="password"
              placeholder="Password"
              pattern="[A-Za-z0-9!@#$%^&*()_]{6,20}*;"
              onChange={(e) => setPass(e.target.value)}
              required
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <button type="submit" onClick={loginnow}>
              Submit
            </button>
          </td>
        </tr>
        <tr>
          <td>
          <button type="submit" onClick={() => navigate("/signup")}>
              Signup Instead
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Signin;

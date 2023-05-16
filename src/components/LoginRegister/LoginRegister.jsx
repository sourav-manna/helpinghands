import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import image1 from "./img/img1.svg";
import image2 from "./img/img2.svg";

export const LoginRegister = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    category: [],
  });

  const [categories] = useState([
    "food",
    "medical",
    "rescue",
    "infrastructure",
    "others",
  ]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // signup validation using regex
  const nameRegex =
    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

  // SignUp Handler for animation
  const signupHandler = () => {
    setIsSignIn((prevState) => !prevState);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    var errors = [];
    e.preventDefault();
    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.category === ""
    ) {
      errors[errors.length] = "Please fill all the fields for Registration";
      alert("Please fill all the fields for Registration");
      return;
    }

    // name validation

    if (!nameRegex.test(user.name)) {
      errors[errors.length] = "Please enter a valid name";
      alert("Please enter a valid name");
      return;
    }

    // email validation

    if (!emailRegex.test(user.email)) {
      errors[errors.length] = "Please enter a valid email";
      alert("Please enter a valid email");
      return;
    }

    // password validation

    if (!passwordRegex.test(user.password)) {
      errors[errors.length] =
        "Password must contain atleast 8 characters, 1 letter and 1 number";
      alert(
        "Password must contain atleast 8 characters, 1 letter and 1 number"
      );
      return;
    }
    console.log(errors);
    // if(errors.length > 0){
    //   alert(errors.join(" , "));
    // }

    //if mail id already exists validation

    axios
      .post("https://floodsupportapi.azurewebsites.net/signup", user)
      .then((res) => {
        if (res.data.status) {
          Swal.fire("Great!", "User registered successfully!", "success");
          setUser({ name: "", email: "", password: "", category: "" });
          setTimeout(() => {
            signupHandler();
          }, 1000);
        } else {
          Swal.fire("Oops...", "User already exists!", "error");
          setUser({ name: "", email: "", password: "", category: "" });
          return;
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("category")) {
      navigate("/mypage");
    }
  });

  const onInputChange2 = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // login validation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      //alert("Please fill all the fields");
      Swal.fire("Warning", "Please fill all the fields!", "warning");
      return;
    }

    // check if user exists

    axios
      .post("https://floodsupportapi.azurewebsites.net/login", data)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("category", res.data.docs.category);
          localStorage.setItem("userId", res.data.docs.uid);
          localStorage.setItem("name", res.data.docs.name);
          Swal.fire("Great!", "Login successful!", "success");
          setTimeout(() => {
            navigate("/mypage");
          }, 3000);
        } else {
          Swal.fire("Oops...", "Invalid credentials!", "error");
          setData({ email: "", password: "" });
          return;
        }
      });

    // const res = await axios.get("http://localhost:3003/login");
    // const users = res.data;

    // const userExists = users.find((u) => {
    //   if (u.email === data.email && u.password === data.password) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // if (userExists) {
    //   //alert("Login successful");

    //   setData({ email: "", password: "" });
    //   return;
    // } else {
    //   Swal.fire("Oops...", "Invalid credentials!", "error");
    //   setData({ email: "", password: "" });
    //   return;
    // }
  };

  return (
    <div className={`containerLog  ${isSignIn ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email Id"
                name="email"
                value={data.email}
                onChange={(e) => onInputChange2(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={(e) => onInputChange2(e)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={(e) => onSubmit(e)}
          >
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Username"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-list"></i>
              <select
                name="category"
                value={user.category}
                onChange={(e) => onInputChange(e)}
              >
                <option disabled selected hidden value="">
                  <span className="sel">Select Role</span>
                </option>
                <option value="food">FOOD</option>
                <option value="medical">MEDICAL</option>
                <option value="rescue">RESCUE</option>
                <option value="infrastructure">INFRASTRUCTURE</option>
                <option value="others">OTHERS</option>
              </select>
            </div>

            <input type="submit" class="btn solid" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are you new here?</h3>
            <p>
              Twitter-based flood aid and rescue system enables people to tweet
              their location and assistance needs providing crucial help to
              rescue teams.
            </p>
            <button
              className={`btn transparent`}
              id="sign-up-btn"
              onClick={signupHandler}
            >
              Sign up
            </button>
          </div>
          <img src={image1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Have you registered already?</h3>
            <p>
              Our Twitter-based flood aid system uses real-time mapping to aid
              rescue teams in reaching those in need during floods.
            </p>
            <button
              className={`btn transparent  `}
              id="sign-in-btn"
              onClick={signupHandler}
            >
              Sign in
            </button>
          </div>
          <img src={image2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import {useEffect } from "react";

const categories = ["Food", "Medical", "Rescue", "Infrastructure", "Others"];
const Signup = () => {
  const navigator = useNavigate();
  // const dispath = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [warning, setWarning] = useState();
  const [category, setCategory] = useState();

  useEffect(()=>{
    if(localStorage.getItem("category")){
      navigator("/mypage");
    }
  });

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const signupnow = () => {
    if (name !== undefined && email !== undefined && pass !== undefined && category !== undefined) {
      const data = {
        name: name,
        email: email,
        password: pass,
        category: category
      };
      axios
        .post("https://floodsupportapi.azurewebsites.net/signup", data)
        // .then(() => dispath(authActions.login()))
        .then((res) => {
          if (res.data.status) {
            console.log("user data store");
            navigator("/signin");
          } else {
            setWarning("Email Id \n Already register");
          }
        });
    } else {
      if (!email) {
        setWarning("Enter your Email");
      } else if (!name) {
        setWarning("Enter your Name");
      } else if (!pass) {
        setWarning("Enter Password");
      } else if (!category) {
        setWarning("Choose your category");
      }
    }
  };

  return (
    <div className="log">
      <table>
        <h2>Sign Up</h2>
        <pre>{warning}</pre>
        <tr>
          <td>
            <input
              type="email"
              name="email"
              id="useremail"
              value={email}
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              name="name"
              id="username"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="password"
              name="pass"
              id="userpass"
              value={pass}
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <select
              placeholder="Choose Your Category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option hidden>Choose Your Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <button type="submit" onClick={signupnow}>
              Submit
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button type="submit" onClick={() => navigator("/signin")}>
              Sign in Instead
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Signup;

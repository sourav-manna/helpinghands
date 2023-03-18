import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/signup";
import Signin from "./components/login/signin";
import MyPage from "./components/mypage";
import { Login } from "./components/RegisterLogin/Login";

function App() {
  return (
    <div className="App">
      <div className="body-main">
        <BrowserRouter>
          <Navbar />
          {/* <Routes>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route exact path="/" element={<Signup />} />
          </Routes> */}
          <Login />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

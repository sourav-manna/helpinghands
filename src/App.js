import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/signup";
import Signin from "./components/login/signin";
import MyPage from "./components/mypage";
import { LandingPage } from "./components/Landingpage/LandingPage";


function App() {
  return (
    <div className="App">
      <div className="body-main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/mypage" element={<MyPage />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/" element={<LandingPage/>} />
          </Routes>
          {/* <Login /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

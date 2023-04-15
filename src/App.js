import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/signup";
import Signin from "./components/login/signin";
import MyPage from "./components/mypage";
import { LandingPage } from "./components/Landingpage/LandingPage";
import { LoginRegister } from "./components/LoginRegister/LoginRegister";
import { Unassigned } from "./components/Dashboard/Body Section/Tweets/Unassigned";
import { InProgress } from "./components/Dashboard/Body Section/Tweets/InProgress";
import { Completed } from "./components/Dashboard/Body Section/Tweets/Completed";




function App() {
  return (
    <div className="App">
      <div className="body-main">
        <BrowserRouter>
          <Routes>
        <Route exact path="/" element={<><LandingPage/></>} /> 
            <Route exact path="/mypage" element={<> <MyPage /></>} >
              <Route path="" element={<Unassigned/>}/>
              <Route path="unassigned" element={<Unassigned/>}/>
              <Route path="inprogress" element={<InProgress/>}/>
              <Route path="completed" element={<Completed/>}/>
            </Route>
             <Route exact path="/signin" element={<><LoginRegister /></>} />
          </Routes>
          {/* <Login /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}


            

export default App;

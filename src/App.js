import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/signup';
import Signin from './components/login/signin';
import MyPage from './components/mypage';

function App() {

return(
 <div className="App">
 <div className="body-main">
  <BrowserRouter>
    <Navbar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route exact path="/join" element={<Signup />} />
            <Route path="/" element={<MyPage />} />
          </Routes>
  </BrowserRouter>
</div>
</div>
)}

export default App;

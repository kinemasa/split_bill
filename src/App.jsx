
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Router>
      <Navbar isAuth ={isAuth}/>
      <Routes>
        <Route path="/split_bill/" element={<Home />}></Route>
        <Route path="/split_bill/createpost" element={<CreatePost />}></Route>
        <Route path="/split_bill/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/split_bill/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

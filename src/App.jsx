import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/split_bill/" element={<Home />}></Route>
        <Route path="/split_bill/createpost" element={<CreatePost />}></Route>
        <Route path="/split_bill/login" element={<Login />}></Route>
        <Route path="/split_bill/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

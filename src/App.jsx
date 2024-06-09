import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register.jsx";
import Search from "./Search.jsx"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    console.log("User logged in:", name);
    setUserName(name.firstname);
  };

  return (
    <div id="like">
      <Analytics/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search userName={userName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

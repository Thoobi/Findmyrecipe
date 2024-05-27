import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register.jsx";
import Search from "./Search.jsx"

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (formData) => {
    console.log("User logged in:", formData);
    setUser(formData.username);
  };

  const handleSignup = (formData) => {
    console.log("User signed up:", formData);
    setUser(formData.username);
  };

  // console.log("Welcome to FindmySauce");
  return (
    <div id="like">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onSignup={handleSignup} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

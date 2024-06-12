import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./App.css";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register.jsx";
import Search from "./Search.jsx"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [userName, setUserName] = useState('');

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserName(user.firstname); // Assuming user object has firstname
      }
      else{
        setUserName('Guest')
      }
    }, []);
  
    const handleLogin = (user) => {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setUserName(user.firstname); // Update userName state
    };

  return (
    <div id="like">
      <Analytics/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search userName={userName} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register/Register";
import Login from "./pages/Login";
import Header from "./components/header/Header";
import "react-toastify/dist/ReactToastify.css"
import Dashboard from "./pages/Dashboard";
import First from "./components/form/First";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route  path="/register" element={<Register />} />
          <Route  path="/first" element={<First />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/" element={<Home />} />
          <Route  path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

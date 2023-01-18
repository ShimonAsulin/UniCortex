import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Form from "../../components/form/Form";
import "./register.scss";

const Register = () => {
  return (
    <div dir="rtl" className="register">
      <h1 className="register__header">הירשם כמשתמש חדש</h1>

      <Form />

      <ToastContainer />
    </div>
  );
};

export default Register;

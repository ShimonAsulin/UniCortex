import Input from "../components/ui/input/Input";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const generateError = (err) =>
    toast.error(err, {
      position: "top-center",
    });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  // const handleCheckEmail = () => {
  //   console.log("dfdsf");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          name="email"
          htmlFor="email"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          htmlFor="password"
          handleChange={handleChange}
        />
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to="/first">Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

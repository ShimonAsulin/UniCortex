import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useJwt } from "react-jwt";
import Nav from "../components/dasboard/nav/Nav";
import Cards from "../components/dasboard/cards/Cards";
import "./dashboard.scss"

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [token, setToken] = useState("")
  const { decodedToken } =  useJwt(cookies.jwt);
  
  const [users, setUsers] = useState([]);

  console.log(decodedToken);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:8000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        }
      }
    };
    verifyUser();
    getUser();
  }, [cookies, navigate, removeCookie]);

  const getUser = async () => {
    try {

      const res = await axios.get(
        `http://localhost:8000/users/${decodedToken.id}`
      );
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  // console.log(decodedToken.id);

  console.log(users);
  
  return (
    <div className="dashboard">
      <h1>{users.firstName}</h1>
      <Nav handleClick={logOut}/>
      <div className="dashboard__cards">
      <Cards />

      </div>
    </div>
  );
};

export default Dashboard;

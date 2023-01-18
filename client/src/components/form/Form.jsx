import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "./form.scss";
import Diagnosis from "./Diagnosis";
import PersonalInformation from "./PersonalInformation";
import Preferences from "./Preferences";
// import
const Form = (props) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const generateError = (err) =>
    toast.error(err, {
      position: "top-center",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/register",
        {
          ...formData,
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

  const FormTitles = ["Personal information", "Diagnosis", "Preferences"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInformation formData={formData} handleChange={handleChange} />
      );
    } else if (page === 1) {
      return <Diagnosis />;
    } else {
      return <Preferences />;
    }
  };

  return (
    <div className="form">
      <div className="form__progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form__container">
        <div className="body">
          <form>{PageDisplay()}</form>
        </div>

        <div className="form__footer">
          <div className="form__footer-buttons">
            {page !== 0 ? (
              <button
                className="form__footer__prev form__footer-btn"
                //  disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                <p>&#60;-חזור</p>
              </button>
            ) : (
              ""
            )}

            <button
              className="form__footer__next form__footer-btn"
              onClick={(e) => {
                if (page === FormTitles.length - 1) {
                  handleSubmit(e);
                  navigate("/dashboard");
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "סיום" : "המשך->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

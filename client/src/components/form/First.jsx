import React from "react";
import Input from "../ui/input/Input";
import "./first.scss";
import { Link } from "react-router-dom";
import Footer from "../ui/footer/Footer";

const First = ({ handleChange, formData }) => {
  return (
    <div className="first">
      <h3 className="first__title">שמחים שבחרת בנו לעזור לך במסע שלך</h3>
      <h3 className="first__title-sec">בא נתחיל ליצור את הפרופיל שלך</h3>
      <Input
        type="email"
        name="email"
        text="אנא הזן מייל"
        htmlFor="email"
        // value={formData.email}
        // handleChange={handleChange}
        // formData={formData}
      />
      <Input
        type="text"
        name="password"
        text="אנא הזן סיסמא להתחברות"
        htmlFor="password"
        // value={formData.password}
        // handleChange={handleChange}
      />
      <Link to={'/register'}>
        <button className="first__btn">המשך ליצירת פרופיל</button>
      </Link>
      <Footer />
    </div>
  );
};

export default First;

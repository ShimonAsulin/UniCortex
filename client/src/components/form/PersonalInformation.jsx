import React from "react";
import Input from "../ui/input/Input";
import "./personalInformation.scss";
const PersonalInformation = ({ handleChange, formData }) => {
  return (
    <div className="personal">
      <h2 className="personal__header">א. מידע כללי</h2>
      <Input
        type="text"
        name="firstName"
        text="1. שם מלא"
        htmlFor="firstName"
        value={formData.firstName}
        handleChange={handleChange}
        formData={formData}
      />
      
      <Input
        type="text"
        name="age"
        text="2. גיל הילד"
        htmlFor="age"
        //   handleChange={handleChange}
      />
      <Input
        type="text"
        name="city"
        text="3. עיר מגורים"
        htmlFor="city"
        //   handleChange={handleChange}
      />
      <Input
        type="text"
        name="HMO"
        text="4. קופת חולים"
        htmlFor="HMO"
        //   handleChange={handleChange}
      />
      {/* <Input
        type="text"
        name="family"
        text="5. בני משפחה"
        htmlFor="family"
        //   handleChange={handleChange}
      /> */}
    </div>
  );
};

export default PersonalInformation;

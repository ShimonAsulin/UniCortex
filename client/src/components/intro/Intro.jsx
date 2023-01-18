import React from "react";
import "./Intro.scss";
// import brain from "../../images/brain.png";
import background from "../../images/background.png";

import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div dir="rtl" className="intro" style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: `center`,
      backgroundSize:`cover`,
      
     }}>
      <div className="intro__content">
        <h3 className="intro__content-brand">
          Uni<span className="intro__content-brand-white">Cortex</span>
        </h3>
        <p className="intro__content-paragraph">
          מיליוני שעות חיפוש בשנה הופכים לזמן איכות משפחתי
        </p>
        <Link to="#">
          <p className="intro__content-link">למידע כללי על אוטיזם לחץ כאן</p>
        </Link>
        <div className="intro__content-buttons">
          <Link to={'/first'}>
            <button className="intro__content-buttons-register">צור משתמש</button>
          </Link>
          <Link to={'/login'}>
            <button className="intro__content-buttons-login">התחבר לאזור אישי</button>
          </Link>
        </div>
      </div>
      {/* <div className="intro__img">
        <img src={brain} alt="" />
      </div> */}
    </div>
  );
};

export default Intro;

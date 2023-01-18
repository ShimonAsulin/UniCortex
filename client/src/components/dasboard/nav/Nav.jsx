import "./nav.scss";
import bell from "../../../images/icons/bell.png";
import number from "../../../images/icons/number.png";
import message from "../../../images/icons/message.png";
import logOut from "../../../images/icons/logOut.png";
import close from "../../../images/icons/close.png";

import { useState } from "react";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div dir="rtl" className="dashboard__nav">
      <img src="" alt="" />
      <h1 className="dashboard__nav-welcome">ערב טוב דניאל</h1>
      <div className="dashboard__notfication" onClick={togglePopup}>
        <img src={bell} className="dashboard__nav-notfication" alt="" />
        <img src={number} className="dashboard__nav-number" alt="" />
      </div>

      <img src={message} alt="" />
      <div className="line"></div>
      <h2 className="dashboard__nav-link-active">איזור אישי</h2>
      <h2 className="dashboard__nav-link">מפת משפחה</h2>
      <h2 className="dashboard__nav-link">צ'אט</h2>
      <h2 className="dashboard__nav-link">בלוג</h2>
      <h2 className="dashboard__nav-link">הגדרות פרופיל</h2>
      <button className="dashboard__nav-btn" onClick={props.handleClick}>
        <img src={logOut} alt="" />
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup__form">
            <div className="popup__content">
              <h3 className="popup__content-title">מיצוי זכויות</h3>
              <h4 className="popup__content-subtitle">
                1. החודש צפוי להתקבל מענק על סך 3,000 ש’’ח מביטוח לאומי
              </h4>
              <h4 className="popup__content-subtitle">
                2. ועדה רפואית לנכות נקבעה לתאריך 18.01.23
              </h4>
              <h4 className="popup__content-more">
                לחץ כאן על מנת להשלים את המסמכים הנדרשים
              </h4>
              <button className="popup__content-btn" onClick={togglePopup}>
                <img className="popup__content-img" src={close} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

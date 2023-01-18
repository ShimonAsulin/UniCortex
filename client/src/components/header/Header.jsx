import "./Header.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../images/Tech_Brain_Logo.png";

const Header = () => {
  return (
    <div className="header" dir="rtl">
      <div className="header__right">
        <Link to="/">
          <div className="header__right__logo-div">
            <img className="header__right-logo" src={logo} alt="logo" />

            <h3 className="header__right__logo-text">
              Uni
              <span className="header__right__logo-text-white">Cortex</span>
            </h3>
          </div>
        </Link>
        <div className="header__right__category">
          <ul className="header__right-ul">
            <Link to={"/login"}>
              <li className="header__right-li">אודות</li>
            </Link>
            <Link>
              <li className="header__right-li">מידע כללי</li>
            </Link>
            <Link>
              <li className="header__right-li">צור קשר</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="header__left">
        <input className="header__left-input" type="text" placeholder="חיפוש" />
        <ul className="header__left-ul">
          <Link className="link-last">
            <li className="header__left-li underline">עברית</li>
          </Link>
          <Link>
            <li className="header__left-li">العربية</li>
          </Link>
          <Link>
            <li className="header__left-li">English</li>
          </Link>
          <Link>
            <li className="header__left-li">Русский</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

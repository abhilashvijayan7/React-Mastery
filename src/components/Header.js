import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/about'>About Us</Link> </li>
          <li> <Link to='/contact'>Contact Us</Link> </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                setLoginBtn(loginBtn === "login" ? "logout" : "login")
              }
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

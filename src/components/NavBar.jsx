import logo from "../assets/logo.svg";
import cart_icon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";

import "../scss/NavBar.scss";

import CartPopup from "./CartPopup";
import { useState } from "react";
import { SharedValue } from "./CartPopup";

function NavBar() {
  const [displayCartPopUp, setDisplayCartPopUp] = useState(false);
  const quantity = document.querySelector(".number");
  return (
    <>
      {displayCartPopUp === true && <CartPopup />}
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <img src={logo} alt="logo" className="logo" />
          </li>
          <li className="nav-item">
            Collections
            <hr className="highlight" />
          </li>
          <li className="nav-item">
            Men
            <hr className="highlight" />
          </li>
          <li className="nav-item">
            Women
            <hr className="highlight" />
          </li>
          <li className="nav-item">
            About
            <hr className="highlight" />
          </li>
          <li className="nav-item">
            Contact
            <hr className="highlight" />
          </li>
        </ul>
        <ul className="user">
          <li>
            <img
              src={cart_icon}
              alt="cart icon"
              className="icon"
              onClick={() => {
                setDisplayCartPopUp(!displayCartPopUp);
              }}
            />
            {SharedValue() === true && (
              <p className="product-numbers">{quantity.innerHTML}</p>
            )}
          </li>
          <li>
            <img src={avatar} alt="avatar" className="user-ava" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

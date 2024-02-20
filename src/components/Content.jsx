import minus_icon from "../assets/icon-minus.svg";
import plus_icon from "../assets/icon-plus.svg";
import cart_icon from "../assets/icon-cart.svg";

import "../scss/Content.scss";

import { SetDisplayProduct, SharedValue } from "./CartPopup";

function Content() {
  var quantity = 0;
  return (
    <div className="content-container">
      <h2 className="company-name">sneaker company</h2>
      <h1 className="item-name">Fall Limited Edition Sneaker</h1>
      <p className="description">
        These low-profile sneaker are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they`ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="new-price">
          <h1>$125.00</h1>
          <p className="discount">50%</p>
        </div>
        <p className="old-price">$250.00</p>
      </div>
      <div className="purchasing-funct">
        <div className="quantity">
          <img
            src={minus_icon}
            alt="minus-icon"
            className="icon"
            onClick={() => {
              if (quantity > 0) {
                quantity--;
                document.querySelector(".number").innerHTML = quantity;
              }
            }}
          />
          <p className="number">{quantity}</p>
          <img
            src={plus_icon}
            alt="plus-icon"
            className="icon"
            onClick={() => {
              quantity++;
              document.querySelector(".number").innerHTML = quantity;
            }}
          />
        </div>
        <div
          className="purchase-btn"
          onClick={() => {
            SetDisplayProduct(SharedValue());
          }}
        >
          <img src={cart_icon} alt="cart-icon" className="cart-icon" />
          <p className="btn">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Content;

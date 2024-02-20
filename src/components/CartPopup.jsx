import "../scss/CartPopup.scss";

import trashcan_icon from "../assets/icon-delete.svg";
import img from "../assets/image-product-1-thumbnail.jpg";

var displayProduct = false;

function CartPopup() {
  const quantity = document.querySelector(".number");
  const productPrice = 125;
  const OverallPrice = (productPrice, numbers) => {
    return productPrice * numbers;
  };

  return (
    <div className="cartpopup-container">
      <h1 className="title">Cart</h1>
      <hr className="line" />
      {displayProduct === true ? (
        <>
          <div className="product">
            <img src={img} alt="" className="product-img" />
            <div className="product-description">
              <p className="product-name">{"Fall Limited Edition Sneakers"}</p>
              <p className="total-numbers">
                {`$${productPrice.toFixed(2)} x ${quantity.innerHTML}`}
                <span className="total-money">{` $${OverallPrice(
                  productPrice,
                  quantity.innerHTML
                ).toFixed(2)}`}</span>
              </p>
            </div>
            <img
              src={trashcan_icon}
              alt=""
              className="trashcan-icon"
              onClick={() => {
                SetDisplayProduct(displayProduct);
              }}
            />
          </div>
          <p className="checkout-btn">Checkout</p>
        </>
      ) : (
        <p className="announcement">Your cart is empty</p>
      )}
    </div>
  );
}

export default CartPopup;

export function SetDisplayProduct(currentState) {
  displayProduct = !currentState;
}

export function SharedValue() {
  return displayProduct;
}

import main_image from "../assets/image-product-1.jpg";
import first_sub_image from "../assets/image-product-1-thumbnail.jpg";
import second_sub_image from "../assets/image-product-2-thumbnail.jpg";
import third_sub_image from "../assets/image-product-3-thumbnail.jpg";
import forth_sub_image from "../assets/image-product-4-thumbnail.jpg";

import "../scss/DisplayImage.scss";

import GalleryPopup from "../components/GalleryPopup";
import { useState } from "react";

function DisplayImage() {
  const [popUp, setPopUp] = useState(false);

  const changPopUpState = () => {
    setPopUp(false);
  };
  return (
    <>
      {popUp === true && <GalleryPopup closePopUp={changPopUpState} />}
      <div className="img-container">
        <img
          src={main_image}
          alt=""
          className="main-img"
          onClick={() => {
            setPopUp(true);
          }}
        />
        <ul className="sub-img-list">
          <li className="selected-container">
            <img
              src={first_sub_image}
              alt=""
              className="img-item selected-item"
            />
          </li>
          <li>
            <img src={second_sub_image} alt="" className="img-item" />
          </li>
          <li>
            <img src={third_sub_image} alt="" className="img-item" />
          </li>
          <li>
            <img src={forth_sub_image} alt="" className="img-item" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default DisplayImage;

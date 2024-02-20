import first_main_image from "../assets/image-product-1.jpg";
import second_main_image from "../assets/image-product-2.jpg";
import third_main_image from "../assets/image-product-3.jpg";
import fourth_main_image from "../assets/image-product-4.jpg";

import first_sub_image from "../assets/image-product-1-thumbnail.jpg";
import second_sub_image from "../assets/image-product-2-thumbnail.jpg";
import third_sub_image from "../assets/image-product-3-thumbnail.jpg";
import fourth_sub_image from "../assets/image-product-4-thumbnail.jpg";
import close_icon from "../assets/icon-close.svg";
import next_icon from "../assets/icon-next.svg";
import previous_icon from "../assets/icon-previous.svg";

import "../scss/GalleryPopup.scss";
// import { useState } from "react";
// import PropTypes from "prop-types";

function GalleryPopup({ closePopUp }) {
  const images = [
    first_main_image,
    second_main_image,
    third_main_image,
    fourth_main_image,
  ];

  const thumbnails = document.getElementsByClassName("img-popup-item");

  var index = 0;
  var currentIndex;

  return (
    <div className="background">
      <div className="gallery-container">
        <img
          src={close_icon}
          alt=""
          className="icon-interaction close-icon"
          onClick={closePopUp}
        />

        <div className="main-img-container">
          <img
            src={previous_icon}
            alt=""
            className="icon-interaction previous-icon icon"
            onClick={() => {
              currentIndex = index;
              index = PreviousImageIndex(index, images.length);
              ChangeMainImage(index, images);
              ChangeThumbnail(index, currentIndex, thumbnails);
            }}
          />
          <img src={first_main_image} alt="" className="main-img" />
          <img
            src={next_icon}
            alt=""
            className="icon-interaction next-icon icon"
            onClick={() => {
              currentIndex = index;
              index = NextImageIndex(index, images.length);
              ChangeMainImage(index, images);
              ChangeThumbnail(index, currentIndex, thumbnails);
            }}
          />
        </div>

        <ul className="sub-img-gallery">
          <li className="selected-holder holder">
            <img
              src={first_sub_image}
              alt=""
              className="img-popup-item selected-img"
              id="1"
            />
          </li>
          <li className="holder">
            <img src={second_sub_image} alt="" className="img-popup-item" />
          </li>
          <li className="holder">
            <img src={third_sub_image} alt="" className="img-popup-item" />
          </li>
          <li className="holder">
            <img src={fourth_sub_image} alt="" className="img-popup-item" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GalleryPopup;

function ChangeMainImage(index, images) {
  const mainImage = document.querySelector(".main-img");
  mainImage.src = images[index];
}

function ChangeThumbnail(nextIndex, currentIndex, images) {
  images[nextIndex].classList.add("selected-img");
  images[nextIndex].parentNode.classList.add("selected-holder");

  images[currentIndex].classList.remove("selected-img");
  images[currentIndex].parentNode.classList.remove("selected-holder");
}

function NextImageIndex(index, size) {
  if (index === size - 1) {
    return (index = 0);
  }

  index++;
  return index;
}

function PreviousImageIndex(index, size) {
  if (index === 0) {
    return (index = size - 1);
  }

  index--;
  return index;
}

import React from "react";
import "./Fourimages.css";

export default function Fourimages() {
  return (
    <section className="four__images">
      <div className=" img_div">
        <img
          className="four_img image__pc  "
          src="images/desktop/image-gallery-milkbottles.jpg"
          alt=""
        />
        <img
          className="four_img image__mobile   "
          src="images/mobile/image-gallery-milkbottles.jpg"
          alt=""
        />
      </div>
      <div className=" img_div ">
        <img
          className="four_img image__pc"
          src="images/desktop/image-gallery-orange.jpg"
          alt=""
        />
        <img
          className="four_img image__mobile  "
          src="images/mobile/image-gallery-orange.jpg"
          alt=""
        />
      </div>
      <div className=" img_div">
        <img
          className="four_img image__pc"
          src="images/desktop/image-gallery-cone.jpg"
          alt=""
        />
        <img
          className="four_img image__mobile  "
          src="images/mobile/image-gallery-cone.jpg"
          alt=""
        />
      </div>
      <div className=" img_div">
        <img
          className="four_img image__pc  "
          src="images/desktop/image-gallery-sugarcubes.jpg"
          alt=""
        />
        <img
          className="four_img image__mobile "
          src="images/mobile/image-gallery-sugar-cubes.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

import React from "react";
import "./Fourimages.css";

export default function Fourimages() {
  return (
    <section className="four__images">
      <div className=" img_div">
        <img
          className="four_img image__pc  "
          src="images/desktop/image-gallery-milkbottles.jpg"
          alt="image-gallery-milkbottles"
        />
        <img
          className="four_img image__mobile   "
          src="images/mobile/image-gallery-milkbottles.jpg"
          alt="image-gallery-milkbottles"
        />
      </div>
      <div className=" img_div ">
        <img
          className="four_img image__pc"
          src="images/desktop/image-gallery-orange.jpg"
          alt="image-gallery-orange"
        />
        <img
          className="four_img image__mobile  "
          src="images/mobile/image-gallery-orange.jpg"
          alt="image-gallery-orange"
        />
      </div>
      <div className=" img_div">
        <img
          className="four_img image__pc"
          src="images/desktop/image-gallery-cone.jpg"
          alt="image-gallery-cone"
        />
        <img
          className="four_img image__mobile  "
          src="images/mobile/image-gallery-cone.jpg"
          alt="image-gallery-cone"
        />
      </div>
      <div className=" img_div">
        <img
          className="four_img image__pc  "
          src="images/desktop/image-gallery-sugarcubes.jpg"
          alt="image-gallery-sugarcubes"
        />
        <img
          className="four_img image__mobile "
          src="images/mobile/image-gallery-sugar-cubes.jpg"
          alt="image-gallery-sugarcubes"
        />
      </div>
    </section>
  );
}

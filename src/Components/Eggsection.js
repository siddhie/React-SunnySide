import React from "react";
import "./Eggsection.css";

export default function Eggsection() {
  return (
    <section className="section__egg  section__egg_wrap" id="about">
      <div className="section_two_part_one white_section">
        <h1 className="heading__style">Transform your brand</h1>
        <p className="para__style">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <p className="learn__more learn__more__egg">Learn more</p>
      </div>
      <div className="section_two_part_two">
        <img
          className="egg_yellow_img image__pc"
          src="images/desktop/image-transform.jpg"
          alt=""
        />
        <img
          className="egg_yellow_img image__mobile"
          src="images/mobile/image-transform.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

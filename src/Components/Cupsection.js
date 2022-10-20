import React from "react";
import "./Eggsection.css";

export default function Cupsection() {
  return (
    <section className="section__egg section__cup">
      <div className="section_two_part_two">
        <img
          className="egg_yellow_img  image__pc"
          src="images/desktop/image-stand-out.jpg"
          alt=""
        />
        <img
          className="egg_yellow_img  image__mobile"
          src="images/mobile/image-stand-out.jpg"
          alt=""
        />
      </div>
      <div className="section_two_part_one white_section">
        <h1 className="heading__style">Stand out to the right audience</h1>
        <p className="para__style">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <p className="learn__more">Learn more</p>
      </div>
    </section>
  );
}

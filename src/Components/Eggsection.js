import React from "react";
import "./Eggsection.css";

export default function Eggsection() {
  return (
    <section class="section__egg">
      <div class="section_two_part_one white_section">
        <h1 class="heading__style">Transform your brand</h1>
        <p class="para__style">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <p class="learn__more">Learn more</p>
      </div>
      <div class="section_two_part_two">
        <img
          class="egg_yellow_img"
          src="images/desktop/image-transform.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

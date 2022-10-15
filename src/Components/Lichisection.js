import React from "react";
import "./Lichisection.css";

export default function Cupsection() {
  return (
    <section className="lichi_orange__section">
      <div id="lichibox" className="lichi__box">
        <div className="graphic__design same__content_design">
          <h1 className="heading__graphic_design">Graphic design</h1>
          <p className="para">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div id="orangebox" className="orange__box">
        <div className="orange__design same__content_design">
          <h1 className="heading__photography">Photography</h1>
          <p className="para">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}

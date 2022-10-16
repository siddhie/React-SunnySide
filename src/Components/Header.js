import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="main__heading">We are creatives</h1>
      <img
        src="images/desktop/image-header.jpg"
        alt="header_backgroundImage"
        className="header__image image__pc"
      />
      <img
        src="images/mobile/image-header.jpg"
        alt="header_backgroundImage"
        className="header__image image__mobile lemon__height"
      />
      {/* <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="#FFF"
          stroke-width="6"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg> */}
    </div>
  );
}

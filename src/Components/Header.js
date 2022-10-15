import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="main__heading">We are creatives</h1>
      <img
        src="images/desktop/image-header.jpg"
        alt="header_backgroundImage"
        className="header__image"
      />
    </div>
  );
}

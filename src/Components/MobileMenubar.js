import React from "react";
import "./MobileMenubar.css";

export default function MobileMenubar() {
  return (
    <div className="mobile__menubar">
      <li>
        <a className="nav__links__mobile">About</a>
      </li>
      <li>
        <a className="nav__links__mobile">Services</a>
      </li>
      <li>
        <a className="nav__links__mobile">Projects</a>
      </li>
      <li>
        <a className="nav__links__mobile">CONTACT</a>
      </li>
    </div>
  );
}

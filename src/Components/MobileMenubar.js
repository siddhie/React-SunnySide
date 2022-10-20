import React from "react";
import "./MobileMenubar.css";

export default function MobileMenubar() {
  return (
    <div className="mobile__menubar">
      <li>
        <a className="nav__links__mobile" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav__links__mobile" href="#services">
          Services
        </a>
      </li>
      <li>
        <a className="nav__links__mobile" href="#testimonial__section">
          Projects
        </a>
      </li>
      <li>
        <a className="nav__links__mobile btn__contact_mobile" href="#footer">
          CONTACT
        </a>
      </li>
    </div>
  );
}

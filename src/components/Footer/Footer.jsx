import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-txt">
        {" "}
        <p>© 2024 Nepathya, All Rights Reserved.</p>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ul>
      </div>
    </div>
  );
}

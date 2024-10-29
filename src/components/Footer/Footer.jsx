import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-txt">
        <p>© 2024 Nepathya, All Rights Reserved.</p>
      </div>
      <div className="design-text">
        Designed and  Developed by Nepathians
      </div>
      <div className="footer-links">
        <ul>
          <li onClick={() => openLink("https://www.facebook.com/nepathyacollege")}>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li onClick={() => openLink("https://www.instagram.com/nepathyacollege")}>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li onClick={() => openLink("https://www.facebook.com/nepathyacollege")}>
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li onClick={() => openLink("https://www.youtube.com/@nepathyacollege6278")}>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ul>
      </div>
    </div>
  );
}

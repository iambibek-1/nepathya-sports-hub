import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Experience Excellence at <span>NEPATHYA SPORTS HUB</span>
        </h1>
        <p>Every goal, every victory, every moment—make it count with us.</p>
        <button className="btn">
          Explore more
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./About.css";
import about_img from "../../assets/aboutimg.jpg";
import play_btn from "../../assets/playbutton.png";

import hub_video from "../../assets/sport-video.mp4";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="aboutimage" className="about-img" />
        <img src={play_btn} alt="playbtnimage" className="play-btn" />
      </div>
      <div className="about-right">
        <h3>
          About Us<span>_</span>
        </h3>
        <h2> Join us, and make your athletic journey unforgettable.</h2>
        <p>
          NEPATHYA SPORTS HUB is the heart of sports excellence at Nepathya
          College. Founded with a mission to nurture talent and inspire passion
          for athletics, our hub is dedicated to empowering students to reach
          new heights in sports and personal development. We believe in the
          values of discipline, resilience, and teamwork, fostering an
          environment where each student can thrive both on and off the field.
        </p>
        <p>
          From intramural leagues to inter-college championships, we offer
          students opportunities to showcase their skills and challenge
          themselves. Our wide range of sports programs and facilities are
          designed to cater to all interests and abilities, allowing every
          student to discover their strengths and set new personal records.
        </p>
        <p>
          At NEPATHYA SPORTS HUB, we take pride in our mission to build
          confident, capable individuals ready to make an impact. Our commitment
          extends beyond physical training; we aim to cultivate leadership,
          integrity, and a strong sense of community. Join us on this journey of
          self-discovery and excellence—there’s a place for everyone here.
        </p>
      </div>
    </div>
  );
}

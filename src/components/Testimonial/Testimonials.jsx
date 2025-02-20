import React, { useRef } from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import user_1 from "../../assets/user1.png";

export default function Testimonials() {
  //   const slider = useRef();
  //   let tx = 0;

  // const slideForward = () => {
  //   if(tx> -50){
  //       tx -= 25;
  //   }
  //   slider.current.style.transform =  `translateX(${tx}%)`;
  //   if(tx === -50){
  //       tx =25;
  //   }
  // };
  // const slideBackward = () => {
  //   if(tx < 0){
  //       tx += 25;
  //   }
  //   slider.current.style.transform =  `translateX(${tx}%)`;
  //   if(tx === 0){
  //       tx = -50;
  //   }
  // };
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    } else {
      tx = 0; // Reset back to the start when reaching the end
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } else {
      tx = -50; // Reset back to the end when reaching the start
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonails">
      <FontAwesomeIcon
        className="back-btn"
        icon={faChevronLeft}
        onClick={slideBackward}
      />
      <FontAwesomeIcon
        className="next-btn"
        icon={faChevronRight}
        onClick={slideForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <div>
                  <h3>John Doe</h3>
                  <span>BSc.CSIT,Batch 2079</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur obcaecati vitae excepturi eligendi, quod maxime a
                iusto officiis accusamus? Alias ullam animi accusantium qui
                quibusdam harum suscipit deserunt quae sunt?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <div>
                  <h3>Bebas Pandey</h3>
                  <span>BSc.CSIT,Batch 2079</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur obcaecati vitae excepturi eligendi, quod maxime a
                iusto officiis accusamus? Alias ullam animi accusantium qui
                quibusdam harum suscipit deserunt quae sunt?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <div>
                  <h3>Ez-snippet</h3>
                  <span>BSc.CSIT,Batch 2079</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur obcaecati vitae excepturi eligendi, quod maxime a
                iusto officiis accusamus? Alias ullam animi accusantium qui
                quibusdam harum suscipit deserunt quae sunt?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <div>
                  <h3>Carry Minati</h3>
                  <span>BSc.CSIT,Batch 2079</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur obcaecati vitae excepturi eligendi, quod maxime a
                iusto officiis accusamus? Alias ullam animi accusantium qui
                quibusdam harum suscipit deserunt quae sunt?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

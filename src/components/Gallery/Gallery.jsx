import React from "react";
import "./Gallery.css";
// import { Link } from 'react-scroll';
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img_1 from '../../assets/gallery1.jpg'
import img_2 from '../../assets/gallery2.jpg'
import img_3 from '../../assets/gallery3.jpg'
import img_4 from '../../assets/gallery4.jpg'


export default function Gallery() {
  // const navigate = useNavigate(); // Initialize navigation

  // const handleSeeMore = () => {
  //   window.open("/loading","_blank"); // Navigate to the Loading component
  // };
  return (
    <div className="glimpse" name='gallery'>
      <div className="gallery">
        <img src={img_1} alt="" />
        <img src={img_2} alt="" />
        <img src={img_3} alt="" />
        <img src={img_4} alt="" />
      </div>
      <button className="btn">See more here
      <FontAwesomeIcon className="arrow" icon={faArrowRight} />

      </button>
    </div>
  );
}

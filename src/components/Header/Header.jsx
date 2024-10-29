import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from 'react-scroll';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faBars} from  '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    let [sticky,setSticky]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY > 50 ? setSticky(true): setSticky(false);
        })
    },[]);

    let [showMenu,setshowMenu]=useState(false);
    let toggleMenu = () =>{
       setshowMenu(!showMenu);
    }
  return (
    <div className={`navbar container ${sticky ? 'dark-nav':''}`}>
      <img src={logo} alt="logo" className="logo" />
      <span>NEPATHYA SPORTS HUB</span>
    
      <ul className={showMenu ? '' : 'show-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='members' smooth={true} offset={-200} duration={500}>Members</Link></li>
        <li><Link to='testimonails' smooth={true} offset={-425} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className="btn">Contact Us</Link></li>
      </ul>
      {/* <FontAwesomeIcon icon={faBars} className="menu-icon" onClick = {toggleMenu} /> */}
    </div>
  );
}

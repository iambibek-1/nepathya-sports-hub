import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

export default function Navbar() {
    let [sticky,setSticky]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY > 50 ? setSticky(true): setSticky(false);
        })
    },[]);
  return (
    <div className={`navbar container ${sticky ? 'dark-nav':''}`}>
      <img src={logo} alt="logo" className="logo" />
      <span>NEPATHYA SPORTS HUB</span>
    
      <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>About Us</li>
        <li>Members</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </div>
  );
}

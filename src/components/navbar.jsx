import React, { useState, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("");
  const [filter, setfilter] = useState("invert(0)")

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setBgColor("white");
        setfilter("invert(1)")
        document.querySelectorAll(".navbar-li").forEach(e=>{
          e.style.color="black"
        })
      } else {
        setBgColor("");
        setfilter("invert(0)")
        document.querySelectorAll(".navbar-li").forEach(e=>{
          e.style.color=""
        })

      }
    });
    
  }, []);

  return (
    <nav style={{ backgroundColor: bgColor }}>
      <div className="name">
        <img style={{filter:filter}} className='piclogo' src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="other">
        <ul>
          
          <li className="navbar-li">HOME</li>
          <li className="navbar-li">ABOUT</li>
          <li className="navbar-li">RESUME</li>
          <li className="navbar-li">PROJECTS</li>
          <li className="navbar-li">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

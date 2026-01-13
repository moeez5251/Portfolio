import React, { useState, useEffect } from 'react';
import "./Navbar.css";
const Navbar = () => {
  const [bgColor, setBgColor] = useState("");
  const [filter, setfilter] = useState("invert(0)")
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setBgColor("white");
        setfilter("invert(1)");
        document.querySelectorAll(".navbar-li").forEach((e) => {
          e.style.color = "black";
        });
      } else {
        setBgColor("");
        setfilter("invert(0)");
        document.querySelectorAll(".navbar-li").forEach((e) => {
          e.style.color = "";
        });
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 750px)");

    if (mediaQuery.matches) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav style={{ backgroundColor: bgColor }}>

      <div className="name">
        <img style={{ filter: filter }} className='piclogo' src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="logo" />
      </div>
      <div className="other">
        <ul>

          <li ><a className="navbar-li" href="#home">HOME</a></li>
          <li ><a className="navbar-li" href="#about">ABOUT</a></li>
          <li ><a className="navbar-li" href="#resume">RESUME</a></li>
          <li ><a className="navbar-li" href="#swiper">PROJECTS</a></li>
          <li ><a className="navbar-li" href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

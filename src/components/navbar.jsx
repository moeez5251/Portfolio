import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useModeAnimation, ThemeAnimationType } from "react-theme-switch-animation";
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { ref, isDarkMode, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE,
    duration: 800
  });

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    const mediaQuery = window.matchMedia("(min-width: 750px)");

    if (mediaQuery.matches) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="name">
        <img
          className="piclogo"
          src={`${import.meta.env.BASE_URL}assets/logo.webp`}
          alt="logo"
        />
      </div>

      <div className="other">
        <ul>
          <li><a className="navbar-li" href="#home">HOME</a></li>
          <li><a className="navbar-li" href="#about">ABOUT</a></li>
          <li><a className="navbar-li" href="#resume">RESUME</a></li>
          <li><a className="navbar-li" href="#swiper">PROJECTS</a></li>
          <li><a className="navbar-li" href="#contact">CONTACT</a></li>
        </ul>
      </div>

      <Expand ref={ref} className="themeToggle theme-toggle-btn" toggled={isDarkMode} onToggle={toggleSwitchTheme} />
    </nav>
  );
};

export default Navbar;
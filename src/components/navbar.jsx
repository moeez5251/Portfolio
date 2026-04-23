import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useModeAnimation, ThemeAnimationType } from "react-theme-switch-animation";

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

      <label
        htmlFor="themeToggle"
        title={isDarkMode ? "Light Mode" : "Dark Mode"}
        className="themeToggle st-sunMoonThemeToggleBtn theme-toggle-btn"
      >
        <input
          ref={ref}
          checked={isDarkMode}
          onChange={toggleSwitchTheme}
          type="checkbox"
          id="themeToggle"
          className="themeToggleInput"
        />

        <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
          <mask id="moon-mask">
            <rect width="20" height="20" fill="white" />
            <circle cx="11" cy="3" r="8" fill="black" />
          </mask>

          <circle
            className="sunMoon"
            cx="10"
            cy="10"
            r="8"
            mask="url(#moon-mask)"
          />

          <g>
            <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5" />
            <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5" />
            <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5" />
          </g>
        </svg>
      </label>
    </nav>
  );
};

export default Navbar;
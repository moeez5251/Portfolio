import React, { useState, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = (e) => {
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="name">
        <img className='piclogo' src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="logo" />
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
        title={isDarkMode ? "Light Mode" : "Dark Mode"}
        htmlFor="themeToggle"
        className="themeToggle st-sunMoonThemeToggleBtn theme-toggle-btn"
        type="checkbox"
      >
        <input checked={isDarkMode} onChange={toggleTheme} type="checkbox" id="themeToggle" className="themeToggleInput" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="white"
          stroke="none"
        >
          <mask id="moon-mask">
            <rect x="0" y="0" width="20" height="20" fill="white"></rect>
            <circle cx="11" cy="3" r="8" fill="black"></circle>
          </mask>
          <circle
            className="sunMoon"
            cx="10"
            cy="10"
            r="8"
            mask="url(#moon-mask)"
          ></circle>
          <g>
            <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
            <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
            <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
            <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
            <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
            <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
          </g>
        </svg>
      </label>

    </nav>
  );
};

export default Navbar;

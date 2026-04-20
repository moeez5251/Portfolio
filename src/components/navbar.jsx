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
      <label className="switch theme-toggle-btn">
        <input checked={isDarkMode}  onChange={toggleTheme} type="checkbox" />
        <span className="slider"></span>
      </label>
    </nav>
  );
};

export default Navbar;

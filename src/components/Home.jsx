import Lenis from '@studio-freight/lenis';
import React, { useEffect, useState, useRef } from "react";
import CustomCursor from "./cursor"
import Navbar from "./navbar";
import Me from "./me";
import About from "./about";
import Experience from "./experience";
import Qualification from "./qualification"
import Swiper_animation from "./swiper";
import Contact from "./contact";
import { motion, useInView } from "motion/react"
import { Helmet } from "react-helmet-async";
import "../App.css"
function Home() {
  const [html, sethtml] = useState("0%")
  const [css, setcss] = useState("0%")
  const [js, setjs] = useState("0%")
  const [node, setnode] = useState("0%")
  const [react, setreact] = useState("0%")
  const [video, setvideo] = useState("0%")
  const [first, setfirst] = useState("white")
  const [second, setsecond] = useState("#cb2d3e")
  const [truesstate, settruesstate] = useState(true)
  const [office, setoffice] = useState("0%")
  const [opa, setopacity] = useState({
    opacity: 0,
    pointerevents: "none"
  })
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const handleAnimationFrame = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleAnimationFrame);
    };

    requestAnimationFrame(handleAnimationFrame);
    window.lenis = lenis;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'))
      });
    })

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {

      document.querySelector(".loader").style.top = "-100%"
    }, 2000);

    const handleScroll = () => {
      if (isInView) {

        sethtml("90%")
        setcss("85%")
        setjs("90%")
        setnode("80%")
        setreact("85%")
        setvideo("85%")
        setoffice("100%")
      }
      else {
        sethtml("0%")
        setcss("0%")
        setjs("0%")
        setnode("0%")
        setreact("0%")
        setvideo("0%")
        setoffice("0%")
      }
      if (window.scrollY >= 400) {
        setopacity({
          opacity: 1,
          pointerevents: "all"
        });
      } else {
        setopacity({
          opacity: 0,
          pointerevents: "none"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  const handlefirstclick = () => {
    document.querySelector(".red-span").style.left = "0%";
    setfirst("white");
    setsecond("var(--theme-red)");
    settruesstate(true)
  }
  const handlesecondclick = () => {
    document.querySelector(".red-span").style.left = "50%";
    setfirst("var(--theme-red)");
    setsecond("white");
    settruesstate(false)
  }

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  const toggleTheme = () => {
    const isDark = document.body.classList.contains('dark');
    if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>XHEIKH-MOEEZ PORTFOLIO</title>

        <meta
          name="description"
          content="Explore the portfolio of Xheikh Moeez — a skilled full-stack developer specializing in MERN, React, Next.js, Node.js, Python, and modern API engineering. Discover professional GitHub projects, scalable web applications, database-driven systems, and high-performance solutions built with clean, efficient, and industry-standard development practices."
        />
        <meta
          name="keywords"
          content="Xheikh Moeez, Portfolio, Web Developer, MERN Developer, React Developer, GitHub Projects, Open Source, moeez5251, xheikh-moeez github, Programming, Software Developer"
        />
        <meta name="author" content="Xheikh Moeez" />

        <meta name="github:username" content="moeez5251" />
        <meta name="github:profile" content="https://github.com/moeez5251" />
        <meta
          name="github:projects"
          content="Open-source MERN projects, full-stack apps, Next.js apps, React projects"
        />

        <meta name="google-site-verification" content="y1W4WYO2lPO5plRdzuL67Nlrx6ctaPY4EVJiaMzcvz0" />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${import.meta.env.BASE_URL}favicon.ico`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={`${import.meta.env.BASE_URL}favicon-48.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${import.meta.env.BASE_URL}favicon-96.png`}
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Xheikh Moeez",
            "url": "https://moeez5251.github.io/Portfolio/",
            "image": "https://moeez5251.github.io/Portfolio/assets/Me-11.webp",
            "jobTitle": "MERN Web Developer",
            "sameAs": [
              "https://github.com/moeez5251",
              "https://www.linkedin.com/in/moeez-sheikh/",
              "https://moeez5251.github.io/Portfolio/"
            ],
            "description": "Full Stack Developer specializing in MERN, React, Next.js, Node.js, APIs, and high-performance GitHub projects.",
            "skills": [
              "MERN Stack",
              "React",
              "Next.js",
              "Node.js",
              "JavaScript",
              "Python",
              "API Development",
              "SQL/NoSQL",
              "Frontend Development",
              "Backend Development"
            ]
          }
        `}
        </script>
      </Helmet>

      <div className="loader">
        <div className="spinner">
          <div className="inner">
          </div>
        </div>
      </div>
      <CustomCursor />
      <Navbar />
      <Me />

      <div className="menubar bottom ">
        <div className='menu-div'>
          <div className="img">
            <img className="menu-img" src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="logo" />
          </div>

          <button onClick={toggleTheme} style={{ color: "white", padding: 0 }} aria-label="Toggle Dark Mode">
            {isDarkMode ? (

              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"  data-src="https://cdn.hugeicons.com/icons/sun-01-solid-sharp.svg?v=1.0.0" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="#ffffff">
                <path d="M11.9991 17.75C15.1747 17.75 17.7491 15.1756 17.7491 12C17.7491 8.82436 15.1747 6.25 11.9991 6.25C8.82345 6.25 6.24908 8.82436 6.24908 12C6.24908 15.1756 8.82345 17.75 11.9991 17.75Z" fill="#ffffff" />
                <path d="M11.999 19.75C12.5513 19.75 12.999 20.1977 12.999 20.75C12.999 21.3023 12.5513 21.75 11.999 21.75C11.4468 21.7499 10.999 21.3022 10.999 20.75C10.999 20.1978 11.4468 19.7501 11.999 19.75ZM17.5557 17.4111C17.9222 17.1122 18.4518 17.1122 18.8184 17.4111L18.8945 17.4805L18.9629 17.5557C19.2834 17.9484 19.2606 18.5284 18.8945 18.8945C18.504 19.2851 17.87 19.2851 17.4795 18.8945C17.0892 18.5041 17.0894 17.871 17.4795 17.4805L17.5557 17.4111ZM5.18066 17.4111C5.54732 17.1118 6.07666 17.1119 6.44336 17.4111L6.51953 17.4795L6.58789 17.5557C6.90807 17.9483 6.88538 18.5275 6.51953 18.8936C6.12905 19.284 5.496 19.2839 5.10547 18.8936C4.71494 18.503 4.71494 17.87 5.10547 17.4795L5.18066 17.4111ZM21.75 12C21.75 12.5523 21.3023 13 20.75 13C20.1977 13 19.75 12.5523 19.75 12C19.75 11.4477 20.1977 11 20.75 11C21.3023 11 21.75 11.4477 21.75 12ZM5.10547 5.10547C5.49592 4.7151 6.12901 4.71521 6.51953 5.10547C6.91003 5.49597 6.90999 6.129 6.51953 6.51953C6.12901 6.91005 5.49599 6.91005 5.10547 6.51953C4.71519 6.12899 4.71503 5.49591 5.10547 5.10547ZM17.4795 5.10547C17.8699 4.71501 18.503 4.71514 18.8936 5.10547C19.2841 5.49599 19.2841 6.12901 18.8936 6.51953C18.503 6.90996 17.87 6.91002 17.4795 6.51953C17.0892 6.12902 17.0891 5.49594 17.4795 5.10547ZM12.1016 2.25488C12.606 2.30591 13 2.7321 13 3.25C13 3.80218 12.5521 4.24983 12 4.25C11.4823 4.25 11.0562 3.85665 11.0049 3.35254L11 3.25L11.0049 3.14746C11.0562 2.64335 11.4823 2.25 12 2.25L12.1016 2.25488ZM4.25 12C4.25 12.5523 3.80228 13 3.25 13C2.69771 13 2.25 12.5523 2.25 12C2.25 11.4477 2.69772 11 3.25 11C3.80228 11 4.25 11.4477 4.25 12Z" fill="#ffffff" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"  data-src="https://cdn.hugeicons.com/icons/moon-02-solid-sharp.svg?v=1.0.0" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="#ffffff">
                <path d="M22 14.1878C20.7372 14.8621 19.2949 15.2443 17.7633 15.2443C12.7885 15.2443 8.75571 11.2115 8.75571 6.23669C8.75571 4.70512 9.13795 3.26282 9.81225 2C5.33437 3.04945 2 7.06856 2 11.8664C2 17.4631 6.53695 22 12.1336 22C16.9314 22 20.9505 18.6656 22 14.1878Z" fill="#ffffff" />
              </svg>
            )}
          </button>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>

            <span onClick={() => document.querySelector(".menubar").classList.toggle("bottom")} style={{ color: "white", fontSize: "27px" }} className="material-symbols-outlined">
              widgets
            </span>
          </div>
        </div>
        <div className="menu-items">
          <li ><a href="#home">HOME</a></li>
          <li ><a href="#about">ABOUT</a></li>
          <li ><a href="#resume">RESUME</a></li>
          <li ><a href="#swiper">PROJECTS</a></li>
          <li ><a href="#contact">CONTACT</a></li>
        </div>
      </div>
      <section
        id="about" className="about-section" >
        <motion.div
          initial={{
            opacity: 0,

            x: -50
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
          className="about">
          <h2 className="about-head">About</h2>
          <div className="about-tail">ABOUT</div>
        </motion.div>
        <About />
      </section>
      <section id="skills" className="skills-section" >
        <motion.div initial={{
          opacity: 0,

          x: -50
        }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }} className="about">
          <h2 className="about-head skill-head">Skills.</h2>
          <div className="about-tail skill-tail">SKILL</div>
        </motion.div>
        <div className="skill">

          <div className="left-skill">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="skill-para">
              I'm a professional web designer, My motive is to build a best web design with my all years of experience and efforts.
            </div>
            <div ref={ref} className="width-skills">
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{html}</span>
                <span className="sk-span">HTML</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: html }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{css}</span>
                <span className="sk-span">CSS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: css }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{js}</span>
                <span className="sk-span">JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: js }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{react}</span>
                <span className="sk-span">React JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: react }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{video}</span>
                <span className="sk-span">Next JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: video }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{node}</span>
                <span className="sk-span">Node JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: node }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{node}</span>
                <span className="sk-span">Express JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: node }} className="red-progress"></span>
                </div>
              </div>

              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{react}</span>
                <span className="sk-span">Python</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: react }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{react}</span>
                <span className="sk-span">MS SQL , Mongo DB</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: react }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{js}</span>
                <span className="sk-span">C++</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: js }} className="red-progress"></span>
                </div>
              </div>

              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{office}</span>
                <span className="sk-span">Git , Docker</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: office }} className="red-progress"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-skill">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="circle">
              <span>4</span>
              <span>.</span>
            </div>
            <span data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="years">years+ of experience</span>
          </div>
        </div>
      </section>

      <section id="resume" className="resume">
        <motion.div initial={{
          opacity: 0,

          x: -50
        }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }} className="resume-main w-70">
          <h2 className="resume-head">My Resume</h2>
          <div className="resume-tail">Resume</div>
        </motion.div>
        <div className="options">
          <span onClick={handlefirstclick} style={{ color: first }} >Experience</span>
          <span onClick={handlesecondclick} style={{ color: second }} >Qualification</span>
          <span className="red-span"></span>
        </div>

        {truesstate && <div className="experience">
          <Experience />
        </div>
        }
        {!truesstate
          && <div className="qualification">
            <Qualification />
          </div>
        }
      </section>
      <section id="swiper" className="swiper-section">
        <motion.div initial={{
          opacity: 0,

          x: -50
        }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }} className="resume-main swiper-about w-70">
          <h2 className=" resume-head">My Portfolio</h2>
          <div className=" resume-tail  media-text">PROJECT</div>
        </motion.div>
        <Swiper_animation />
      </section>
      <section id="services" className="services">
        <motion.div initial={{
          opacity: 0,

          x: -50
        }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }} className="resume-main w-70">
          <h2 className="resume-head">My Services</h2>
          <div className=" resume-tail media-text">SERVICES</div>
        </motion.div>

        <div className="cards">
          <div data-aos="zoom-in" data-aos-duration="500" className="card-div">
            <div className="logo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-layers fea icon-md"
                viewBox="0 0 24 24"
              >
                <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="name-card">
              Graphic Designing
            </div>
            <div className="para-card">
              Bringing your ideas to life with stunning designs 🎨 and creative branding ✨
              <div className="big-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-layers fea icon-md"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="500" className="card-div">
            <div className="logo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-layers fea icon-md"
                viewBox="0 0 24 24"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
              </svg>
            </div>
            <div className="name-card">
              Web Design
            </div>
            <div className="para-card">
              Creating modern and user-friendly web designs 🌐 that leave a lasting impression
              <div className="big-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-layers fea icon-md"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
                </svg>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" className="card-div">
            <div className="logo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-layers fea icon-md"
                viewBox="0 0 24 24"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <div className="name-card">
              App Research
            </div>
            <div className="para-card">
              Conducting in-depth app research 🔍 to uncover insights and enhance user experiences
              <div className="big-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-layers fea icon-md"
                  viewBox="0 0 24 24"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" className="card-div">
            <div className="logo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-layers fea icon-md"
                viewBox="0 0 24 24"
              >
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </div>
            <div className="name-card">
              Branding
            </div>
            <div className="para-card">
              Building strong and unique brand identities ✨ that stand out
              <div className="big-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-layers fea icon-md"
                  viewBox="0 0 24 24"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" className="card-div">
            <div className="logo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-layers fea icon-md"
                viewBox="0 0 24 24"
              >
                <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div className="name-card">
              Responsive Web
            </div>
            <div className="para-card">
              Designing fully responsive websites 📱💻 for seamless user experiences
              <div className="big-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-layers fea icon-md"
                  viewBox="0 0 24 24"
                >
                  <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="500" className="card-div">
            <div className="logo-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-layers fea icon-md"
                viewBox="0 0 24 24"
              >
                <path d="m3 11 19-9-9 19-2-8-8-2z" />
              </svg>
            </div>
            <div className="name-card">
              Trendy Work
            </div>
            <div className="para-card">
              Delivering trendy and innovative designs ✨ that make an impact
              <div className="big-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-layers fea icon-md"
                  viewBox="0 0 24 24"
                >
                  <path d="m3 11 19-9-9 19-2-8-8-2z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section id="contact" className="contact-me">
        <motion.div initial={{
          opacity: 0,

          x: -50
        }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }} className="about w-70">
          <h2 className=" about-head">Contact</h2>
          <div className=" about-tail contact-tail">CONTACT</div>
        </motion.div>
        <Contact />
      </section>

      <div className="footer">
        <div className="left-footer">
          <div className="name">
            <img className='piclogo' src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="logo" />
          </div>
        </div>
        <div className="middle-footer">
          Made by Moeez Xheikh © {new Date().getFullYear()}. All right reserved
        </div>
        <div style={{ opacity: opa.opacity, pointerEvents: opa.pointerevents }} className="right-footer">
          <div>
            <a target="_blank" href="https://www.upwork.com/freelancers/~01e9148e1b6fb129a3?mp_source=share">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                className="injected-svg"
                color="#fff"
                data-src="https://cdn.hugeicons.com/icons/upwork-solid-standard.svg?v=2.0"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M10.428 4.129A1 1 0 0 0 8.5 4.5v6.25c0 1.49-1.26 2.75-2.75 2.75S3 12.24 3 10.75V4.5a1 1 0 1 0-2 0v6.25c0 2.595 2.155 4.75 4.75 4.75s4.75-2.155 4.75-4.75V9.42c.3.603.627 1.205.983 1.78.108.173.22.348.337.52a4259.413 4259.413 0 0 1-1.177 6.266l-.25 1.329a1 1 0 1 0 1.965.37l.25-1.328.574-3.049.3-1.595C14.6 14.76 15.967 15.5 17.625 15.5 20.56 15.5 23 13.06 23 10.125S20.56 4.75 17.625 4.75c-2.864 0-4.633 1.96-5.224 4-.686-1.345-1.232-2.736-1.681-3.883-.102-.26-.199-.507-.292-.738Zm7.197 9.371c-1.378 0-2.594-.847-3.682-2.252.13-.695.233-1.252.291-1.569.277-1.52 1.454-2.929 3.391-2.929 1.83 0 3.375 1.544 3.375 3.375 0 1.83-1.544 3.375-3.375 3.375Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.instagram.com/skh_moeez/profilecard/?igsh=MXBpZDNkZHBwNG8wcg==">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-instagram fea icon-sm"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://x.com/MoeezSheik53288">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                className="injected-svg"
                color="white"
                data-src="https://cdn.hugeicons.com/icons/new-twitter-stroke-standard.svg"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m3 21 7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                />
              </svg>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://linkedin.com/in/moeez-sheikh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-linkedin fea icon-sm"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://github.com/moeez5251">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                className="injected-svg"
                color="white"
                data-src="https://cdn.hugeicons.com/icons/github-01-solid-sharp.svg"
              >
                <path
                  fill="white"
                  d="M12 1.25C6.063 1.25 1.25 6.107 1.25 12.1c0 5.28 3.739 9.68 8.691 10.65v-2.936a3.854 3.854 0 0 1-1.014-.3c-.683-.305-1.535-.892-2.36-2.003l1.2-.909c.673.907 1.323 1.33 1.768 1.528.161.073.3.117.406.144v-.446c0-.367.108-.686.283-.974.12-.197.037-.478-.179-.54C8.255 15.801 7 14.977 7 12.241a3.485 3.485 0 0 1 .64-1.995c.082-.122.123-.183.135-.249.012-.066-.005-.138-.04-.282a3.716 3.716 0 0 1-.004-1.868c.053-.195.166-.308.37-.287.266.029.727.156 1.409.6.268.175.402.262.52.282.118.02.276-.022.592-.104A5.39 5.39 0 0 1 12 8.167c.501 0 .946.06 1.378.171.316.082.474.123.592.104.118-.02.252-.107.52-.282.682-.444 1.143-.571 1.408-.6.205-.021.318.092.371.286.16.592.15 1.226.006 1.828l-.01.04c-.035.145-.052.217-.04.283.012.066.053.127.136.249l.022.034c.393.581.617 1.25.617 1.961 0 2.736-1.255 3.56-3.045 4.073-.216.062-.298.343-.179.54.175.288.283.607.283.974v4.922c4.952-.97 8.691-5.37 8.691-10.65 0-5.993-4.813-10.85-10.75-10.85Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div style={{ opacity: opa.opacity, pointerEvents: opa.pointerevents }} className="scroll-to-top">
        <span onClick={() => window.lenis.scrollTo("#home")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="lucide lucide-arrow-up-icon lucide-arrow-up"
          >
            <path d="m5 12 7-7 7 7M12 19V5" />
          </svg>
        </span>
      </div>

    </>
  )
}

export default Home

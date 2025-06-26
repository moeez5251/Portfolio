import Lenis from '@studio-freight/lenis';
import React, { useEffect, useState, useRef } from "react";
import CustomCursor from "./components/cursor"
import Navbar from "./components/navbar";
import Me from "./components/me";
import About from "./components/about";
import Experience from "./components/experience";
import Qualification from "./components/qualification"
import Swiper_animation from "./components/swiper";
import Contact from "./components/contact";
import { motion, useInView } from "motion/react"
motion
import "./App.css"
function App() {
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
    setsecond("#cb2d3e");
    settruesstate(true)
  }
  const handlesecondclick = () => {
    document.querySelector(".red-span").style.left = "50%";
    setfirst("#cb2d3e");
    setsecond("white");
    settruesstate(false)
  }

  return (
    <>
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
            <img className="menu-img" src="assets/logo.webp" alt="logo" />
          </div>
          <span onClick={() => document.querySelector(".menubar").classList.toggle("bottom")} style={{ color: "white", fontSize: "27px" }} className="material-symbols-outlined">
            widgets
          </span>
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
                <span className="percentage">{js}</span>
                <span className="sk-span">C++</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: js }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{react}</span>
                <span className="sk-span">MS SQL</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: react }} className="red-progress"></span>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="sk">
                <span className="percentage">{office}</span>
                <span className="sk-span">MS Office</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: office }} className="red-progress"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-skill">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="circle">
              <span>5</span>
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
            <img className='piclogo' src="assets/logo.webp" alt="logo" />
          </div>
        </div>
        <div className="middle-footer">
          Made by Moeez Xheikh © 2025. All right reserved
        </div>
        <div style={{ opacity: opa.opacity, pointerEvents: opa.pointerevents }} className="right-footer">
          <div>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100067653536666&mibextid=ZbWKwL">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-facebook fea icon-sm"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
        <span onClick={() => window.lenis.scrollTo("#home")} className="material-symbols-outlined">
          arrow_upward
        </span>
      </div>

    </>
  )
}

export default App

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
import { useInView } from "motion/react"
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
  const [opa, setopacity] = useState(0)
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
        setjs("83%")
        setnode("80%")
        setreact("75%")
        setvideo("95%")
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
      if (window.scrollY >= 300) {
        setopacity(1);
      } else {
        setopacity(0);
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



  function Section({ children, id, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section id={id} className={className} ref={ref}>
        <div
          style={{
            transform: isInView
              ? "scale(1) translateY(0)"
              : "scale(0.94) translateY(30px)",
            transition:
              "transform 0.4s ease-out, opacity 0.4s ease-out, filter 0.4s ease-out",
          }}
        >
          {children}
        </div>
      </section>
    );
  }

  function Skill({ children, id, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section style={{
        transform: isInView ? "scale(1)" : "scale(0.94)",
        transition:
          "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67), opacity 0.2s ease, filter 0.2s ease",
      }} id={id} className={className} ref={ref}>

        {children}
      </section>
    );
  }
  function Heading({ children, id, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div style={{
        left: isInView ? "9%" : "0%",
        transition:
          "all 0.4s ease-in-out",
      }} id={id} className={className} ref={ref}>

        {children}
      </div>
    );
  }

  function Service({ children, id, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
      <div style={{
        transform: isInView ? "translateY(0px)" : "translateY(30px)",
        transition:
          "transform 0.5s ease-out",
        width: "100%"
      }} id={id} className={className} ref={ref}>

        {children}
      </div>
    );
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

      <div className="menubar bottom">
        <div className="img">
          <img className="menu-img" src="assets/logo.webp" alt="logo" />
        </div>
        <span onClick={() => document.querySelector(".menubar").classList.toggle("bottom")} style={{ color: "white", fontSize: "27px" }} className="material-symbols-outlined">
          widgets
        </span>
        <div className="nav-opt">
          <li ><a href="#home">HOME</a></li>
          <li ><a href="#about">ABOUT</a></li>
          <li ><a href="#resume">RESUME</a></li>
          <li ><a href="#swiper">PROJECTS</a></li>
          <li ><a href="#contact">CONTACT</a></li>
        </div>
      </div>
      <Section
        id="about" className="about-section" >
        <div className="about">
          <h2 className="about-head">About</h2>
          <div className="about-tail">ABOUT</div>
        </div>
        <About />
      </Section>
      <section id="skills" className="skills-section" >
        <Heading className="about">
          <h2 className="about-head skill-head">Skills.</h2>
          <div className="about-tail skill-tail">SKILL</div>
        </Heading>
        <div className="skill">

          <div className="left-skill">
            <div className="skill-para">
              I'm a professional web designer, My motive is to build a best web design with my all years of experience and efforts.
            </div>
            <div ref={ref} className="width-skills">
              <div className="sk">
                <span className="percentage">{html}</span>
                <span className="sk-span">HTML</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: html }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
                <span className="percentage">{css}</span>
                <span className="sk-span">CSS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: css }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
                <span className="percentage">{js}</span>
                <span className="sk-span">JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: js }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
                <span className="percentage">{node}</span>
                <span className="sk-span">Node JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: node }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
                <span className="percentage">{react}</span>
                <span className="sk-span">React JS</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: react }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
                <span className="percentage">{react}</span>
                <span className="sk-span">UI Designing</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: react }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
                <span className="percentage">{video}</span>
                <span className="sk-span">Video Editing</span>
                <div className="progress">
                  <span className="progress-bar"></span>
                  <span style={{ width: video }} className="red-progress"></span>
                </div>
              </div>
              <div className="sk">
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
            <div className="circle">
              <span>5</span>
              <span>.</span>
            </div>
            <span className="years">years+ of experience</span>
          </div>
        </div>
      </section>

      <section id="resume" className="resume">
        <div className="about w-70">
          <h2 className="about-head resume-head">My Resume</h2>
          <div className="about-tail resume-tail">Resume</div>
        </div>
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
        <Heading className="about swiper-about w-70">
          <h2 className="about-head resume-head swiper-h">My Portfolio</h2>
          <div className="about-tail resume-tail swiper-t">PROJECT</div>
        </Heading>
        <Swiper_animation />
      </section>
      <section id="services" className="services">
        <Heading className="about w-70">
          <h2 className="about-head resume-head">My Services</h2>
          <div className="about-tail resume-tail services-tail">SERVICES</div>
        </Heading>

        <div className="cards">
          <Service className="card-div">
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
          </Service>

          <Service className="card-div">
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
          </Service>
          <Service className="card-div">
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
          </Service>
          <Service className="card-div">
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
          </Service>
          <Service className="card-div">
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
          </Service>
          <Service className="card-div">
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
          </Service>

        </div>
      </section>
      <Skill id="contact" className="contact-me">
        <Heading className="about w-70">
          <h2 className="about-head resume-head">Contact</h2>
          <div className="about-tail resume-tail services-tail contact-tail">CONTACT</div>
        </Heading>
        <Contact />
      </Skill>

      <div className="footer">
        <div className="left-footer">
          <div className="name">
            <img className='piclogo' src="assets/logo.webp" alt="logo" />
          </div>
        </div>
        <div className="middle-footer">
          Made by Moeez Xheikh © 2024. All right reserved
        </div>
        <div className="right-footer">
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
            <a target="_blank" href="https://twitter.com/moeez5251">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="feather feather-twitter fea icon-sm"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
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
        </div>
      </div>

    </>
  )
}

export default App

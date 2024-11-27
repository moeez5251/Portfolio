import React from 'react'
import "./about.css"
import Typed from 'typed.js';
const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WEB-DEVELOPER.", "UI/UIX-DESIGNER.", "", "SERVER-TESTER.", "APP-DEVELOPER.", "CONTENT-WRITER.", "VIDEO-EDITOR.", "PROGRAMMER."],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true
    });

    return () => {
      typed.destroy();
    }; 
  }, []);
  return (
    <>
      <div className='flex' >
        <div className="about-left">
          <img className='left-image' src="assets/Me-1.webp "alt="" />
          <div className='left-border'></div>
        </div>
        <div className="about-right">
          <div className="head"> I'm Xheikh Moeez an <span className='typed-animation' ref={el}></span></div>
          <p className='right-para'>I'm a professional web designer, My motive is to build a best web design with my all years of experience and efforts. and again during the 90s as desktop publishers bundled the text with their software.The purpose of lorem ipsum is to create a natural looking block of text.</p>
          <div className="icons">
            <div className="ic">
              <div className="logo-ic">
                <span className="material-symbols-outlined icons-about">
                  school
                </span>
                <span className='degree' >Degree:</span>
              </div>
              <p className='about-degree-name' >Bachelor</p>
            </div>
            <div className="ic">
              <div className="logo-ic">
                <span className="material-symbols-outlined icons-about">
                  mail
                </span>
                <span className='degree' >Email:</span>
              </div>
              <p className='about-degree-name' >moeez4241@gmail.com</p>
            </div>
            <div className="ic">
              <div className="logo-ic">
                <span className="material-symbols-outlined icons-about">
                  emoji_people
                </span>
                <span className='degree'>Age:</span>
              </div>
              <p className='about-degree-name' >19</p>
            </div>
            <div className="ic">
              <div className="logo-ic">
                <span className="material-symbols-outlined icons-about">
                  location_on
                </span>
                <span className='degree' >Country:</span>
              </div>
              <p className='about-degree-name' >Lahore,Pakistan</p>
            </div>
          </div>
          <div className="button">
            <a download="Xheikh Moeez CV" href="assets/files/My CV.pdf" className="anchor">
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

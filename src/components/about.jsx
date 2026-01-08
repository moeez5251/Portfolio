import "./about.css"
import { CardBody, CardContainer, CardItem } from "./3d-card";
import RotatingText from './rotatinganimation';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init({
  once: true
});
const About = () => {

  return (
    <>
      <div className='flex' >
        <div className="about-left">
          <CardContainer className="inter-var">
            <CardBody>
              <CardItem>

                <img data-aos="zoom-in" data-aos-duration="800" className='left-image' src="assets/Me-11.webp " alt="My Image" loading="eager"  />
              </CardItem>
            </CardBody>

          </CardContainer>
        </div>
        <div className="about-right">
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" className="head"> I'm Xheikh Moeez an <RotatingText
            texts={[
              "MERN-WEB-DEVELOPER.",
              "API-DEVELOPER.",
              "APP-DEVELOPER.",
              "SERVER-TESTER.",
              "BACKEND-DEVELOPER.",
              "DB-DEVELOPER."
            ]
            }
            mainClassName="custom-class"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          /></div>
          <p data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" className='right-para'>I’m a full-stack developer with extensive experience in building scalable, high-performance web applications. I work across both frontend and backend, delivering clean code and seamless user experiences. Proficient in modern frameworks, APIs, and databases, I take a holistic approach to development. My focus is on efficiency, reliability, and continuous improvement.</p>
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" className="icons">
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
              <p className='about-degree-name' >{
                new Date().getFullYear() - 2005 - (new Date() < new Date(new Date().getFullYear(), 9, 2) ? 1 : 0)
              }</p>
            </div>
            <div className="ic">
              <div className="logo-ic">
                <span className="material-symbols-outlined icons-about">
                  location_on
                </span>
                <span className='degree' >Country:</span>
              </div>
              <p className='about-degree-name' >Lahore, Pakistan</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" className="button">
            <a  download="Xheikh Moeez CV" href="assets/files/My CV.pdf" className="anchor">
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules';
import './swiper.css';
import { CardBody, CardContainer, CardItem } from "./3d-card";
const swiperdata = [
  {
    imgsrc: "/assets/Swiper/XLMS.webp",
    alt: "XLMS",
    name: "Library Management System",
    description: "A web-based dashboard for librarians to manage books, users, and transactions with features like book catalog management, borrow/return tracking, and reports. Built using React, Next.js, Express.js, Node.js, and MS SQL.",
    techs: ["Next.js", "Express.js", "MS SQL"],
    livehref: "https://xlms-admin.netlify.app",
    git_href: "https://github.com/moeez5251/Library-Management-System-Admin"
  },
  {
    imgsrc: "/assets/Swiper/XFMS.webp",
    alt: "XFMS",
    name: "File Management System",
    description: "A web-based dashboard for managing files with features like upload, categorization, and access control. Provides secure storage and easy retrieval of documents. Built using React, Next.js, and Appwrite.",
    techs: ["React", "Next.js", "Appwrite"],
    livehref: "https://xfms.netlify.app",
    git_href: "https://github.com/moeez5251/File-Management-System"
  },
  {
    imgsrc: "/assets/Swiper/URL.webp",
    alt: "URL Shortener",
    name: "URL Shortener",
    description: "A web-based tool for shortening long URLs, making them easy to share and manage. Provides quick link generation and copy functionality for users. Built using React, Next.js, and Appwrite.",
    techs: ["React", "Next.js", "Appwrite"],
    livehref: "https://linkio.netlify.app",
    git_href: "https://github.com/moeez5251/URL-Shortner"
  },
  {
    imgsrc: "/assets/Swiper/Spotify.webp",
    alt: "Spotify",
    name: "Spotify Clone",
    description: "A web-based music player replicating core Spotify features like play, pause, and song navigation. Users can browse and play tracks with a clean, interactive interface. Built using HTML, CSS, and JavaScript.",
    techs: ["HTML", "CSS", "JavaScript"],
    livehref: "https://tunefy.netlify.app",
    git_href: "https://github.com/moeez5251/Spotify-Clone"
  },
  {
    imgsrc: "/assets/Swiper/Weather.webp",
    alt: "Weather",
    name: "Weather App",
    description: "A web application that provides real-time weather information based on user  searched cities. Displays temperature, humidity, wind speed, and weather conditions with a clean interface. Built using HTML, CSS, and JavaScript.",
    techs: ["HTML", "CSS", "JavaScript"],
    livehref: "https://stormix.netlify.app",
    git_href: "https://github.com/moeez5251/Weather"
  },
  {
    imgsrc: "/assets/Swiper/Netflix.webp",
    alt: "Netflix",
    name: "Netflix Clone",
    description: "A web-based replica of Netflix's homepage showcasing featured movies and series with a responsive layout. Includes interactive carousels  for a dynamic browsing experience. Built using HTML, CSS, and JavaScript.",
    techs: ["HTML", "CSS", "JavaScript"],
    livehref: "https://streamnest.netlify.app",
    git_href: "https://github.com/moeez5251/Netflix-Clone"
  },
  {
    imgsrc: "/assets/Swiper/Chat.webp",
    alt: "Chat",
    name: "Chat App",
    description: "A web application enabling users to send and receive messages instantly with real-time updates. Supports multiple users, chat rooms, and a responsive interface. Built using HTML, CSS, JavaScript, and Appwrite.",
    techs: ["HTML", "CSS", "JavaScript"],
    livehref: "https://xchatting.netlify.app",
    git_href: "https://github.com/moeez5251/Chat-App"
  },
  {
    imgsrc: "/assets/Swiper/AI.webp",
    alt: "AI",
    name: "AI Chat",
    description: "A web-based chatbot powered by the Gemini API, allowing users to interact with an AI in real-time. Built with a responsive interface using React, delivering smart and dynamic conversational experiences.",
    techs: ["React", "Gemini"],
    livehref: "https://talkx.netlify.app",
    git_href: "https://github.com/moeez5251/AI-Chat"
  },
  {
    imgsrc: "/assets/Swiper/Password.webp",
    alt: "Password Manager",
    name: "Password Manager",
    description: "A secure web application that allows users to store, manage, and retrieve passwords safely. Features include password encryption, organized storage, and easy access. Built using React and Appwrite.",
    techs: ["React", "Appwrite"],
    livehref: "https://passup.netlify.app",
    git_href: "https://github.com/moeez5251/Password-Manager"
  },

]
function App() {
  const [swiper, setswiper] = useState({
    slidesPerView: 3,
    spaceBetween: 40,
  })

  useEffect(() => {
    const updateSwiperSettings = () => {
      if (window.innerWidth <= 900 && window.innerWidth > 670) {
        setswiper({
          slidesPerView: 2,
          spaceBetween: 30,
        });
      }
      else if (window.innerWidth <= 670) {
        setswiper({
          slidesPerView: 1,
          spaceBetween: 50,
        });
      }
      else {
        setswiper({
          slidesPerView: 3,
          spaceBetween: 40,
        });
      }
    };
    updateSwiperSettings()
    window.addEventListener('resize', updateSwiperSettings);

    return () => {
      window.removeEventListener('resize', updateSwiperSettings);
    }
  }, [])

  return (
    <>
      <section className="section">
        <Swiper
          slidesPerView={swiper.slidesPerView}
          autoplay={{ delay: 3000 }}
          spaceBetween={swiper.spaceBetween}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          mousewheel={{
            releaseOnEdges: true
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className}">${index + 1}</span>`;
            },

          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          modules={[Pagination, Navigation, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {
            swiperdata.map((data, key) => {
              return (
                <SwiperSlide key={key}>
                  <div className='slides'>
                    <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
                      <CardBody style={{ position: "relative", zIndex: "-10" }} >
                        <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <div className='slides-image'>
                            <img src={data.imgsrc} alt={data.alt} />
                          </div>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                    <div className='slides-content'>
                      <div className='slides-name'>{data.name}</div>
                      <p className='slides-para'>{data.description}</p>
                    </div>
                    <div className='tech-stacks'>
                      {
                        data.techs.map((tech, key) => {
                          return (
                            <div key={key}>{tech}</div>
                          )
                        })
                      }
                    </div>
                    <div className='slides-button'>

                      <a className='swiper-link' target='_blank' href={data.livehref}>Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </a>
                      <a target='_blank' href={data.git_href} className='github-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )

            })
          }
          {/* <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }} >
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Todo.webp" alt="" />
                    </div>
                    <div className="swiper-name">Todo App</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://task-mastery.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/E.webp" alt="" />
                    </div>
                    <div className="swiper-name">E-Commerce Website</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://stridestyle.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Calculator.webp" alt="" />
                    </div>
                    <div className="swiper-name">Calculator</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://calczen.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Spotify.webp" alt="" />
                    </div>
                    <div className="swiper-name">Spotify Clone</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://tunefy.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/X.webp" alt="" />
                    </div>
                    <div className="swiper-name">X Clone</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://tweetstream.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Snake-Game.webp" alt="" />
                    </div>
                    <div className="swiper-name">Snake Game</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://snakeloop.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Weather.webp" alt="" />
                    </div>
                    <div className="swiper-name">Weather App</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://stormix.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Table.webp" alt="" />
                    </div>
                    <div className="swiper-name">Table Generator</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://tablemakerpro.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Recipes.webp" alt="" />
                    </div>
                    <div className="swiper-name">Recipes Website</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://spiceupmeals.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>

          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Clock.webp" alt="" />
                    </div>
                    <div className="swiper-name">Clock</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://timeontap.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/TTT.webp" alt="" />
                    </div>
                    <div className="swiper-name">Tic Tac Toe</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://gridxo.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Netlify.webp" alt="" />
                    </div>
                    <div className="swiper-name">Netflix Clone</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://streamnest.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/AI.webp" alt="" />
                    </div>
                    <div className="swiper-name">AI Chat</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://talkx.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/FMS.webp" alt="" />
                    </div>
                    <div className="swiper-name">File Management System </div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://xfms.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/URL.webp" alt="" />
                    </div>
                    <div className="swiper-name">URL Shortner</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://linkio.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Pass-Manager.webp" alt="" />
                    </div>
                    <div className="swiper-name">Password Manager</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://passup.netlify.app/" className="find-more-button">
                        Live Preview
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide> */}

        </Swiper>

        <div style={{ bottom: "0px" }} className="custom-pagination"></div>
      </section>
    </>
  );
}
export default App

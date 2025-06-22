import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules';
import './swiper.css';
import { CardBody, CardContainer, CardItem } from "./3d-card";

function App() {
  const [swiper, setswiper] = useState({
    slidesPerView: 3,
    spaceBetween: 30,
  })

  useEffect(() => {
    const updateSwiperSettings = () => {
      if (window.innerWidth <= 750 && window.innerWidth > 500) {
        setswiper({
          slidesPerView: 2,
          spaceBetween: 10,
        });
      }
      else if (window.innerWidth <= 500) {
        setswiper({
          slidesPerView: 1,
          spaceBetween: 0,
        });
      }
      else {
        setswiper({
          slidesPerView: 3,
          spaceBetween: 30,
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
          spaceBetween={swiper.spaceBetween}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          autoplay={{
            delay: 2000,
            stopOnLastSlide: false
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
          <SwiperSlide>
            <CardContainer style={{ position: "relative", zIndex: "-10" }} className="inter-var">
              <CardBody style={{ position: "relative", zIndex: "-10" }}>
                <CardItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="slide-container">
                    <div className="image-swiper">
                      <img src="assets/Swiper/Chat-App.webp" alt="" />
                    </div>
                    <div className="swiper-name">Chat App</div>

                    <div className="swiper-link">
                      <a target='_blank' href="https://xchatting.netlify.app/" className="find-more-button">
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
          </SwiperSlide>

        </Swiper>

        <div style={{ bottom: "0px" }} className="custom-pagination"></div>
      </section>
    </>
  );
}
export default App

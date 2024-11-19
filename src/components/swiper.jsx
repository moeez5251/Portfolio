import React from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard,Autoplay } from 'swiper/modules';
import './swiper.css';
 function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2847 && window.scrollY < 3500) {
        for (let i = 0; i < document.querySelectorAll(".slide-container").length; i++) {
          document.querySelectorAll(".slide-container")[i].classList.add("transform");
        }
          setTimeout(() => {
            document.querySelectorAll(".slide-container").forEach(e=>{
              e.classList.remove("transform");
            })
          }, 2000);
      }
      else{
        document.querySelectorAll(".slide-container").forEach(e=>{
          e.classList.remove("transform");
        })
      }
    })
  }, [])

  return (
    <>
      <section className="section">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          autoplay={{
            delay:2000,
            stopOnLastSlide:false
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
          modules={[Pagination, Navigation, Keyboard,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Chat-App.png" alt="" />
              </div>
              <div className="swiper-name">Chat App</div>

              <div className="swiper-link">
                <a href="https://xchatting.netlify.app/" className="find-more-button">
                  Live Preview
                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Todo.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/E-Commerce.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Calculator.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Spotify.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/X.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Snake-Game.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Weather.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Table.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Recipes.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/AI.png" alt="" />
              </div>
              <div className="swiper-name">AI Chat</div>

              <div className="swiper-link">
                <a target='_blank' href="https://chat-genie.netlify.app/" className="find-more-button">
                  Live Preview
                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Clock.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/TTT.png" alt="" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">
              <div className="image-swiper">
                <img src="dist/assets/Swiper/Netlify.png" alt="" />
              </div>
              <div className="swiper-name">Netlify Clone</div>

              <div className="swiper-link">
                <a target='_blank' href="https://streamnest.netlify.app/" className="find-more-button">
                  Live Preview
                  <span className="material-symbols-outlined">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <div style={{ bottom: "0px" }} className="custom-pagination"></div>
      </section>
    </>
  );
}
export default App

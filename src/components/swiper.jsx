import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules';
import './swiper.css';
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { swiperdata } from './swiperdata';
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
                            <img loading='lazy' src={import.meta.env.BASE_URL + data.imgsrc} alt={data.alt} />
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
        </Swiper>

        <div style={{ bottom: "0px" }} className="custom-pagination"></div>
      </section>
    </>
  );
}
export default App

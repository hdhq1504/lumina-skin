import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

function Index() {
  return (
    <>
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect='fade'
          loop={true}
          autoplay={{
            delay: 3000
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>- ESSENTIAL ITEMS -</h5>
                <h1>Beauty Inspired <br /> by Real Life</h1>
                <p className='my-3'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                <a href="#" className='btn hero-btn mt-3'>Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>- NEW COLLECTION -</h5>
                <h1>Get The Perfectly Hydrated Skin</h1>
                <p className='my-3'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                <a href="#" className='btn hero-btn mt-3'>Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>- GET THE GLOW -</h5>
                <h1>Be Your Kind <br /> of Beauty</h1>
                <p className='my-3'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                <a href="#" className='btn hero-btn mt-3'>Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Index
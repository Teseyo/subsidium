import React from 'react';
import Swiper from 'react-id-swiper';
import './../css/swiper-bundle.min.css';

  const ResponsiveBreakpoints = () => {
    const params = {
      slidesPerView: 5,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }
    return (
        <div style={{display:'flex', width:'50vw', justifyContent:'center', alignItems:'center'}}>
      <Swiper {...params} style={{}}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
        <div>Slide #6</div>
        <div>Slide #7</div>
        <div>Slide #8</div>
      </Swiper>
      </div>
    )
  };
  export default ResponsiveBreakpoints;
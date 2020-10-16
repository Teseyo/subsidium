import './../../css/App.css'
import './../../css/swiper-bundle.min.css';
// import 'react-id-swiper/lib/styles/scss/swiper.scss';
import React from 'react';
import Swiper from 'react-id-swiper';
import Slide from './slide.js';
// import data from './../../data.json';
import Img1 from './../../img/org/TS.jpg';
import styled from 'styled-components';

const Img = styled.img`
    width: 270px;
    height: 250px;
    margin-top: 10px;
    object-fit: cover;
    cursor: pointer;
`

const data=[
    {
      "title": "Slide 2",
      "color": "https://thumb.cloud.mail.ru/weblink/thumb/xw1/2vU9/cGtBneX1M/%D0%A2%D0%B8%D0%BC%D0%BE%D1%84%D0%B5%D0%B5%D0%B2%D0%B0%20%D0%A1%D0%B0%D0%B9%D0%B0%D0%B0%D0%BD%D0%B0%20-%20%D0%BA%D1%83%D1%80%D0%B0%D1%82%D0%BE%D1%80.jpg?x-email=undefined",
    },
    {
      "title": "Slide 2",
      "color": "#c9b1bd"
    },
    {
      "title": "Slide 3",
      "color": "#d5a29c"
    },
    {
      "title": "Slide 4",
      "color": "#82a7a6"
    },
    {
      "title": "Slide 5",
      "color": "#e6af7a"
    },
    {
      "title": "Slide 6",
      "color": "#95be9e"
    },
    {
      "title": "Slide 7",
      "color": "#97b5c5"
    }
  ]
  

const StickySlider = () => {
  const params = {
    slidesPerView: 3,
  };

  return (
    <div style={{display:'flex', jystifyContent:'center', width:'1310px', marginLeft:'12vw' }}>
    <Swiper {...params} style={{jystifyContent:'center', alignItems:'center'}}>
      {data.map((item, idx) => (
        <div key={idx}>
          <Slide style={{ backgroundImage: `url({$data.color})` }}>
            {item.title}
          </Slide>
        </div>
      ))}
    </Swiper>
    </div>
  );
};

export default StickySlider;
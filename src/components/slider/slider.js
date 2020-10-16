import './../../css/App.css'
import './../../css/swiper-bundle.min.css'
// import 'react-id-swiper/lib/styles/scss/swiper.scss';
import React from 'react'
import Swiper from 'react-id-swiper'
import Slide from './slide.js'
// import data from './../../data.json';
import photos from './../../img/org/index.ts'
import styled from 'styled-components'

const Img = styled.img`
    width: 270px;
    height: 250px;
    margin-top: 10px;
    object-fit: cover;
    cursor: pointer;
`

const data = [
    {
        title: 'Адамова Айыы - Куо - куратор',
        color: photos.image1
    },
    {
        title: 'Антонов Айсиэн - руководитель системных администраторов',
        color: photos.image2
    },
    {
        title: 'Архангельская Анна - руководитель образовательной части',
        color: photos.image3
    },
    {
        title: 'Архипова Людмила - заместитель руководителя',
        color: photos.image4
    },
    {
        title: 'Гаврильева Клара - руководитель медиа - центра',
        color: photos.image5
    },
    {
        title: 'Гоголева Юлия - куратор',
        color: photos.image6
    },
    {
        title: 'Гуляева Пелагея - куратор',
        color: photos.image7
    },
    {
        title: 'Дмитриев Ньургустаан - куратор',
        color: photos.image8
    },
    {
        title: 'Егорова Анна - куратор',
        color: photos.image9
    },
    {
        title: 'Иванов Афанасий - старший куратор',
        color: photos.image10
    },
    {
        title: 'Корякин Николай - руководитель Субсидиума',
        color: photos.image11
    },
    {
        title: 'Кривошапкина Кира - куратор',
        color: photos.image12
    },
    {
        title: 'Неустроева Айана - руководитель контент - группы',
        color: photos.image13
    },
    {
        title: 'Птицин Владимир - куратор',
        color: photos.image14
    },
    {
        title: 'Сидоров Айтал - куратор',
        color: photos.image15
    },
    {
        title: 'Степанова Юлия - куратор',
        color: photos.image16
    },
    {
        title: 'Тимофеева Сайаана - куратор',
        color: photos.image17
    },
    {
        title: 'Шарин Константин - куратор',
        color: photos.image18
    }
]

const StickySlider = () => {
    const params = {
        slidesPerView: 3
    }

    return (
        <div
            style={{
                display: 'flex',
                jystifyContent: 'center',
                width: '1310px',
                marginLeft: '12vw'
            }}
        >
            <Swiper {...params} style={{ jystifyContent: 'center', alignItems: 'center' }}>
                {data.map((item, idx) => (
                    <div key={idx}>
                        <Slide color={item.color} style={{ backgroundImage: item.color }}>
                            {item.title}
                        </Slide>
                    </div>
                ))}
            </Swiper>
        </div>
    )
}

export default StickySlider

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
    const images = [
        '/images/galaxy.jpg',
        '/images/shuttle.jpg',
        '/images/suits.png',
        '/images/austronaut.jpg'
    ]

    return <div className="w-full">

        <Swiper
            navigation
            pagination={{ clickable: true }}
        >
            {images.map((image, index) => (
                <SwiperSlide key="index">
                    <img src={image} alt="slide" className="w-full h-screen object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}
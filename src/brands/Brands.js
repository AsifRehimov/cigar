import "./brand.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import React from 'react';
import Fade from 'react-reveal/Fade';

import img1 from './media/image1.png'
import img2 from './media/image2.png'
import img3 from './media/image3.png'
import img6 from './media/image6.png'
import img7 from './media/image7.png'
import img5 from './media/image5.png'
import img8 from './media/image8.png'

import next_prev from './media/next-prev.png'

export default function Brands() {


    return (
        <section className="brands container">
            <p className="brands-section-title">BRANDS</p>
            <p className="brands-title">Our famous brands</p>

            <div className="brands-container">
                <div id="exTab1">

                    <ul className="nav nav-pills brand-tab-container">
                        <li className="active">
                            <a href="#1a" data-toggle="tab">Cigars</a>
                        </li>
                        <li>
                            <a href="#2a" data-toggle="tab">Cigarrillos</a>
                        </li>
                        <li>
                            <a href="#3a" data-toggle="tab">Gift sets</a>
                        </li>
                        <li>
                            <a href="#4a" data-toggle="tab">Accessories</a>
                        </li>
                    </ul>

                    <div className="tab-content clearfix">
                        <div className="tab-pane active container position-relative p-0" id="1a">
                            <Fade bottom>
                                <Swiper
                                    spaceBetween={10}
                                    freeMode={true}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}

                                    watchSlidesProgress={true}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 1,
                                            spaceBetween: 8,
                                        },
                                        960: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    modules={[FreeMode, Navigation]}
                                    className="mySwiper1 animate__animated animate__fadeInUp"
                                >

                                    <SwiperSlide>
                                        <div className="brands-company-item"><img src={img1} alt="company-logo" /></div>
                                        <div className="brands-company-item"><img src={img5} alt="company-logo" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brands-company-item"><img src={img2} alt="company-logo" /></div>
                                        <div className="brands-company-item"><img src={img6} alt="company-logo" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brands-company-item"><img src={img3} alt="company-logo" /></div>
                                        <div className="brands-company-item"><img src={img7} alt="company-logo" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brands-company-item"><img src={img2} alt="company-logo" /></div>
                                        <div className="brands-company-item"><img src={img8} alt="company-logo" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brands-company-item"><img src={img3} alt="company-logo" /></div>
                                        <div className="brands-company-item"><img src={img2} alt="company-logo" /></div>
                                    </SwiperSlide>
                                </Swiper>
                            </Fade>
                            <div className="swiper-button-next d-none d-lg-block"><img src={next_prev} className="brands-next-icon" alt="next" /></div>
                            <div className="swiper-button-prev d-none d-lg-block"><img src={next_prev} className="brands-prev-icon" alt="prev" /></div>
                        </div>
                        <div className="tab-pane" id="2a">
                            <h3>We use the class nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
                        </div>
                        <div className="tab-pane" id="3a">
                            <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
                        </div>
                        <div className="tab-pane" id="4a">
                            <h3>We use css to change the background color of the content to be equal to the tab</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
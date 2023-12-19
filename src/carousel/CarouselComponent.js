import "./carousel.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import img1 from "./media/image1.png"
import cigar from "./media/cigar.mp4"
import Fade from 'react-reveal/Fade';


export default function CarouselComponent() {
    return (
        <>
            <section className="carousel-container">
                <div className="row">
                    <Fade bottom duration={1000}>
                        <div className="col-12 col-lg-6">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                freeMode={true}
                                loop={true}
                                pagination={{ clickable: true }}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Pagination]}
                                className="mySwiper3"
                            >
                                <span className="carousel-button">Products</span>
                                <SwiperSlide>
                                    <div className="carousel-company-item">
                                        <p className="carousel-text">Make the choice of cigars
                                            and accessories with us come to life</p>
                                        <img src={img1} alt="company-logo" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="carousel-company-item">
                                        <p className="carousel-text">Make the choice of cigars
                                            and accessories with us come to life</p>
                                        <img src={img1} alt="company-logo" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="carousel-company-item">
                                        <p className="carousel-text">Make the choice of cigars
                                            and accessories with us come to life</p>
                                        <img src={img1} alt="company-logo" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Fade>
                    <Fade bottom duration={1000}>
                        <div className="col-12 col-lg-6 d-none d-lg-block carousel-video-item">
                            <video autoPlay muted loop>
                                <source src={cigar} type="video/mp4" />
                            </video>
                        </div>
                    </Fade>
                </div>

            </section>
        </>
    )
} 
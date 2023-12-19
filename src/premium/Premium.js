import "./premium.scss"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import img1 from './media/image1.png'
import img2 from './media/image2.png'
import img3 from './media/image3.png'


import rightIcon from "./media/rightIcon.png"
export default function Premium() {

    return (
        <section className="premium">
            <div className="container">
                <div className="premium-header">
                    <div className="premium-products">PRODUCTS</div>
                    <div className="premium-title">
                        <h2 className="title">Premium</h2>
                        <span className="premium-btn">More <img src={rightIcon} alt="rightClick" className="right-icon d-none d-lg-block" /></span>
                    </div>
                </div>
                <Swiper
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
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
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="premium-card">
                            <img src={img1} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Montecristo</p>
                                <p className="card-title">Montecristo</p>
                                <p className="card-price">3750.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="premium-card">
                            <img src={img2} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Ramon Allones No 2 Edition Limitada 2019</p>
                                <p className="card-title">Ramon Allones</p>
                                <p className="card-price">80.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="premium-card">
                            <img src={img3} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Davidoff Oro Blanco</p>
                                <p className="card-title">Davidoff</p>
                                <p className="card-price">850.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="premium-card">
                            <img src={img1} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Royal Release Robusto</p>
                                <p className="card-title">Davidoff ReleaRobusto</p>
                                <p className="card-price">140.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}
import "./bestSeller.scss"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import img1 from './media/image1.png'
import img2 from './media/image2.png'
import img3 from './media/image3.png'


import rightIcon from "./media/rightIcon.png"
export default function BestSeller() {

    return (
        <section className="best-seller">
            <div className="container">
                <div className="best-seller-header">
                    <div className="best-seller-products">PRODUCTS</div>
                    <div className="best-seller-title">
                        <h2 className="title">Best seller</h2>
                        <span className="best-seller-btn">More <img src={rightIcon} alt="rightClick" className="right-icon d-none d-lg-block" /></span>
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
                        <div className="best-seller-card">
                            <img src={img1} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Club Kings</p>
                                <p className="card-title">Romeo y Julieta</p>
                                <p className="card-price">140.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-seller-card">
                            <img src={img2} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Partagas Capitols</p>
                                <p className="card-title">Partagas</p>
                                <p className="card-price">140.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-seller-card">
                            <img src={img3} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Centrofinos</p>
                                <p className="card-title">Vegueros</p>
                                <p className="card-price">22.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="best-seller-card">
                            <img src={img3} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Tapados</p>
                                <p className="card-title">Vegueros</p>
                                <p className="card-price">18.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}
import "./newProducts.scss"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import img1 from './media/image1.png'
import img2 from './media/image2.png'
import img3 from './media/image3.png'
import img4 from './media/image4.png'


import rightIcon from "./media/rightIcon.png"
export default function NewProducts() {

    return (
        <section className="new-products">
            <div className="container">
                <div className="new-products-header">
                    <div className="new-products-products">PRODUCTS</div>
                    <div className="new-products-title">
                        <h2 className="title">New</h2>
                        <span className="new-products-btn">More <img src={rightIcon} alt="rightClick" className="right-icon d-none d-lg-block" /></span>
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
                        <div className="new-products-card">
                            <img src={img1} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Club Kings</p>
                                <p className="card-title">Romeo y Julieta</p>
                                <p className="card-price">35.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="new-products-card">
                            <img src={img2} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Robusto</p>
                                <p className="card-title">Buena Vista</p>
                                <p className="card-price">22.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="new-products-card">
                            <img src={img3} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Dark Fired Kentucky Toro</p>
                                <p className="card-title">Buena Vista</p>
                                <p className="card-price">17.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="new-products-card">
                            <img src={img4} alt="cigar" className="card-img"/>
                            <div className="card-settings">
                                <p className="card-type">Coronas Claro Box</p>
                                <p className="card-title">Quai Dorsay Claro Qutu</p>
                                <p className="card-price">675.00 ₼</p>
                                <span className="card-buy">Buy Now</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}
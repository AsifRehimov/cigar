import "./ourStory.scss"

import vector from './media/Vector.png'
import vector_grad from './media/vector_gradient.png'
import img1 from './media/img1.png'
import res_img from './media/res_img.png'

export default function OurStory() {
    return (
        <><section className="our-story">
            <img src={img1} alt="vector" className="our-story-img d-none d-md-block"/>
            <img src={vector_grad} alt="vector" className="our-story-vector-gradient d-none d-md-block"/>
            <img src={vector} alt="vector" className="our-story-vector d-none d-md-block"/>
            <div className="our-story-text-item d-none d-md-block">
                <p className="our-story-title">OUR STORY</p>
                <p className="our-story-text">The best cigar in the world is the one you prefer on special occasions and enjoy the most.</p>
            </div>
            <img src={res_img} alt="vector" className="our-story-res-img d-block d-md-none"/>
        </section></>
    )
}
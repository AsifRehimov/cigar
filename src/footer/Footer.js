import "./footer.scss"
import logo from "./media/logo.png"
import instagram from "./media/instagram.png"
import facebook from "./media/facebook.png"
import whatsapp from "./media/whatsapp.png"
import play_market from "./media/playmarket.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-divided-line"></div>
            <div className="container">
                <div className="footer-container  row">
                    <div className="col-12 col-lg-6 row">
                        <div className="col-12 footer-logo-container d-flex justify-content-center justify-content-lg-start">
                            <img src={logo} alt="logo" className="footer-logo" />
                        </div>
                        <div className="col-12 footer-link">
                            <a href="!#" className="footer-link-item">Cigars</a>
                            <a href="!#" className="footer-link-item">Cigarrillos</a>
                            <a href="!#" className="footer-link-item">Gift sets</a>
                            <a href="!#" className="footer-link-item">Accessories</a>
                            <a href="!#" className="footer-link-item">Tobacco</a>
                            <a href="!#" className="footer-link-item">Privacy Policy</a>
                            <a href="!#" className="footer-link-item">About</a>
                            <a href="!#" className="footer-link-item">Contact</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                        <div className="footer-link-container">
                            <div className="footer-social-container">
                                <a href="!#"><img src={whatsapp} alt="whatsapp" /></a>
                                <a href="!#"><img src={facebook} alt="facebook" /></a>
                                <a href="!#"><img src={instagram} alt="instagram" /></a>
                            </div>
                            <a href="!#" className="footer-app-link"><img src={play_market} alt="play-market" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-company-container">
                    <p>Site created by  <b> Safaroff Agency.</b></p>
                    <p>© 2023. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
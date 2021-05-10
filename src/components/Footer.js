import React from 'react'
import { Image } from 'cloudinary-react'
import '../styles/footer.scss'


const Footer = () => {
    return (
        <div className="footer">
            <Image publicId="images/wave_jezcfu" className="footer-img-waves" />
            <Image publicId="images/monta_p0a1wi" className="footer-img-back" />
            <div className="footer-logo">
                <Image publicId="images/logo4_o1dym9" className="footer-logo-img" />
            </div>
            <div className="footer-content">
                <ul className="footer-content-ul">
                <li className="footer-content-ul-li"><a href="#about"className="footer-content-ul-li-a">about</a></li>
                
                <li className="footer-content-ul-li"><a href="#contact" name="contact"className="footer-content-ul-li-a">contact</a></li>
                <li className="footer-content-ul-li"><a href="#hire"className="footer-content-ul-li-a "><span className="hire">hire us</span></a></li>
                </ul>
            </div>
    
        </div>
    )
}

export default Footer;
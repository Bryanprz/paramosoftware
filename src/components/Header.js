import logoWhite from '../images/logo-white.svg'
import '../styles/app.scss'
import { Video, Transformation } from 'cloudinary-react'
import { headerVideoMP4, headerVideoWebm } from '../data/cloudinary'

const Header = props => (
  <>
    <div className="logo-top-container">
      <img src={logoWhite} alt="paramosoftware-logo" className="logo-top" />
    </div>

    <header className="header-container">

      <div className="header-bg-video">
        <video className="header-bg-video-content" autoPlay muted loop>
          <source src={headerVideoMP4} type="video/mp4" />
          <source src={headerVideoWebm} type="video/webm" />
        </video>
      </div>

      <div className="header-primary-container">
        <h1 className="header-primary">
          We <br />
          <span className="header-text-blue">design</span> and
          <br />
          <span className="header-text-red">develop </span><br />
          web and mobile <br />applications
        </h1>
      </div>

      <div className="hire-us-link-container">
        <a className="hire-us-link">
          Hire Us
        </a>
      </div>

    </header>
  </>
)

export default Header

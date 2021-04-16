import logoWhite from './logo-white.svg';
import './App.scss';
import {Image, Video, CloudinaryContext} from 'cloudinary-react'
import {Cloudinary} from 'cloudinary-core'

function App() {
  const headerVideoURL = 'https://res.cloudinary.com/hkkczayke/video/upload/v1618553410/homepage/paramo-video_o15k7r.mp4'

  return (
    <CloudinaryContext cloudName="hkkczayke">
      <div className="App">
        <header className="header-container">

        <div>
          <video autoplay muted loop id="header-video">
            <source src={headerVideoURL} type="video/mp4" />
          </video>
        </div>

        <img src={logoWhite} alt="paramosoftware-logo" />

          <h1 className="header-primary">
            We <br />
            <span className="header-text-blue">design</span> and
            <br />
            <span className="header-text-red">develop </span><br />
            web and mobile <br />applications
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </CloudinaryContext>
  );
}

export default App;

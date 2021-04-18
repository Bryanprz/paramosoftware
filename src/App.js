import logoWhite from './images/logo-white.svg';
import './App.scss';
import {Image, Video, CloudinaryContext} from 'cloudinary-react';
import {Cloudinary} from 'cloudinary-core';
import Bryan from './images/4745204.jpg';
import Maria from './images/maria.png';
import Jonatan from './images/jon.jpg';
import Cristian from './images/profile.png';


function App() {
  const headerVideoURL = 'https://res.cloudinary.com/hkkczayke/video/upload/v1618553410/homepage/paramo-video_o15k7r.mp4'

  return (
    <div>
        <CloudinaryContext cloudName="hkkczayke">
          <div className="App">
            <header className="header-container">

            <div>
              <video autoplay muted loop id="header-video">
                <source src={headerVideoURL} type="video/mp4" />
              </video>
            </div>

            <img src={logoWhite} alt="paramosoftware-logo" className="logo-top" />

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
        <section className="cards">
                    <div className="container">
                        <div className="card"> {/*bryan */}
                            <div className="content"> 
                                <div className="imgBx"><img src={Bryan}alt='profile'></img></div>
                                <div className="contentBx">
                                    <h3 className="title">Bryan<br/><span class="span">Lorem, ipsum dolor.</span></h3>
                                </div>
                            </div>
                            <ul className="list">
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li  className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="card"> {/* Maria */}
                            <div className="content">
                                <div className="imgBx"><img src={Maria} alt='profile'></img></div>
                                <div className="contentBx">
                                    <h3 className="title">Maria Isabel<br/><span class="span">Lorem, ipsum dolor.</span></h3>
                                </div>
                            </div>
                            <ul className="list">
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="card"> {/* jonatan */}
                            <div className="content">
                                <div className="imgBx"><img src={Jonatan} alt='profile'></img></div>
                                <div className="contentBx">
                                    <h3 className="title">Jonatan Osorio<br/><span class="span">Lorem, ipsum dolor.</span></h3>
                                </div>
                            </div>
                            <ul className="list">
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="card"> {/* cristian */}
                            <div className="content">
                                <div className="imgBx"><img src={Cristian} alt='profile'></img></div>
                                <div className="contentBx">
                                    <h3 className="title">Cristian Loaiza<br/><span class="span">Lorem, ipsum dolor.</span></h3>
                                </div>
                            </div>
                            <ul className="list">
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li className="sublist">
                                    <a href="https://github.com/Bryanprz" className="a"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </section>
    </div>
  );
}

export default App;

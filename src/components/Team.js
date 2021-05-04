import React, { Component } from 'react';
import '../styles/app.scss'
import { Image } from 'cloudinary-react'
import Tilt from 'react-vanilla-tilt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';

export default class Team extends Component {
    render() {
        return (
            <section>
                    
                    <section className="Team">
                        <h2 className="title-team"><sup>team</sup> of <sub> work</sub></h2>
                            <div className="container">
                                <Tilt style={{background: 'none'}}>{/*bryan */}
                                    <div className="card"> 
                                        <div className="content">
                                            <div className="imgBx">
                                            <Image publicId="images/bryan_s0pepr.jpg"  className="img" />
                                            </div>
                                            <div className="contentBx">
                                                <h3 className="title">Bryan Perez<br/><span class="span">Bryan is a veteran software developer with over six years working as a professional engineer.</span></h3>
                                            </div>
                                        </div>
                                        <ul className="list">
                                            <li className="sublist">
                                                <a href="https://github.com/Bryanprz/" className="a" target="__new"><FontAwesomeIcon icon={faGithub}/></a>
                                            </li>
                                            <li className="sublist">
                                                <a href="https://twitter.com/BryanPrz" className="a" target="__new"><FontAwesomeIcon icon={faTwitter}/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt  style={{background: 'none'}}> {/*Maria*/}
                                    <div className="card">  
                                        <div className="content">
                                            <div className="imgBx">
                                            <Image publicId="images/maria_wdfiyk_fzgigf.png" className="img m" />
                                            </div>

                                            <div className="contentBx">
                                                <h3 className="title">Maria Isabel<br/><span class="span">
                                                    He has extensive experience in the development of pages based on HTML and CSS with modern web design techniques
                                                        and a great charisma to understand the needs of the user.
                                                </span></h3>
                                            </div>
                                        </div>
                                        <ul className="list">
                                            <li  className="sublist">
                                                <a href="https://github.com/mashaparamosoftware" className="a" target="__new"><FontAwesomeIcon icon={faGithub}/></a>
                                            </li>
                                            <li className="sublist">
                                                <a href="https://twitter.com/mariais28040840?s=20" className="a" target="__new"><FontAwesomeIcon icon={faTwitter}/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                                <Tilt  style={{background: 'none'}}>{/*jonatan */}
                                    <div className="card">   
                                        <div className="content">
                                            <div className="imgBx">
                                            <Image publicId="images/jon_jpzzsh.jpg" className="img j"  />
                                            </div>

                                            <div className="contentBx">
                                                <h3 className="title">Jonatan Osorio<br/><span class="span">Is a front-end web developer, who likes to learn constantly.
                                                He is passionate about innovating in each project developed</span></h3>
                                            </div>
                                        </div>
                                        <ul className="list">
                                            <li  className="sublist">
                                                <a href="https://github.com/jonatanparamosoftware" className="a" target="__new"><FontAwesomeIcon icon={faGithub}/></a>
                                            </li>
                                            <li className="sublist">
                                                <a href="https://twitter.com/ArcilaJonatan" className="a" target="__new"><FontAwesomeIcon icon={faTwitter}/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </Tilt>
                            </div>
                    </section>
                    
            </section>
        )
    }
}

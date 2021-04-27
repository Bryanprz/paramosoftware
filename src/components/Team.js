import React, { Component } from 'react';
import '../styles/app.scss'
import { Image } from 'cloudinary-react'
import Tilt from 'react-vanilla-tilt';

export default class Team extends Component {
    render() {
        return (
            <section>
                    
                    <section className="Team">
                        <h2 className="title-team"><sup>team</sup> of <sub> work</sub></h2>
                            <div className="container">
                                <Tilt style={{background: 'none'}}>
                                    <div className="card"> {/*bryan */}
                                        <div className="content">
                                            <div className="imgBx">
                                            <Image publicId="images/bryan_s0pepr.jpg"  className="img" />
                                            </div>
                                            <div className="contentBx">
                                                <h3 className="title">Bryan Perez<br/><span class="span">Lorem, ipsum dolor.</span></h3>
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
                                </Tilt>
                                <Tilt  style={{background: 'none'}}>
                                    <div className="card">   {/*Maria*/}
                                        <div className="content">
                                            <div className="imgBx">
                                            <Image publicId="images/maria_wdfiyk_fzgigf.png" className="img m" />
                                            </div>

                                            <div className="contentBx">
                                                <h3 className="title">Maria Isabel<br/><span class="span">Lorem, ipsum dolor.</span></h3>
                                            </div>
                                        </div>
                                        <ul className="list">
                                            <li  className="sublist">
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
                                </Tilt>
                                <Tilt  style={{background: 'none'}}>
                                    <div className="card">   {/*jonatan */}
                                        <div className="content">
                                            <div className="imgBx">
                                            <Image publicId="images/jon_jpzzsh.jpg" className="img j"  />
                                            </div>

                                            <div className="contentBx">
                                                <h3 className="title">Jonatan Osorio<br/><span class="span">Lorem, ipsum dolor.</span></h3>
                                            </div>
                                        </div>
                                        <ul className="list">
                                            <li  className="sublist">
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
                                </Tilt>
                            </div>
                    </section>
                    
            </section>
        )
    }
}

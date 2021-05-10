import React, { Component } from 'react';
import '../styles/app.scss';



export default class Contacts extends Component {
    render() {
        return (
            <div id="contact">
                <h2 className="title-contacs">contact us!</h2>
                <section className="icons">
                        
                        <ul className="icons-ul">
                            <li className="icons-ul__li">
                                <a href="https://www.facebook.com/paramo.softwar" target="__new">
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span  className="fa fa-facebook icons-ul__li--span" aria-hidden="true"></span>
                                </a>
                            </li>

                            <li className="icons-ul__li">
                                <a href="https://twitter.com/ParamoSoftware" target="__new">
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="fa fa-twitter icons-ul__li--span" aria-hidden="true"></span>
                                </a>
                            </li>

                            <li className="icons-ul__li">
                                <a href="https://www.instagram.com/paramosoftware" target="__new">
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span  className="fa fa-instagram icons-ul__li--span" aria-hidden="true"></span>
                                </a>
                            </li>

                            <li className="icons-ul__li">
                                <a href="mailto:paramosoftware@gmail.com" target="__new">
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="icons-ul__li--span"></span>
                                    <span className="fa fa-envelope icons-ul__li--span" aria-hidden="true"></span>
                                </a>
                            </li>
                        </ul>
                </section> 
            </div>
        )
    }
}

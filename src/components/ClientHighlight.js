import React, { Component } from 'react'
import { Image } from 'cloudinary-react'


export default class clientHighlight extends Component {
    render() {
        return (
            <div>
                <div className="ClientHighlight">
                   <div className="ClientHighlight-header">
                        <h2 className="ClientHighlight-header-title">
                            client highlight
                        </h2>
                        <Image publicId="images/p2p-screenshot_ug7cqk" alt="" className="ClientHighlight-header-img-one"/>
                        <p className="ClientHighlight-header-paragraph">
                            <span className="ClientHighlight-header-paragraph-span">PLACES 2 PLAY</span> <br/>
                            largest sports search <br/> engine for child and <br/> adult athletes in the us</p>
                   </div>
                   <div className="ClientHighlight-description">
                        <Image publicId="images/p2p-portfolio_fxlyv5" alt="img-haeder" className="ClientHighlight-description-img-two"/>
                        <p className="ClientHighlight-description-paragraph">
                            Entrepreneur Robert Mcknight had a vision for over 
                            10 years of building the largest sports search engine 
                            for athletes looking for places to play sports. We worked 
                            with Robert to build his vision into a minimun viable product. 
                            Today, he is CEO of  
                            <a href="https://www.places2play.com/" className="ClientHighlight-description-paragraph-a"target="__new" >Places2Play.com</a> 
                             and actively pitching  
                            investors.
                        </p>
                   </div>
                   <div className="ClientHighlight-testimonial">
                        <h2 className="ClientHighlight-testimonial-title">
                            client testimonial
                        </h2>
                        <div className="ClientHighlight-testimonial-photo-client">
                            <Image publicId="images/p2p-ceo_l1kims" alt="" className="ClientHighlight-testimonial-photo-client-img-three"/>
                            <p className="ClientHighlight-testimonial-photo-client-paragraph">Robert M. <br/> <a href="https://www.places2play.com/" className="ClientHighlight-testimonial-photo-client-paragraph-a" target="__new">Places2Play.com </a><br/>CEO</p>
                        </div>
                        <p className="ClientHighlight-testimonial-paragraph">
                            <i>
                                "Paramo Software has worked on a full-stack project with me for over the last year. 
                                They helped build the framework for new search engine website.
                                They created the ability for our users to find results by zip, 
                                leave reviews as well as developed a gps mapping feature via MapPoint. 
                                They are always very responsive, and wiling to find solutions to hard questions.
                                Without a doubt / will bring all of my future projects to Paramo Software."
                            </i>
                        </p>
                   </div>
                </div>
                
            </div>
        )
    }
}

import React from "react";
import './LogoMarquee.css'
import logo1 from './Logos/logo1.png'
import logo2 from './Logos/logo2.png'
import logo3 from './Logos/logo3.png'

export default function LogoMarquee(){
    let Logos=[logo1,logo2,logo3]

    return(
        <div className="marquee">
            <div className="marquee_track">
                {[...Logos,...Logos,...Logos,...Logos].map((logo)=>(
                    <img src={logo} className="marquee__logo"/>
                ))}
            </div>
        </div>
    )
}
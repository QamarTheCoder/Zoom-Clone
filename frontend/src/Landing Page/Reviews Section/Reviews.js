import React from "react";
import LogoMarquee from "./LogoMarquee";
import review from './Logos/review.png'

export default function Reviews(){
    return (
        <div className="d-flex align-items-center justify-content-center flex-column vh-100 ">
            
            <p className="mb-2" style={{fontSize:'50px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',marginTop:'150px'}}>Hated by millions. Built for you.</p>
            <LogoMarquee/>
            <img className=" p-5" style={{marginBottom:'9rem',marginTop:'12rem'}} src={review}/>
        </div>
    )
}
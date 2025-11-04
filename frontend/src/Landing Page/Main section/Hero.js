import React from "react";
import chumr from "./chumr.png"
import chummm from "./chummm.png"
import Navbar from "../../Navbar";


export default function Hero(){
    return(
        <>
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column" style={{backgroundColor:'#2150C5'}}>
            <div>
                <img  style={{width:'150px',opacity:"0.7"}} className="mb-5" src={chummm}/>
                <img style={{width:'160px'}} src={chumr}/>
            </div>
            <div>
                <p style={{fontSize:'3rem',textAlign:'center', color:'white',fontFamily:'instrument sans'}}>Find out what's possible <br></br> when work connects</p>
            </div>
            <div>
                <button style={{border:'none' ,padding:'7px', width:'140px', height:'45px', borderRadius:'10px' , backgroundColor:'#002358', color:'white', fontWeight:'lighter'}}>Explore Product</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{border:'none' ,padding:'7px', width:'140px', height:'45px', borderRadius:'10px' , backgroundColor:'#CFE2FF', color:'#002358', fontWeight:'lighter'}}>Pricing</button>
            </div>
        </div>
        </>
    )
}
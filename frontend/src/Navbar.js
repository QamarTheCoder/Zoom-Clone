import React, { Children, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar(){


    const [click,SetClick]=useState()
    return(

        <div className="w-100 d-flex" style={{height:"80px", backgroundColor:"#0E2D72", position:"fixed",top:0, color:"white",opacity:'0.9',zIndex:'10'}}>
            <div className="d-flex  align-items-center justify-content-between w-100 px-5">
                <div className="d-flex">
                    <div>
                    <Link  to="Hero" smooth={true} duration={600} offset={-80} className="nav-link"><p className="fs-1  " style={{fontFamily:'instrument sans',cursor:'pointer'}}>choom</p></Link>
                    </div>

                    <div className="d-flex">
                    <Link  onClick={()=>{SetClick(2)}} to="About" smooth={true} duration={600} offset={-80} className="nav-link"><p  className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===2?"#95AFEA":'white',cursor:'pointer'}}>About us</p></Link>
                    <Link onClick={()=>{SetClick(3)}} to="Product" smooth={true} duration={600} offset={-80} className="nav-link"><p   className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===3?"#95AFEA":'white',cursor:'pointer'}}>Product</p></Link>
                    <Link  onClick={()=>{SetClick(4)}} to="Pricing" smooth={true} duration={600} offset={-80} className="nav-link"><p  className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===4?"#95AFEA":'white',cursor:'pointer'}}>Pricing</p></Link>
                    <Link onClick={()=>{SetClick(5)}} to="Reviews" smooth={true} duration={600} offset={-80} className="nav-link"><p  className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===5?"#95AFEA":'white',cursor:'pointer'}}>Reviews</p></Link>
                    </div>
                </div>

                <div className="d-flex " style={{justifyContent:'flex-end'}}>
                <p className="fs-5 mt-2 p-2" style={{fontFamily:'instrument sans',}}>Sign up</p>
                <p className="fs-5 mt-2 p-2" style={{fontFamily:'instrument sans',}}>Login</p>
                </div>
            </div>
            
        </div>

    )
}
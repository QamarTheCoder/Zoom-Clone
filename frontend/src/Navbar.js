import React, { Children, useState } from "react";
import { Link as ScrollLink ,scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar(){


    const [click,SetClick]=useState()
    let location= useLocation()
    let navigate=useNavigate()
    let handleScroll=(section)=>{
        if (location.pathname==='/'){
           scroller.scrollTo(section,{smooth: true,duration: 600,offset: -80,}) 
        }else{
            navigate('/');
            setTimeout(()=>{scroller.scrollTo(section,{smooth: true,duration: 600,offset: -80,})},100)
        }
    }

    return(

        <div className="w-100 d-flex" style={{height:"80px", backgroundColor:"#0E2D72", position:"fixed",top:0, color:"white",opacity:'0.9',zIndex:'10'}}>
            <div className="d-flex  align-items-center justify-content-between w-100 px-5">
                <div className="d-flex">
                    <div>
                    <p className="fs-1  " style={{fontFamily:'instrument sans',cursor:'pointer'}} onClick={()=>{handleScroll('Hero')}}>choom</p>
                    </div>

                    <div className="d-flex">
                            <p onClick={()=>{handleScroll('About');SetClick(2)}} className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===2?"#95AFEA":'white',cursor:'pointer'}}>About us</p>
                            <p onClick={()=>{handleScroll('Product');SetClick(3)}}   className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===3?"#95AFEA":'white',cursor:'pointer'}}>Product</p>
                            <p onClick={()=>{handleScroll('Pricing');SetClick(4)}}  className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===4?"#95AFEA":'white',cursor:'pointer'}}>Pricing</p>
                            <p  onClick={()=>{handleScroll('Reviews');SetClick(5)}} className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px',color:click===5?"#95AFEA":'white',cursor:'pointer'}}>Reviews</p>
                    </div>
                </div>

                <div className="d-flex " style={{justifyContent:'flex-end'}}>
                <RouterLink  style={{fontFamily:'instrument sans', color:location.pathname==="/signup"?"#95AFEA":'white',cursor:'pointer',textDecoration:'none'}} to="/signup"> <p className="fs-5 mt-2 p-2">Sign up</p></RouterLink>
                <RouterLink  style={{fontFamily:'instrument sans', color:location.pathname==="/signin"?"#95AFEA":'white',cursor:'pointer',textDecoration:'none'}} to="/signin"><p className="fs-5 mt-2 p-2">Login</p></RouterLink> 
                </div>
            </div>
            
        </div>

    )
}
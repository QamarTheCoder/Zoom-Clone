import React from "react";

export default function Navbar(){
    return(
        <div className="w-100 d-flex" style={{height:"80px", backgroundColor:"#0E2D72", position:"sticky",top:0, color:"white",opacity:'0.9'}}>
            <div className="d-flex  align-items-center justify-content-between w-100 px-5">
                <div className="d-flex">
                    <div>
                    <p className="fs-1  " style={{fontFamily:'instrument sans',}}>choom</p>
                    </div>

                    <div className="d-flex">
                    <p className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px'}}>About us</p>
                    <p className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px'}}>Product</p>
                    <p className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px'}}>Pricing</p>
                    <p className="fs-5 ms-5 " style={{fontFamily:'instrument sans',marginTop:'20px'}}>Reviews</p>
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
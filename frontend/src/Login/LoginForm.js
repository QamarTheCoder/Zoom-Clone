import React from "react";

export default function LoginForm(){
    return(

        <div className="d-flex flex-column vh-100 justify-content-center" style={{width:'250px'}}>
            <p style={{fontSize:'35px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',margin:'0px'}}>Sign in</p>
            <input className="mt-3" style={{padding:'2px'}}  placeholder="Username"/>
            <input className="mt-2 mb-3" style={{padding:'2px'}} placeholder="password"/>
            <button style={{backgroundColor:'#2D7DF5', color:"white", border:'none',borderRadius:'3px', padding:'3px'}}>Next</button>
            <footer style={{position: "absolute",bottom: 0,width: "250px",textAlign: "center",fontSize: "15px",fontFamily: "instrument sans",fontWeight: "lighter",}}> 
                Made with &#9829; by qamarthecoder
            </footer>
            
        </div>
       

    )
}
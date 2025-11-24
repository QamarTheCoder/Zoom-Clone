import React from "react";
import qamar from './qamar.png'

export default function AboutUs(){
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center p-5" style={{backgroundColor:'#2150C5',color:'white'}}>
            <div>
                <img src={qamar} style={{width:'400px',aspectRatio:'1/1',objectFit:'cover',borderRadius:"100%"}}/>
            </div>
            <div>
                <p style={{fontSize:'40px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',padding:'30px'}}>“Choom Workplace turns my brainwaves into polished gems. From meetings, I can create Clips, Notes, Docs, or even whiteboards faster than you can say, ‘transcript.’”</p>
                <p  className="mt-4" style={{fontSize:'25px', fontFamily:'instrument sans',textAlign:"center"}}>Freaky Qamar <br/>Founder</p>
            </div>

        </div>
    )
}
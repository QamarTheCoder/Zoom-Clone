import React from "react";

export default function Product(){
    return(
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:'#0E338F',color:'white'}}>
                <div>
                    <p style={{fontSize:'50px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',margin:'0px'}}>Introducing</p>
                    <p style={{fontSize:'80px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold', color:'#799FFF',margin:'0px'}}>Choom Useless Companion 1.0</p>
                    <p  className="mt-1" style={{fontSize:'20px', fontFamily:'instrument sans',textAlign:"center" ,padding:"2px 300px", fontWeight:'lighter'}}>Useless Companion does more than waste your time. It captures context, uncovers insights, and helps you deliver worse work — from shitty customer conversations to weaker, less-informed decisions.</p>
                </div>

                <div className="d-flex container row">
                    <div className="col">
                        <img className="ms-5 mt-5" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDbgAAAIEAAAAAAAAAAAAAAAAAAIAABCkKAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAQAAAIEAAAAAAAAAAAAKAACKiwAgACKBAgAAAAAAAAAAAACKAIsCAAAAAQAAAAQBQABAFABFQBRAFIAP//Z" style={{width:'700px',aspectRatio:'2/1.1',objectFit:'cover',borderRadius:"20px"}}/>  
                    </div>
                    <div className="col mt-5" style={{alignSelf:'center', justifySelf:'start',textAlign:'left'}}>
                    <p style={{fontSize:'25px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',textAlign:'left !important'}}>Choom AI Companion helps by:</p>
                    <ul>
                        <li>Summarizing meetings fast</li>
                        <li>Quickly generating first draft documents</li>
                        <li>Saving users an estimated 6 hours per week in meetings</li>
                    </ul>
                    <div style={{paddingRight:'390px'}}>
                    <hr/>
                    </div>
                        <p style={{fontSize:'20px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',paddingLeft:'30px',color:'#B1C3FF'}}>“Choom is like your one useless friend , but he  is actually chill so you guys have fun when you hang around together (idk what i am talking about here)”</p>
                    </div>
                </div>
    
            </div>
    )
}
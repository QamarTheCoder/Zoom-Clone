import React, { useState } from "react";
import axios from 'axios'
import {useNavigate } from "react-router-dom"

export default function SignupForm(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    let navigate= useNavigate()

    const handleonSubmit=(e)=>{
        e.preventDefault();
        console.log(process.env.REACT_APP_BU);
         if (!username.trim() || !password.trim()) {
        alert("Please fill out all fields");
        return;
    }

        axios.post(`${process.env.REACT_APP_BU}/signup`,{username,password},{withCredentials:true})
        .then((res)=>{
                if (res.data.success){
                    console.log('Success')
                    navigate('/dashboard')
                }else if (res.data.success==false){
                   alert(res.data.msg)
                   return;
                }
        })
    }
    return(

        <div className="d-flex flex-column vh-100 justify-content-center" style={{width:'250px'}}>
            <p style={{fontSize:'35px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',margin:'0px'}}>Sign Up</p>
            <input type="text" className="mt-2" style={{padding:'2px'}} value={username} onChange={(e)=>{setUsername(e.target.value)}}   placeholder="username "/>
            <input type="password" className="mt-2 mb-3" style={{padding:'2px'}} value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="password"/>
            <button onClick={(e)=>handleonSubmit(e)} style={{backgroundColor:'#2D7DF5', color:"white", border:'none',borderRadius:'3px', padding:'3px'}}>Next</button>
            <footer style={{position: "absolute",bottom: 0,width: "250px",textAlign: "center",fontSize: "15px",fontFamily: "instrument sans",fontWeight: "lighter",}}> 
                Made with &#9829; by qamarthecoder
            </footer>
            
        </div>
       

    )
}
import axios from "axios";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom"

export default function LoginForm(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let navigate= useNavigate()
    const handleonSubmit=(e)=>{
        e.preventDefault()

        if(!username.trim() || !password.trim()){
            alert('Please fill out all the fields!')
            return;
        }
        console.log('kk')
console.log(process.env.REACT_APP_BU);

        axios.post(`${process.env.REACT_APP_BU}/login`,{username,password},{withCredentials:true})
        .then((res)=>{
            if(res.data.success){
                //DO A REACT TOAST HERE
                console.log('OAKY')
                navigate('/dashboard')
            }else{
                alert(res.data.msg)
            }
        })
    }
    return(

        <div className="d-flex flex-column vh-100 justify-content-center" style={{width:'250px'}}>
            <p style={{fontSize:'35px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',margin:'0px'}}>Sign in</p>
            <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className="mt-3" style={{padding:'2px'}}  placeholder="Username"/>
            <input value={password}  onChange={(e)=>{setPassword(e.target.value)}} className="mt-2 mb-3" style={{padding:'2px'}} placeholder="password"/>
            <button onClick={(e)=>{handleonSubmit(e)}} style={{backgroundColor:'#2D7DF5', color:"white", border:'none',borderRadius:'3px', padding:'3px'}}>Next</button>
            <footer style={{position: "absolute",bottom: 0,width: "250px",textAlign: "center",fontSize: "15px",fontFamily: "instrument sans",fontWeight: "lighter",}}> 
                Made with &#9829; by qamarthecoder
            </footer>
            
        </div>
       

    )
}
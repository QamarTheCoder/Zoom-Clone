import React from "react";
import LoginForm from "./LoginForm.js";
import g1 from './g1.png'
import Navbar from "../Navbar.js";
export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-6 p-0 d-flex align-items-center justify-content-center bg-light">
          <img
            src={g1}
            style={{ width: "50%", objectFit: "cover", marginLeft:'35%' }}
          />
        </div>

        <div className="col-6 d-flex align-items-center justify-content-center">
          <LoginForm />
        </div>
      </div>
    </div>
    </>
  );
}

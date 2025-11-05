
import React from "react";
import SignupForm from "./SignupForm";
import singin_image from "./singin_image.png";
import Navbar from "../Navbar.js";

export default function SingUp() {
  return (
    <>
        <Navbar/>
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-6 p-0 d-flex align-items-center justify-content-center bg-light">
          <img
            src={singin_image}
            style={{ width: "60%", objectFit: "cover", marginLeft:'50%' }}
          />
        </div>

        <div className="col-6 d-flex align-items-center justify-content-center">
          <SignupForm />
        </div>
      </div>
    </div>
    </>
  );
}

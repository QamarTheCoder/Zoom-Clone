import React from "react";
import ProPricing from "./ProPrice";

export default function Pricing(){
    return(
        <div className="vh-100 d-flex flex-column align-items-center justify-content-center p-5" style={{backgroundColor:'white'}}>
            <p className="mb-2" style={{fontSize:'50px', fontFamily:'instrument sans',textAlign:"center",fontWeight:'bold',margin:'0px'}}>Pricing</p>
            <div className="d-flex">
            <ProPricing Plan={"Basic"} Price={"Free"}/>
            <ProPricing Plan={"Pro"} Price={"$13.33"} f1="AI companion: " d1="Schedule meetings and syntesize" f2="Cloud Storage: " d2="10 GB"/>
            <ProPricing Plan={"Business"} Price={"$18.33"} f1="AI companion: " d1="Schedule meetings and syntesize" f2="Cloud Storage: " d2="10 GB" f3="Live Chat support " d3="" f4="Essential Apps: " d4="Free premium Apps"/>
            <ProPricing Plan={"Enterprise"} Price={"Talk to Us"} />
            </div>
        </div>
    )
}
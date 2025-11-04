import React from "react";
import Reviews from "./Reviews Section/Reviews";
import Product from "./Product Section/Product";
import Pricing from "./Pricing section/Pricing";
import Hero from "./Main section/Hero";
import AboutUs from "./About Us section/AboutUs";
import Navbar from "../Navbar";

export default function LandingPage(){
    return(
        <div className="">
            <Navbar/>
            <section id="Hero">
            <Hero/>

            </section>
            <section id="About">
            <AboutUs/>

            </section>
            <section id="Product">
            <Product/>

            </section>
            <section id="Pricing">
            <Pricing/>

            </section>
            <section id="Reviews">
            <Reviews/>

            </section>

        </div>
    )
}
import { useState,useEffect } from "react";
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { Button } from "@mui/material";
function Landing(){
    return <div>
        <Header></Header>
        <Navbar></Navbar>
        <div class="Hero" style={{
            backgroundImage:`url(../Images/LandingHero.jpg)`,
            backgroundSize:"cover",
            display:"flex"
        }}>
            <div 
            style={{
                width:"50%",
            }}>
                <h1>Legal Conultancy Services of India</h1>
                <div>A bundle of rights which make one's life, worth living and denying a person his access to courts and access to justice, will deeply affect the quality of his human life.</div>
                <Button variant="outlined">Learn More</Button>
            </div>
        </div>
    </div>
}

export default Landing;
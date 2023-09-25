import { useState,useEffect } from "react";
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { Button, Grid } from "@mui/material";
function Landing(){
    return <div>
        <Header></Header>
        <Navbar></Navbar>
        <div class="Hero" style={{
            backgroundImage:`url(../Images/LandingHero.jpg)`,
            backgroundSize:"cover",
            display:"flex",
        }}>
            <Grid container spacing={2}>
                <Grid item 
                    xs={4}
                    justifyContent="center"
                    alignItems="center"
                    margin={10}
                    fontSize={"150%"}
                >
                <h1 style={{
                    fontSize:50
                }}>Legal Conultancy Services of India</h1>
                <div>A bundle of rights which make one's life, worth living and denying a person his access to courts and access to justice, will deeply affect the quality of his human life.</div>
                <Button variant="outlined"
                style={{
                    backgroundColor:"#431901",
                    color:"white",
                    marginLeft:100
                }}>Learn More</Button>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Landing;
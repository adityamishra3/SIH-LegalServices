import { useState,useEffect } from "react";
function Navbar(){
    return <div style={{
        backgroundColor:"#431901",
        height:50,
        display:"flex",
        justifyContent:"flex-start",  
        color:"white"
    }}>
        <div style={{
            padding:15
        }}>Home</div>
        <div style={{
            padding:15
        }}>About Us</div>
        <div style={{
            padding:15
        }}></div>

    </div>
}



export default Navbar;
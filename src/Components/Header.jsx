import React from "react";
function Header(){
    return <div style={{
        display:'flex',
        justifyContent:"space-between",
        height:125
    }}>
        <div style={{
        }}>
            <img src="./Images/20723131.jpg" alt="Emblem " style={{
                objectFit:"cover",
                maxHeight:100,
                paddingLeft:25,
                paddingTop:20,
                transform:"scale(0.7)"
            }} />
            <img src="./Images/Text.png" alt="Moto" style={{
                transform:"scale(0.7)",
                marginLeft:-50 
            }} />
        </div>
        <div style={{
            justifyContent:"space-between"

        }}>
            <img src="./Images/G20_India_Logo_0.png" alt="G20 Logo" style={{
                transform:"scale(0.8)"
            }} />
            <img src="./Images/Swach-Bharat.png" alt="SwachBharat logo" style={{
                position: "relative",
                width:"auto",
                height: 120,
                top:5,
                transform:"scale(0.8)",
                marginLeft:-50
            }}/>
        </div>
    </div>
}
export default Header;
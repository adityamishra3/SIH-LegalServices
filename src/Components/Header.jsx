import React from "react";
function Header(){
    return <div style={{
        display:'flex',
        justifyContent:"space-between",
        height:155
    }}>
        <div style={{
        }}>
            <img src="./Images/20723131.jpg" alt="Emblem " style={{
                objectFit:"cover",
                maxHeight:100,
                paddingLeft:25,
                paddingTop:20
            }} />
            <img src="./Images/Text.png" alt="Moto" />
        </div>
        <div style={{
            justifyContent:"space-between"

        }}>
            <img src="./Images/G20_India_Logo_0.png" alt="G20 Logo" />
            <img src="./Images/Swach-Bharat.png" alt="SwachBharat logo" style={{
                position: "relative",
                width:"auto",
                height: 120,
                top:-20
            }}/>
        </div>
    </div>
}
export default Header;
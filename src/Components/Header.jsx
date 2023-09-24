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
                <strong><span style={{
                    display:"inline-block",
                    top:-55,
                    position:"relative",
                    fontSize:17,
                    paddingBlock:14
                }}>विधि और न्याय मंत्रालय</span></strong>
                <strong><span style={{
                    position:"relative",
                    top:-17,
                    fontSize:22,
                    display:"inline-block",
                    left:-160,
                    paddingTop:9
                }}>Ministry of Law <br />and Justice</span></strong>
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
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Typography } from "@mui/material";
function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#431901",
        height: 50,
        display: "flex",
        justifyContent: "flex-start",
        color: "white",
      }}
    >
        <div style={{
          padding:10,  
        }}>
            <a href="/" style={{
                color:"white",
                textDecoration:"none"
            }}>
            <Typography>
                Home 
            </Typography>
            </a>
        </div>
        <div style={{
            padding:10
        }}>
            <Typography>
                About Us
            </Typography>
        </div>
        <div style={{
            padding:10
        }}>
            <Typography>
                Acts & Rules
            </Typography>
        </div>
    </div>
  );
}

export default Navbar;

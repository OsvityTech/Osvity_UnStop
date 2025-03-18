import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor";

import logo from "../assets/UnStopLogo.png";
 
import arrowIcon from "../assets/icon_arrow.png"; 


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  const handleMenuClick = (menu) => {
    console.log(`Clicked on ${menu}`);
    setDrawerOpen(false); 
  };

  return (
    <AppBar position="static" style={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "10px 5%" : `${scaleHeight(0)}px ${scaleWidth(10)}px`,
          borderRadius: `${scaleWidth(25)}px`,
          backgroundColor: "#FFFFFF",
          margin: isMobile ? "5px" : "2% 7%",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: scaleWidth(100), height: scaleHeight(51.3), cursor: "pointer" }}
        />

        {/* Mobile Menu Button */}
        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} size="large">
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <div style={{width: "250px", padding: "20px", display: "flex", flexDirection: "column" }}>
                {["Internships", "Jobs", "Competition", "Mentorship", "Practice", "More"].map((item) => (
                  <Typography
                    key={item}
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 6000,
                      fontSize: `${scaleFont(16)}px`,
                      lineHeight: "150%",
                      color: "#272f3a",
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                    onClick={() => handleMenuClick(item)}
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            </Drawer>
          </>
        ) : (
          /* Desktop Menu */
          <div style={{ display: "flex", gap: `${scaleWidth(40)}px` }}>
            {["Internships", "Jobs", "Competition", "Mentorship", "Practice", "More"].map((item) => (
              <Typography
                key={item}
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontSize: `${scaleFont(16)}px`,
                  lineHeight: "150%",
                  color: "#272f3a",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </Typography>
            ))}
          </div>
        )}

        {/* Register Button */}
        {!isMobile && (
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              gap: `${scaleWidth(10)}px`,
              padding: `${scaleHeight(12)}px ${scaleWidth(24)}px`,
              border: "1px solid #fff",
              borderRadius: `${scaleWidth(100)}px`,
              textTransform: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "Manrope",
                fontWeight: 700,
                fontSize: `${scaleFont(18)}px`,
                lineHeight: "160%",
                color: "#252641",
              }}
            >
              Register Now
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${scaleWidth(40)}px`,
                height: `${scaleWidth(40)}px`,
                background: "#252641",
                borderRadius: "100px",
                padding: `${scaleWidth(8)}px`,
              }}
            >
              <img src={arrowIcon} alt="Arrow" style={{ width: `${scaleWidth(35)}px`, height: `${scaleHeight(35)}px` }} />
            </div>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

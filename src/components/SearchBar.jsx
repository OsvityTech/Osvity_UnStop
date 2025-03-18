import React from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor";

const SearchBar = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: `${scaleHeight(50)}px ${scaleWidth(20)}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: `${scaleHeight(24)}px`,
        marginRight: scaleWidth(40),
        marginLeft:scaleWidth(40)
      }}
    >
      {/* For Business Button */}
      <Button
        variant="contained"
        startIcon={<BusinessCenterIcon />}
        sx={{
          backgroundColor: "#E8EDFF",
          color: "#3B60E4",
          borderRadius: `${scaleWidth(24)}px`,
          textTransform: "none",
          fontWeight: "600",
          fontSize: scaleFont(14),
          padding: `${scaleHeight(8)}px ${scaleWidth(16)}px`,
          boxShadow: "none",
          height: `${scaleHeight(48)}px`,
          "&:hover": { backgroundColor: "#D0DBFF" },
        }}
      >
        For Business
      </Button>

      {/* Heading */}
      <Typography variant="h3" fontWeight={700} color="#272F3A" textAlign="center" fontSize={scaleFont(35)}>
        Unlock Your Career
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        color="#555"
        textAlign="center"
        sx={{ maxWidth: `${scaleWidth(460)}px`, fontSize: scaleFont(20) }}
      >
        Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
      </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: `${scaleWidth(12)}px`,
        }}>
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: `${scaleWidth(12)}px`,
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
          // maxWidth: `${scaleWidth(700)}px`,
          backgroundColor: "#FFFFFF",
          padding: `${scaleHeight(8)}px`,
          borderRadius: `${scaleWidth(50)}px`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search opportunity"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#3B60E4" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: `50%`,
            height: `${scaleHeight(48)}px`,
            backgroundColor: "#FFFFFF",
            borderRadius: `${scaleWidth(50)}px`,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              borderRadius: `${scaleWidth(50)}px`,
              height: `${scaleHeight(48)}px`,
            },
          }}
        />
        <TextField
          placeholder="e.g. Pune, India"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon sx={{ color: "#3B60E4" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "50%",
            height: `${scaleHeight(48)}px`,
            borderRadius: `${scaleWidth(50)}px`,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { 
                borderLeft: "2px solid #3B60E4", // Left border only
                borderRight: "none",
                borderTop: "none",
                borderBottom: "none",
              },
              "&:hover fieldset": {
                borderLeft: "2px solid #3B60E4", // Ensures left border remains on hover
              },
              "&.Mui-focused fieldset": {
                borderLeft: "2px solid #3B60E4", // Keeps left border on focus
                borderRight: "none",
                borderTop: "none",
                borderBottom: "none",
              },
              boxShadow: "none",
              height: `${scaleHeight(48)}px`,
            },
            "& .MuiOutlinedInput-input": {
              "&:focus": { outline: "none" }, 
            },
          }}
        />
      </Box>
      <Button
          variant="contained"
          sx={{
            backgroundColor: "#3B60E4",
            color: "white",
            borderRadius: `${scaleWidth(50)}px`,
            fontSize: scaleFont(16),
            textTransform: "none",
            height: `${scaleHeight(48)}px`,
            padding: `0 ${scaleWidth(20)}px`,
            fontWeight: "600",
            "&:hover": { backgroundColor: "#3452C3" },
          }}
        >
          Search
        </Button>
        </Box>
    </Box>
  );
};

export default SearchBar;
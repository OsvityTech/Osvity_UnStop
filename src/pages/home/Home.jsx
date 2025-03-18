import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import { scaleWidth } from "../../helpers/Scalefactor";
import UsingUnstop from "../../components/usingUnstop";
import CategoryCards from "../../components/CategoryCards";
import ProfileList from "../../components/ProfileCards";
import CourseCard from "../../components/CourseCard";
import OpportunityCard from "../../components/OpportunityCard";
import UpdatedCard from "../../components/UpdatedCard";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: `${scaleWidth(20)}px`,
        justifyContent: "center",
        position: "relative",
        background:
          "linear-gradient(to top, transparent 50%, transparent 90%, #7a5feb 100%, #ad9ff3 100%)",
      }}
    >
      <Navbar />
      <SearchBar />
      <CategoryCards />
      <ProfileList />
      <UsingUnstop />
      <CourseCard />
      <OpportunityCard />
      <UpdatedCard />
      <Footer />

      <div
        style={{
          position: "absolute",
          left: "-3%",
          bottom: "0px",
          width: "220px",
          height: "150px",
          borderRadius: "70%",
          background: "#7a5feb",
          filter: "blur(45px)",
          opacity: "1",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "20%",
          bottom: "0px",
          width: "220px",
          height: "150px",
          borderRadius: "70%",
          background: "#7a5feb",
          filter: "blur(45px)",
          opacity: "1",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "20%",
          bottom: "0px",
          width: "220px",
          height: "150px",
          borderRadius: "70%",
          background: "#7a5feb",
          filter: "blur(45px)",
          opacity: "1",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "3%",
          bottom: "0px",
          width: "220px",
          height: "150px",
          borderRadius: "70%",
          background: "#7a5feb",
          filter: "blur(45px)",
          opacity: "1",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Home;

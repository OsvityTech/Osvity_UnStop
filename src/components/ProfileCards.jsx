import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { scaleWidth, scaleHeight, scaleFont } from "../helpers/Scalefactor.js";
import PersonIcon from '../assets/icons/person.svg';
import Competitions from '../assets/icons/competitions.svg';
import Intern from '../assets/icons/intern.svg';
import Jobs from '../assets/icons/jobs.svg';
import Practise from '../assets/icons/practise.svg';
import Star from "../assets/star.png";

// Import profile images
import Shiri from "../assets/shirilogo.png";
import Palak from "../assets/palaklogo.png";
import Vedansh from "../assets/vedansh.png";
import Yash from "../assets/yash.png";
import Rutwik from "../assets/rutwik.png";
import Dhananjay from "../assets/dhananjay.png";
import Dnyaneshwar from "../assets/dnyaneshwar.png";
import Faraz from "../assets/faraz.png";
import arrowIcon from "../assets/lightarrow.png";

const ProfileCard = ({ title, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        container: {
            padding: `${scaleHeight(24)}px ${scaleWidth(16)}px`,
            border: `${scaleWidth(1)}px solid #89a0ce`,
            borderRadius: `${scaleWidth(20)}px`,
            width: `${scaleWidth(293)}px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: `${scaleHeight(15)}px`,
            background: isHovered ? "#e6f0ff" : "#ffffff",
            transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            boxShadow: isHovered ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
        },
        contentWrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: `${scaleHeight(7)}px`,
            width: `${scaleWidth(185)}px`,
        },
        title: {
            fontFamily: "Manrope",
            fontSize: `${scaleFont(20)}px`,
            fontWeight: 700,
            color: "#1e242c",
            textAlign: "center",
            margin: 0,
        },
        description: {
            fontFamily: "Manrope",
            fontSize: `${scaleFont(12)}px`,
            color: "#475569",
            textAlign: "center",
            margin: "0",
        },
        button: {
            borderRadius: `${scaleWidth(100)}px`,
            marginTop: `${scaleHeight(10)}px`,
            textTransform: "none",
        },
    };

    return (
        <Card 
            style={styles.container} 
            elevation={0}  
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.contentWrapper}>
                
                <Avatar src={image} alt="Profile" sx={{ width: 64, height: 64 }} />
                
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', gap: "8px" }}>
                    <img src={Star} alt="Star" style={{ width: '15px', height: '15px' }} />
                    <Typography variant="h6" style={styles.title}>4.6</Typography>
                    <Typography variant="h6" style={styles.title}>(6)</Typography>
                </div>
                <Typography variant="h6" style={styles.title}>{title}</Typography>
                <Typography variant="body2" style={styles.description}>{description}</Typography>
            </div>
            
            <Button variant="outlined" style={styles.button}>Learn More</Button>
        </Card>
    );
};

const ViewAllButton = ({ onClick }) => {
    return (
      <Button
      variant="outlined"
      onClick={onClick}
      sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "50px",
          padding: "8px 16px",
          fontSize: "15px",
          fontWeight: "500",
          borderColor: "#1473e6",
          color: "#1473e6",
          textTransform: "none",
          "&:hover": {
              backgroundColor: "#1473e6",
              color: "#fff",
              borderColor: "#1473e6",
          },
      }}
  >
      View All
      <img
          src={arrowIcon}
          alt="Arrow Up Right"
          style={{
              width: "30px",
              height: "30px",
              marginLeft: "10px",
              
          }}
      />
  </Button>
    );
};

const ProfileList = () => {
    const [showAll, setShowAll] = useState(false);

    const categories = [
        { title: "Internships", description: "Gain Practical Experience", icon: Intern, image: Shiri },
        { title: "Mentorship", description: "Guidance from Top Mentors", icon: PersonIcon, image: Palak },
        { title: "Jobs", description: "Explore Diverse Careers", icon: Jobs, image: Vedansh },
        { title: "Competitions", description: "Battle for Excellence", icon: Competitions, image: Yash },
        { title: "Practice", description: "Refine Skill Daily", icon: Practise, image: Rutwik },
        { title: "Networking", description: "Connect with Professionals", icon: Palak, image: Dhananjay },
        { title: "Workshops", description: "Learn from Experts", icon: Intern, image: Dnyaneshwar },
        { title: "Research", description: "Contribute to Innovation", icon: Jobs, image: Faraz },
    ];

    const displayedCategories = showAll ? categories : categories.slice(0, 8);

    return (
        <div style={{ 
            marginTop: `${scaleHeight(50)}px`,
            marginRight: `6%`,
            marginLeft: `6%`
        }}>
            {/* Heading */}
            <Typography variant="h3" fontWeight={700} color="22233F" textAlign="center" fontSize={scaleFont(50)}>
                Top Mentors
            </Typography>

            {/* Subheading */}
            <Typography
                variant="body1"
                color="#555"
                textAlign="center"
                sx={{ 
                    maxWidth: '100%', 
                    fontSize: scaleFont(20),
                    marginBottom: `${scaleHeight(50)}px`, 
                    marginRight: `26%`,
                    marginLeft: `26%`
                }}
            >
                In search of excellence? Explore the highest-rated mentors as recognized by the learner community.
            </Typography>
        
            <div style={{ display: "flex", flexWrap: "wrap", gap: `${scaleWidth(20)}px`, justifyContent: "center" }}>
                {displayedCategories.map((category, index) => (
                    <ProfileCard key={index} {...category} />
                ))}
            </div>

            {/* View All Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <ViewAllButton onClick={() => setShowAll(!showAll)} />
            </div>
        </div>
    );
};

export default ProfileList;

import { Typography } from "@mui/material";
import React from "react";
import "./jobCard.css";
import Avatar from '@mui/material/Avatar';
const JobCard = () => {
  return (
    <>
      <div
        style={{
          width: "360px",
          height: "80vh",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "8px 15px",
        }}
      >
        <div className="logo-cont">
          <div style={{
            marginRight:"10px"
          }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className="info-cont">
            <Typography className="company-name">Blis</Typography>
            <Typography className="designation">
              Senior Frontend Digital Developer - Creative
            </Typography>
            <Typography className="location">
              Mumbai
            </Typography>
          </div>
        </div>

        <Typography className="salary-range">Estimated Salary: ₹10 - 14 LPA ⚠️</Typography>
        <Typography variant="h5" className="about-company">About Company:</Typography>
        <Typography className="desc">
          Blis is the audience-first platform that doesn't rely on personal
          data. We’re an integrated planning and buying platform that delivers
          scaled, relevant and high-performing audiences, helping the world’s
          largest brands and media agencies achieve their goals.
        </Typography>
      </div>
    </>
  );
};

export default JobCard;

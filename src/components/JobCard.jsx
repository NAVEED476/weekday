import { Button, Typography } from "@mui/material";
import React from "react";
import "./jobCard.css";
import Avatar from "@mui/material/Avatar";
const JobCard = ({obj}) => {
  return (
    <>
      <div
      className="job-cont"
      >
        <div>

        </div>
        <div className="logo-cont">
          <div
            style={{
              marginRight: "20px",
            }}
          >
            <Avatar alt="Remy Sharp" src={obj.logoUrl} />
          </div>
          <div className="info-cont">
            <Typography className="company-name">{obj.companyName}</Typography>
            <Typography className="designation">
              {obj.jobRole}
            </Typography>
            <Typography className="location">{obj.location}</Typography>
          </div>
        </div>

        <div>
          <Typography className="salary-range">
            Estimated Salary: ₹10 - 14 LPA ⚠️
          </Typography>
          <Typography variant="h5" className="about-company">
            About Company:
          </Typography>
          <Typography className="desc">
            Blis is the audience-first platform that doesn't rely on personal
            data. We’re an integrated planning and buying platform that delivers
            scaled, relevant and high-performing audiences, helping the world’s
            largest brands and media agencies achieve their goals. Over the past
            18 years, Blis has built its reputation on delivering award-winning
            location-powered advertising solutions. In today’s consumer-centric
            landscape, Blis is transforming the role of location data by
            combining it with a broad range of rich and powerful datasets to
            give our clients the deepest audience understanding available. Our
            unique approach to integrated planning and buying provides
            personalised targeting and performance without reliance on personal
            data. We serve .
          </Typography>
          <Typography className="view-job">
            View job
          </Typography>
        </div>
        <div>
            <Typography className="min-exp">Experience</Typography>
            <Typography className="exp">{obj.minExp}y - {obj.maxExp}y</Typography>
        </div>
       <div className="apply-btn">
       <Button className="apply-btn-text">⚡ Easy Apply</Button>
       </div>
      </div>
    </>
  );
};

export default JobCard;

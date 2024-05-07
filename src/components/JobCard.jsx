import { Button, Typography } from "@mui/material";
import React from "react";
import "./jobCard.css";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
const JobCard = ({ obj, isLoading }) => {
  const renderSkeleton = () => (
    <div className="job-cont">
      <div className="logo-cont">
        <div style={{ marginRight: "20px" }}>
          <Skeleton variant="circular" width={40} height={40} />
        </div>
        <div className="info-cont">
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={100} height={20} />
        </div>
      </div>
      <div>
        <Skeleton variant="text" width={200} height={20} />
        <Skeleton variant="text" width={600} height={80} />
        <Skeleton variant="text" width={120} height={20} />
        <Skeleton variant="text" width={120} height={20} />
      </div>
      <div className="apply-btn">
        <Skeleton variant="text" width={100} height={40} />
      </div>
    </div>
  );

  // If data is loading, render skeleton loading effect
  if (isLoading) {
    return renderSkeleton();
  }
  return (
    <>
      <div className="job-cont">
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
            <Typography className="designation">{obj.jobRole}</Typography>
            <Typography className="location">{obj.location}</Typography>
          </div>
        </div>

        <div>
          <Typography className="salary-range">

            {/* when minminJdSalary is null then it starts from 0  */}
            
            Estimated Salary: $
            {obj.minJdSalary !== null || obj.maxJdSalary !== null
              ? `${
                // when both salaries or null then it displays 0
                  obj.minJdSalary !== null ? `${obj.minJdSalary}K -` : "0 -"
                } $${obj.maxJdSalary}K`
              : "notSpecified"}
            ✅
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
          <Typography className="view-job">View job</Typography>
        </div>
        <div>
          <Typography className="min-exp">Experience</Typography>
          <Typography className="exp">
            {obj.minExp !== null && obj.maxExp !== null
              ? `${obj.minExp}y - ${obj.maxExp}y`
              : "0"}
          </Typography>
        </div>
        <div className="apply-btn">
          <Button className="apply-btn-text">⚡ Easy Apply</Button>
        </div>
      </div>
    </>
  );
};

export default JobCard;

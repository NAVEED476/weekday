import { Button, Typography } from "@mui/material";
import React from "react";
import "./jobCard.css";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  // border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};
const JobCard = ({ obj, isLoading }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const someText = Math.ceil(obj.jobDetailsFromCompany.length * 0.3);
  const trunkatedText =  obj.jobDetailsFromCompany.substring(0, someText)
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
        <div>
          <p
            style={{
              width: "100px",
              textAlign: "center",
              fontSize: "10px",
              padding: "3px",
              background: "#ffff",
              padding: "4px 6px",
              boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
              borderRadius: "10px",
              border: "1px solid rgb(230, 230, 230)",
              marginBottom: "20px",
            }}
          >
            ⏳posted days ago
          </p>
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
          <Typography className="desc"> {trunkatedText} </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* {obj.jobDetailsFromCompany} */}
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {obj.jobDetailsFromCompany}
                </Typography>
              </Box>
            </Modal>
         
          <Typography className="view-job" onClick={handleOpen}>
            View job
          </Typography>
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

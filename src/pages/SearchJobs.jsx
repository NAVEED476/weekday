import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filters from "../components/Filters";
import JobListing from "./JobListing";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SearchJobs() {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({ limit: 10, offset: 0 });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const result = await response.json();
        setJobData(result.jdList);
        console.log(result.jdList)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "none" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontSize: "16px", textAlign: "center" }}
        >
          <Badge badgeContent={jobData.length} color="primary">
            Search Jobs
          </Badge>
        </Typography>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Filters jobData={jobData} setJobData={setJobData} />
            <JobListing jobData={jobData} />
          </>
        )}
      </Box>
    </>
  );
}
import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import JobListing from "./JobListing";

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

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json()) // Assuming the response is JSON
      .then((result) => {
        // Set the data inside setFilters
        setJobData(result.jdList);
        // Console log the data
        console.log(result.jdList);
      })
      .catch((error) => console.error(error));
  }, []);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "none" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="black"
            variant="fullWidth"
            aria-label="full width tabs example"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Tab
              label="Applied jobs"
              style={{ textTransform: "none" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Search jobs"
              style={{ textTransform: "none" }}
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Filters jobData={jobData} />
          <JobListing jobData={jobData} />
        </TabPanel>
      </Box>
    </>
  );
}

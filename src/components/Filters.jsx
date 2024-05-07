import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./filters.css";

export default function Filters({ jobData, setJobData }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedMinBasePaySalary, setSelectedMinBasePaySalary] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [allRoles, setAllRoles] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [allExperience, setAllExperience] = useState([]);
  const [allMinBasePaySalary, setAllMinBasePaySalary] = useState([]);

  useEffect(() => {
    // Extract unique values for roles, locations, experience, and minimum base pay salary
    const roles = Array.from(new Set(jobData.map((job) => job.jobRole)));
    const locations = Array.from(new Set(jobData.map((job) => job.location)));
    const experience = Array.from(new Set(jobData.map((job) => job.minExp)));
    const minBasePaySalary = Array.from(new Set(jobData.map((job) => job.minJdSalary)));

    setAllRoles(roles);
    setAllLocations(locations);
    setAllExperience(experience);
    setAllMinBasePaySalary(minBasePaySalary);
  }, [jobData]);

  useEffect(() => {
    // Filter job data based on selected roles, location, experience, minimum base pay salary, and company name
    const filteredData = jobData.filter(
      (job) =>
        (selectedRoles.length === 0 || selectedRoles.includes(job.jobRole)) &&
        (selectedLocation === "" || job.location === selectedLocation) &&
        (selectedExperience === "" || job.minExp === selectedExperience) &&
        (selectedMinBasePaySalary === "" || job.minJdSalary === selectedMinBasePaySalary) &&
        (companyName === "" || job.companyName.toLowerCase().includes(companyName.toLowerCase()))
    );
    setJobData(filteredData);
  }, [jobData, selectedRoles, selectedLocation, selectedExperience, selectedMinBasePaySalary, companyName, setJobData]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
        <div className="filter-cont">
          <Autocomplete
            sx={{ minWidth: "160px", margin: "10px" }}
            multiple
            id="roles"
            options={allRoles}
            value={selectedRoles}
            onChange={(event, newValue) => setSelectedRoles(newValue)}
            getOptionLabel={(option) => option ? option : ""}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={!inputValue ? "Roles" : ""}
                InputProps={{ ...params.InputProps, id: "roles-input" }}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{ fontSize: "10px" }}
              />
            )}
          />

          <Autocomplete
            sx={{ minWidth: "160px", margin: "10px" }}
            id="location"
            options={allLocations}
            value={selectedLocation}
            onChange={(event, newValue) => setSelectedLocation(newValue)}
            renderInput={(params) => <TextField {...params} placeholder="Location" />}
          />

          <Autocomplete
            sx={{ minWidth: "160px", margin: "10px" }}
            id="experience"
            options={allExperience.sort((a, b) => a - b)}
            value={selectedExperience}
            onChange={(event, newValue) => setSelectedExperience(newValue)}
            getOptionLabel={(option) => option ? option.toString() : ""}
            renderInput={(params) => <TextField {...params} placeholder="Experience" />}
          />

          <Autocomplete
            sx={{ minWidth: "160px", margin: "10px" }}
            id="minBasePaySalary"
            options={allMinBasePaySalary.sort((a, b) => a - b)}
            value={selectedMinBasePaySalary}
            onChange={(event, newValue) => setSelectedMinBasePaySalary(newValue)}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} placeholder="Minimum Base Pay Salary" />
            )}
          />
          <div className="input-comapny-name">
            <TextField
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "4px",
                borderColor: "#e3e0e0 #e3e0e0",
              }}
            />
          </div>
        </div>
        <div className="refferal-select-box">
          <FormControlLabel
            sx={{ alignSelf: "left" }}
            control={<Checkbox />}
            label="Show jobs with referrals available"
          />
        </div>
      </div>
    </>
  );
}

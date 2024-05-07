import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Filters({ jobData }) {
  // Extract unique values for Number of Employees, Experience, Remote, and Minimum Base Pay Salary
  const uniqueEmployees = Array.from(new Set(jobData.map(job => job.location)));
  const uniqueExperience = Array.from(new Set(jobData.map(job => job.minExp)));
  // const uniqueRemote = Array.from(new Set(jobData.map(job => job.location)));
  const uniqueMinBasePaySalary = Array.from(new Set(jobData.map(job => job.minJdSalary)));

  useEffect(() => {
    console.log(uniqueEmployees);
    console.log(uniqueExperience);
    // console.log(uniqueRemote);
    console.log(uniqueMinBasePaySalary);
  }, [jobData]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Autocomplete
            sx={{
              minWidth: "160px",
              "& .MuiAutocomplete-input": {
                height: "10px",
              },
              margin: "10px",
            }}
            multiple
            id="roles"
            options={jobData.map(job => job.jobRole)}
            getOptionLabel={(option) => option ? option : ""}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Roles"
                sx={{ fontSize: "10px" }}
              />
            )}
          />

          <Autocomplete
            sx={{
              minWidth: "160px",
              "& .MuiAutocomplete-input": {
                height: "10px",
              },
              margin: "10px",
            }}
            multiple
            id="employees"
            options={uniqueEmployees}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} placeholder="Location" />
            )}
          />

          <Autocomplete
            sx={{
              minWidth: "160px",
              "& .MuiAutocomplete-input": {
                height: "10px",
              },
              margin: "10px",
            }}
            multiple
            id="experience"
            options={uniqueExperience.sort((a,b) => a-b)}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} placeholder="Experience" />
            )}
          />

          {/* <Autocomplete
            sx={{
              minWidth: "160px",
              "& .MuiAutocomplete-input": {
                height: "10px",
              },
              margin: "10px",
            }}
            multiple
            id="remote"
            // options={uniqueRemote}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Remote"
                sx={{ height: "10px" }}
              />
            )}
          /> */}

          <Autocomplete
            sx={{
              minWidth: "160px",
              "& .MuiAutocomplete-input": {
                height: "10px",
              },
              margin: "10px",
            }}
            multiple
            id="minBasePaySalary"
            options={uniqueMinBasePaySalary.sort((a,b)=>a-b)}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} placeholder="Minimum Base Pay Salary" />
            )}
          />

          <TextField
            sx={{
              width: "200px",
              margin: "10px",
              height: "10px !important",
            }}
            placeholder="Search Company Name"
          />
        </div>
        <div>
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

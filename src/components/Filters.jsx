import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./filters.css";
import InputLabel from "@mui/material/InputLabel";

export default function Filters({ jobData, setJobData , setFilteredJobData}) {
  const [inputValue, setInputValue] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  // Extract unique values for Number of Employees, Experience, Remote, and Minimum Base Pay Salary
  const uniqueEmployees = Array.from(
    new Set(jobData.map((job) => job.location))
  );
  const uniqueExperience = Array.from( 
    new Set(jobData.map((job) => job.minExp))
  );
  // const uniqueRemote = Array.from(new Set(jobData.map(job => job.location)));
  const uniqueMinBasePaySalary = Array.from(
    new Set(jobData.map((job) => job.minJdSalary))
  );

  useEffect(() => {
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
        <div className="filter-cont">
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
            options={jobData.map((job) => job.jobRole)}
            getOptionLabel={(option) => (option ? option : "")}
            filterSelectedOptions
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  placeholder={!inputValue ? "Roles" : ""}
                  InputProps={{
                    ...params.InputProps,
                    id: "roles-input",
                  }}
                  onChange={(e) => setInputValue(e.target.value)}
                  sx={{ fontSize: "10px" }}
                />
              </>
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
            id="experience"
            options={uniqueExperience.sort((a, b) => a - b)}
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
            id="minBasePaySalary"
            options={uniqueMinBasePaySalary.sort((a, b) => a - b)}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} placeholder="Minimum Base Pay Salary" />
            )}
          />
          <div className="input-comapny-name">
            <input
              type="text"
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

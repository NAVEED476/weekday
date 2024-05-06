import React from 'react'
import JobCard from '../components/JobCard'

const JobListing = ({jobData}) => {
  return (
    <div style={{
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap",
        margin:"10px"
    }}>
        {jobData && jobData.map((obj)=><JobCard obj={obj} key={obj.jdUid}/>)}
    </div>
  )
}

export default JobListing
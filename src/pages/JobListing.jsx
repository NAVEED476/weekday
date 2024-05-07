import React, { useState, useEffect, useRef } from 'react';
import JobCard from '../components/JobCard';

const JobListing = ({ jobData }) => {
  const [jobsToShow, setJobsToShow] = useState(6);
  const [loading, setLoading] = useState(false); 
  const jobListingRef = useRef(null); 

  // Function to load more jobs
  const loadMoreJobs = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setJobsToShow(prevCount => prevCount + 6); // Increase the number of jobs to display
      setLoading(false);
    }, 1000);
  };

  const handleObserver = entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      loadMoreJobs();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    if (jobListingRef.current) {
      observer.observe(jobListingRef.current);
    }
    return () => {
      if (jobListingRef.current) {
        observer.unobserve(jobListingRef.current);
      }
    };
  }, []);

  return (
    <>
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '10px',
      }}
      ref={jobListingRef} // Attach the ref to the container
    >
      {jobData && jobData.slice(0, jobsToShow).map(obj => (
        <JobCard obj={obj} key={obj.jdUid} />
      ))}
     
    </div>
    {loading && <p>Loading...</p>}
      {!loading && jobsToShow < jobData.length && (
        <button onClick={loadMoreJobs}>Load More</button>
      )}
    </>);
};

export default JobListing;

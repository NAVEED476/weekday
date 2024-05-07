import React, { useState, useEffect, useRef } from 'react';
import JobCard from '../components/JobCard';
import CircularProgress from '@mui/material/CircularProgress';

const JobListing = ({ jobData }) => {
  const [jobsToShow, setJobsToShow] = useState(6);
  const [loading, setLoading] = useState(false);
  const jobListingRef = useRef(null);

  const loadMoreJobs = () => {
    setLoading(true);
    setTimeout(() => {
      setJobsToShow(prevCount => prevCount + 6);
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

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      loadMoreJobs();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.8)',
          }}
        >
         <CircularProgress disableShrink />;
        </div>
      )}
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '10px',
          paddingTop: '50px',
        }}
        ref={jobListingRef}
      >
        {jobData && jobData.slice(0, jobsToShow).map(obj => (
          <JobCard obj={obj} key={obj.jdUid} />
        ))}
      </div>
    </div>
  );
};

export default JobListing;

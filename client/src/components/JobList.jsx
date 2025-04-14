import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(res => {
        setJobs(res.data);
        setFilteredJobs(res.data); // Set initial filtered list
      })
      .catch(err => console.error('Error loading jobs:', err));
  }, []);

  useEffect(() => {
    const query = search.toLowerCase();
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    );
    setFilteredJobs(filtered);
  }, [search, jobs]);

  return (
    <div className="container">
      <h2>All Jobs</h2>

      <input
        type="text"
        placeholder="Search by title or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {filteredJobs.length === 0 ? (
        <p>No matching jobs found.</p>
      ) : (
        filteredJobs.map(job => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <Link to={`/job/${job._id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;

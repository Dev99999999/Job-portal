import { Routes, Route, Link } from 'react-router-dom';
import JobList from './components/JobList';
import AddJob from './components/AddJob';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add-job">Add Job</Link>
      </nav>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;

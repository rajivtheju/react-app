import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StudentList() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(null);

  useEffect(() => {
    // Fetch college data from backend
    fetch('/api/colleges')
      .then(response => response.json())
      .then(data => setColleges(data))
      .catch(error => console.error(error));

    // Fetch batch data from backend (adjust API endpoint as needed)
    fetch('/api/batches')
      .then(response => response.json())
      .then(data => setBatches(data))
      .catch(error => console.error(error));
  }, []);

  // Handle college selection
  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
    // Optionally fetch batch data based on selected college
  };

  // Handle batch selection
  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  return (
    <div className='cf'>
      <center>
        <form className='form form1 '>
          <center ><h3 className='paye'>Student list</h3></center>
      <select className="inp" value={selectedCollege} onChange={handleCollegeChange}>
        <option value="">Select College</option>
        {colleges.map(college => (
          <option key={college.id} value={college.name}>
            {college.name}
          </option>
        ))}
      </select>
      <select className="inp" value={selectedBatch} onChange={handleBatchChange}>
        <option value="">Select Batch Year</option>
        {batches.map(batch => (
          <option key={batch.id} value={batch.year}>
            {batch.year}
          </option>
        ))}
      </select><br/>
     <Link to='/tslist'> <input type="submit" value="submit" className='studentlist_submit ' name='submit'/></Link>
      </form>
      </center>
    </div>
  )
}
export default StudentList
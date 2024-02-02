import React, { useState, useEffect } from 'react';

const Previouspapers = () => {
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(null);

  useEffect(() => {
    // Fetch batch names from backend
    fetch('/api/batches') // Replace with your actual backend API endpoint
      .then(response => response.json())
      .then(data => setBatches(data))
      .catch(error => console.error('Error fetching batches:', error));
  }, []);

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };
  return (
    <div className='cf'>
      <center>
        <form className='form form1 '>
          <center ><h3 className='paye'>Previous papers</h3></center>
          <select className="inp" value={selectedBatch} onChange={handleBatchChange}>
            <option value="">Select a Batch</option>
            {batches.map((batch) => (
              <option key={batch.id} value={batch.name}>
                {batch.name}
              </option>
            ))}
          </select><br/>
          <input type="file" id="file-input" name="file-input" />

<label id="file-input-label" for="file-input"
  >Select a File</label><br/>
          
          <input type="submit" value="search" className='previouspapers_submit ' name='submit'></input><br/>
        </form>
      </center>
    </div>
  )
}

export default Previouspapers

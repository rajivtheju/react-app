import React, { useState, useEffect } from 'react';
const Examlist = () => {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);

  useEffect(() => {
    // Fetch college names from backend
    fetch('/api/colleges') // Replace with your actual backend API endpoint
      .then(response => response.json())
      .then(data => setColleges(data))
      .catch(error => console.error('Error fetching colleges:', error));
  }, []);

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  }
  return (
    <div className='cf'>
      <center>
        <form className='form form1 '>
          <center ><h3 className='paye'>Exams list</h3></center>
          <select className="inp" value={selectedCollege} onChange={handleCollegeChange}>
            <option value="">Select a College</option>
            {colleges.map((college) => (
              <option key={college.id} value={college.name}>
                {college.name}
              </option>
            ))}
          </select><br />
          
          <br />
          <input type="file" id="file-input" name="file-input" />

<label id="file-input-label" for="file-input"
  >Select a File</label><br/>
          <input type="submit" value="submit" className='studentlist_submit ' name='submit'></input>
          
        </form>
      </center>
    </div>
  )
}

export default Examlist

import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const LeadBoard = () => {
  const [examTypes, setExamTypes] = useState([]);
  const [collegeNames, setCollegeNames] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState(null);
  const [selectedCollegeName, setSelectedCollegeName] = useState(null);

  useEffect(() => {
    // Fetch exam types from backend
    axios.get('/api/exam-types')
      .then(response => setExamTypes(response.data))
      .catch(error => console.error(error));

    // Fetch college names from backend (potentially based on selected exam type)
    axios.get('/api/college-names')
      .then(response => setCollegeNames(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleExamTypeChange = (event) => {
    setSelectedExamType(event.target.value);

    // If college names depend on exam type, fetch again
    axios.get(`/api/college-names?examType=${event.target.value}`)
      .then(response => setCollegeNames(response.data))
      .catch(error => console.error(error));
  };

  const handleCollegeNameChange = (event) => {
    setSelectedCollegeName(event.target.value);
  };
  return (
    <Fragment>
      <div className='cf'>
        <center>
          <form className='form form1 '>
            <center ><h3 className='paye'>Leader board</h3></center>
            <select className='inp' value={selectedExamType} onChange={handleExamTypeChange}>
              <option value="">Select Exam Type</option>
              {examTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select><br/>

            <select className='inp' value={selectedCollegeName} onChange={handleCollegeNameChange}>
              <option value="">Select College Name</option>
              {collegeNames.map(college => (
                <option key={college.id} value={college.id}>
                  {college.name}
                </option>
              ))}
            </select><br/>

            <Link to='/leaderbard_table'> <input type="submit" value="submit" className='leaderboard_submit ' name='submit'></input> </Link>
          </form>
        </center>
      </div>
    </Fragment>
  )
}

export default LeadBoard;

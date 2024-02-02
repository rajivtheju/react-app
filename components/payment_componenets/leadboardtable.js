import React,{ Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const LeadboardTable = () => {
  const [students, setStudents] = useState([]);

    useEffect(() => {
    axios.get('/api/students') // Replace with your API endpoint
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Fragment>
    
    <div  className='student-table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Percentage</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>{student.percentage}</td>
                <td>{student.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
     
    </div>
    </Fragment>
  );
};

export default LeadboardTable;

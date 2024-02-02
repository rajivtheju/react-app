import React, { Fragment ,useEffect,useState} from 'react'
import axios from 'axios';

const StudentList = () => {
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
            <th>Rank</th>
              <th>Name</th>
              <th>Year</th>
              <th>Branch</th>
              
            </tr>
          </thead>
          <tbody>
            {students.map((student,index) => (
              <tr key={student.id}>
                 <td>{index+1}</td>
                <td>{student.name}</td>
                <td>{student.year}</td>
                <td>{student.branch}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
     
    </div>

 

    </Fragment>
  )
}

export default StudentList

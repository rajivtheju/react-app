import React, { Fragment ,useEffect,useState} from 'react'
import axios from 'axios';

const Pendingfee = () => {
  const [students, setStudents] = useState([]);

    useEffect(() => {
    axios.get('/api/students') // Replace with your API endpoint
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <Fragment>
      <center>
      <div className='pf'>
        <form className='pfee form1'>
        <center ><h3 className='paye'>Pending fee</h3></center>
          <input type='text' placeholder='enter your fullname' name='name'/><br/>
          <input type='text' placeholder='enter your ID' name='id' />

          <input type="submit" value="submit" className='pendingfee_submit ' name='submit' />
        </form> </div> 
        
        </center>
      
      <div  className='student-table'>
        <table>
          <thead>
            <tr>
            <th>Exam/Course name</th>
              <th>Fee amount</th>
              <th>Last date</th>
              <th>Payment</th>
              
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                 <td>{student.examname}</td>
                <td>{student.fee}</td>
                <td>{student.lastdate}</td>
                <td>{student.payment}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
     
    </div>

 

    </Fragment>
  )
}




export default Pendingfee

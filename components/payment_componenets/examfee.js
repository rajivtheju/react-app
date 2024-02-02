import { useState,useEffect } from "react"


const Examfee = () => {
  const [examNames, setExamNames] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    // Fetch exam names from backend
    fetch('/api/exam-names')
      .then(response => response.json())
      .then(data => setExamNames(data))
      .catch(error => console.error(error));
  }, []);

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };
  return (
    <div className='cf'>
      <center>
                <form className='form form1' >
                <center ><h3 className='paye'>Exam fee</h3></center>
                    <input className="input" type='text'name='name' placeholder='Enter the name' /><br />
                    <input className="input" type='email'name='email' placeholder='Enter the Email Id' /><br />
                    <input className="input" type='text'name='college' placeholder='Name of the College' /><br />
                    
        <select className="inp" value={selectedExam} onChange={handleExamChange}>
        <option value="">Select Exam</option>
        {examNames.map(exam => (
          <option key={exam.id} value={exam.name}>
            {exam.name}
          </option>
        ))}
      </select> <br />
                    <input type='checkbox' /><label>continue to pay</label><br/>
                    <input type="submit" value="Pay now" className='examfee_submit ' name='submit'></input>
                </form>
            </center>
    </div>
  )
}

export default Examfee

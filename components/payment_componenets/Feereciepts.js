import React, {useState , useEffect} from 'react'

const Feereciepts = () => {
  const [exams, setExams] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Fetch exam data
    fetch('/api/exams')
      .then(response => response.json())
      .then(data => setExams(data))
      .catch(error => console.error(error));

    // Fetch course data
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error(error));
  }, []);

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
    // Filter courses based on selected exam (if needed)
    const filteredCourses = courses.filter(course => course.examId === selectedExam);
    setCourses(filteredCourses);
    setSelectedCourse(null); // Reset selected course when exam changes
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  return (
    <div className='cf'>
      <center>
        <form className='form form1' >
          <center ><h3 className='paye'>Fee Reciept</h3></center>
          <input className="input" type='text' name='name' placeholder='Enter the name' /><br />
          <input className="input " type='email' name='email' placeholder='Enter the Email Id' /><br />
          <input className="input" type='text' name='college' placeholder='Name of the College' /><br />
          <select className='inp' value={selectedExam} onChange={handleExamChange}>
        <option value="">Select Exam</option>
        {exams.map(exam => (
          <option key={exam.id} value={exam.id}>
            {exam.name}
          </option>
        ))}
      </select>or
      
      <select className='inp' value={selectedCourse} onChange={handleCourseChange}>
        <option value="">Select Course</option>
        {courses.map(course => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
          <br />

          <input type="submit" value="Download " className='feereciept_submit ' name='submit'></input>
        </form>
      </center>
    </div>
  )
}

export default Feereciepts

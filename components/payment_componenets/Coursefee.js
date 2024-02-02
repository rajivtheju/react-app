import React,{useState,useEffect} from 'react'
const Coursefee = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        // Fetch course data from backend
        fetch('/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error(error));
    }, []);

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };
    return (
        <div className='cf'>
            <center>
                <form className='form form1'>
                    <center ><h3 className='paye'>Course fee</h3></center>
                    <input className="input" type='text' name='name' placeholder='Enter the name' /><br />
                    <input className="input" type='email' name='email' placeholder='Enter the Email Id' /><br />
                    <input className="input" type='text' name='college' placeholder='Name of the College' /><br />
                    <select className="inp" value={selectedCourse} onChange={handleCourseChange}>
                        <option value="">Select Course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.name}>
                                {course.name}
                            </option>
                        ))}
                    </select><br/>
                    <input type='checkbox' /><label>continue to pay</label><br />
                    <input type="submit" value="Pay now" className='coursefee_submit ' name='submit'></input>
                </form>
            </center>
        </div>
    )
}

export default Coursefee

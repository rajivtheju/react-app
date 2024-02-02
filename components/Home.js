import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <Fragment>
      <div class="content content-m ">
       <Link to='/studentslist'> <div className='box '>
          <h3>Students list</h3><br />
          <h1 className='students_number'></h1>
        </div></Link>
       <Link to='/examlist'><div className='box '>
          <h3>Exam list</h3><br />
          <h1 className='students_number'></h1>
        </div></Link> 
        <Link to='/materials'><div className='box'>
          <h3>Materials</h3><br />
          <h1 className='students_number'></h1>
        </div></Link> 
        <Link to='/previous papers'>
        <div className='box'>
        <h3>Previous papers</h3><br />
          <h1 className='students_number'></h1>
        </div>
        </Link> 
      </div>
    </Fragment>
  )
}
export default Home;
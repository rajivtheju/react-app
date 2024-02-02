import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Payment = () => {

  return (
    <Fragment>
      <center>
      <div class="content content-m ">
     <Link to='/Coursefee'><h3 className='box '>Course fee</h3></Link>
     <Link to='/Examfee'><h3 className='box '>Exam fee</h3></Link>
     <Link to='/Pendingfee'><h3 className='box '>Pending fee</h3></Link>
     <Link to='/Feereciept'><h3 className='box '>Fee reciept</h3></Link>
     </div>
     </center>
    </Fragment>
  )
}

export default Payment;

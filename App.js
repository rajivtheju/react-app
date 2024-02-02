import React, { Fragment } from 'react'
import './App.css';
import './styles/payments.css';
import './styles/leadboard.css';
import './styles/home.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Payment from './components/payments';
import LeadBoard from './components/LeadBoard';
import Feedback from './components/Feedback';
import Logout from './components/Logout';
import Navtag from './components/navtag';
import Sidebar from './components/sidebar';
import Coursefee from './components/payment_componenets/Coursefee';
import examfee from './components/payment_componenets/examfee';
import Pendingfee from './components/payment_componenets/pendingfee';
import Feereciepts from './components/payment_componenets/Feereciepts';
import Certificates from './components/certificates';
import examlist from './components/Homecomponents/examlist';
import materials from './components/Homecomponents/materials';
import previouspapers from './components/Homecomponents/previouspapers';
import results from './components/Homecomponents/results';
import LeadboardTable from './components/payment_componenets/leadboardtable';
import StudentsTable from './components/Homecomponents/students_table';
import StudentList from './components/Homecomponents/studentlist';
const App = () => {
  return (
<Fragment>
    <BrowserRouter> 

  <header><Navtag/></header>  
<Sidebar/>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/Payments' exact Component={Payment}/>
      <Route path='/Leadboard' exact Component={LeadBoard}/>
      <Route path='/Feedback' exact Component={Feedback}/>
      <Route path='/Logout' exact Component={Logout}/>
      <Route path='/Exams' exact Component={Certificates}/>
      <Route path='/Coursefee' exact Component={Coursefee}/>
      <Route path='/Examfee' exact Component={examfee}/>
      <Route path='/Pendingfee' exact Component={Pendingfee}/>
      <Route path='/FeeReciept' exact Component={Feereciepts}/>
      <Route path='/studentslist' exact Component={StudentList}/>
      <Route path='/examlist' exact Component={examlist}/>
      <Route path='/materials' exact Component={materials}/>
      <Route path='/previous papers' exact Component={previouspapers}/>
      <Route path='/results' exact Component={results}/>
      <Route path='/tslist' exact Component={StudentsTable}/>
      <Route path='/leaderbard_table' exact Component={LeadboardTable}/>
    </Routes>
    </BrowserRouter>
   
</Fragment>
  )
}
export default App

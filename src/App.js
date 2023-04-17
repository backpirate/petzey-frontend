import React from 'react';
import './App.css';
import Sidebar from "./components/Common/sidebar/leftsidebar";
import Header from "./components/Common/header/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Back from './components/images/backgroundimg.jpg'
import Trail1 from './components/Receptionist/Trail1/trail1'
import Trail from './components/Receptionist/Profile/Trail/trail'
//import Calendar from './components/trail/allapp';
//import {BrowserRouter as Router} from  "react-router-dom";
//import Allapp from './components/trail/allapp'
//import All from './components/allappointments/allappointments'
// import Mainuser from './components/User/mainuser'
import User from './components/User/user'

//RECEPTIONIST FLOW
// import Newappointment from './components/Paient/DashBoard/newappointment/newappointmer'
import Recpprofile from "./components/Receptionist/Profile/profile";
import NewAppointmentr from './components/Receptionist/Dashboard/newappointment/newappointment';
import Apporeportr from './components/Receptionist/Dashboard/AppoReport/apporeport';
import Allappointmentr from './components/Receptionist/Dashboard/dashboard/allappointment';
import Petview from './components/Receptionist/Pets/petview';

//DOCTOR FLOW

import Doctorprofile from "./components/Doctor/Profile/Doctor_profile/doctor_profile";
import Allappointmentd from './components/Doctor/Dashboard/dashboard/dashboard';
import NewAppointmentd from './components/Doctor/Dashboard/newappointment/newappointment'


//PATIENT FLOW

 import Patientprofile from './components/Paient/Profile/patient_profile'
 import Allappointmentp from './components/Paient/DashBoard/dashboard/patientdashboard'
 import NewAppointmentp from './components/Paient/DashBoard/newappointment/newappointmer'
 import Doctorview from './components/Receptionist/Doctors/doctorview'
 import Apporeport from './components/Receptionist/Dashboard/AppoReport/apporeport'

function App() {
    return (

      <div>
          <div className = 'tempbg'>
            <img src={Back}></img>
          </div>
         <Router>
            {/* <Trail/> */}        
           <Sidebar/>
             <Header/>
              {/* <User/> */}
              {/* <Newappointment/> */}
              {/* <Mainuser/> */}

                                  {/*RECEPTIONIST FLOW*/} 
          {/* <Routes>
            <Route path='/allappointments' exact element={<Allappointmentr/>}/>
            <Route path='/allappointments/newappointment' element={<NewAppointmentr/>}/>
            <Route path='/allappointments/apporeport' element={<Apporeportr/>}/> 
            <Route path='/petview' element={<Petview/>}/>
            <Route path='/doctorview' element={<Doctorview/>}/>
            <Route path='/profile' element={<Recpprofile/>}/>
          </Routes>  */}


                                  {/* DOCTOR FLOW */}

          <Routes>
            <Route path='/dashboard' element={<Allappointmentd/>}/>
            <Route path='/dashboard/newappointmer' element={<NewAppointmentd/>}/>
            <Route path='/petview' element={<Petview/>}/>
            <Route path='/doctor_profile' element={<Doctorprofile/>}/>
          </Routes>


                                    {/*PATIENT FLOW*/}

              
           {/* <Routes>
            <Route path='/patientdashboard' element={<Allappointmentp/>}/> 
            <Route path='/patientdashboard/newappointment' element={<NewAppointmentp/>}/> 
            <Route path='/patientdashboard/details' element={<Apporeport/>}/>
            <Route path='/doctorview' element={<Doctorview/>}/>
            <Route path='/patient_profile' element={<Patientprofile/>}/>
          </Routes>  */}
           
          </Router>
      </div>
      
      
      );
    }

  export default App;

import React from 'react';
import './leftsidebar.css';
import logo from '../../images/logo.png';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import profile_logo from '../../../images/profile_logo.png';
import { Link } from "react-router-dom";

const profile = () => {
  return (
    <div>
    <div className='sidebar'>
            <nav className="sidebarMenu">
               <div class='position-sticky'>
                        <ul>
                        <img src={logo} alt='logo'/>

                                                        {/* RECEPTIONIST FLOW */}
/


                                                          {/* DOCTOR FLOW */}

                        <Link to={"dashboard"} className='nav-link'>
                          <li><a href='dashaboard'><i className="bi bi-bar-chart-fill"></i>Dashboard</a></li>
                        </Link>
                        
                        <Link to={"petview"} className='nav-link'>
                          <li><a href='Doctor'><i className="fa fa-user-md m-1"></i>Pets</a></li>
                        </Link>

                        <Link to={"doctor_profile"} className='nav-link'>
                        <li><a href='doctor_profile'><i className="bi bi-person-fill"></i>Profile</a></li>
                        </Link>


                                                           {/* PATIENT FLOW */}

                        {/* <Link to={"patientdashboard"} className='nav-link'>
                          <li><a href='patientdashboard'><i className="bi bi-bar-chart-fill"></i>Dashboard</a></li>
                        </Link>
                        
                        <Link to={"doctorview"} className='nav-link'>
                          <li><a href='Doctor'><i className="fa fa-user-md m-1"></i>Doctor</a></li>
                        </Link>
                        
                        <Link to={"patient_profile"} className='nav-link'>
                          <li><a href='Patientprofile'><i className="bi bi-person-fill"></i>Profile</a></li>
                        </Link> */}
                        
                        </ul> 
                </div>
            </nav>
    </div>
    </div>
  );
}

export default profile
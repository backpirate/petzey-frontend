import React from 'react'
import { Link } from "react-router-dom";
import './user.css';
import '../images/logo.png'

const user = () => {
  return (
    <div className='bodyuser'>
     <div className="dropdown mb-5">     
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             DOCTOR FLOW
        </button>

        <ul class="dropdown-menu ">
          <div> 
            <a href='D:\forntend final\finalproject\src\components\Doctor\Dashboard\dashboard'></a>
            <Link to={"/dashboard"} className='nav-link'>
             <li><p>Dashboard</p></li>
            </Link>

            <Link to = {"/petview"} className='nav-link'>
            <li><p>Pets</p></li>
            </Link>
            
            <Link to={"doctor_profile"} className='nav-link'>
            <li><p>Profile</p></li>
            </Link> 

          </div>
       </ul>
      
      </div>  
      <div className="dropdown mb-5">

        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          RECEPTIONIST FLOW
        </button>
        <ul class="dropdown-menu">
          <div> 

            <Link to={"allappointments"} className='nav-link'>
                <li>dashboard</li>
            </Link>

            <Link to={"petview"} className='nav-link'>
              <li>Pets</li>
            </Link>
            
            <Link to={"doctorview"} className='nav-link'>
            <li>Doctors</li>
            </Link>

            <Link to={"Profile"} className='nav-link'>
              <li>Profile</li>
            </Link>

          </div>
       </ul>
      </div>
      
      <div className="dropdown mb-5 ">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             PATIENT FLOW
        </button>
        <ul class="dropdown-menu">
          <div> 

            <Link to={"patientdashboard"} className='nav-link'>
              <li>Dashboard</li>
            </Link>

            
            <Link to={"doctorview"} className='nav-link'>
            <li>Doctors</li>
            </Link>            
            
            <Link to={"patient_profile"} className='nav-link'>
              <li>Profile</li>
            </Link>

          </div>
       </ul>
      </div>                  
    </div>
  )
}

export default user
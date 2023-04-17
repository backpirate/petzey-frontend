import React, { Component } from "react";
import './doctorview.css'
import Profile from '../../images/petowner.jpeg';
import axios from "axios";

class doctorview extends Component{
  constructor(props) 
  {
    super(props);
    this.state = {doctorappointments: []}
  }

  // GET All Doctors
  componentDidMount()
  {
    // axios.get("https://opt-appointment.learn.skillassure.com/doctor/getdoctor")

    axios.get("http://localhost:8080/doctor/getdoctor")
    .then((response) => {console.log(response)
    this.setState({ doctorappointments: response.data })})
    .catch(error => {console.log(error)})        
  }
  render()
  {
    const { doctorappointments } = this.state 
    return (
      <div className=''>
        <div className='doctorview'>
          <div className='d-flex justify-content-md-between'>
            <h3>All Vets</h3>
            <div className='d-flex'>
              <button type="button" class="btn btn-light d-flex"><i class="bi bi-filter"></i>Filters</button>
              <input type="email" class="form-control" id="" placeholder="Search pets"/>
            </div>
          </div>
          <hr />
          <h5 className='text-muted'>High Rated Vets</h5>
          <hr/>
          <div className='alldoctorview' style={{LeftMargin: "5%"}}>
          {
            doctorappointments.length ?
            doctorappointments.map(doctorappointments => 

            <div key={doctorappointments.id}>
              <div className='card-group d-flex'>
                <div className='card mr-4'>
                  <div className='card-body d-flex'>
                      <img src={Profile} alt="Profile pic"/>
                    <div className='card-title'>
                      <h4>{doctorappointments.doctorName}</h4>
                      <div className='card-text'>
                        <p>{doctorappointments.speciality}</p>
                        {/* <p>{doctorappointments.doctorMobileNo}</p> */}
                    </div>
                </div>
              </div>
            </div>
            </div>

          </div>):
          null
          }
        </div>



            <h4 className='texted-muted mt-4'>All Vets</h4>
            <hr/>
          </div>



          <div className='alldoctorview'>
          {
            doctorappointments.length ?
            doctorappointments.map(doctorappointments => 
            <div key={doctorappointments.id}>
              <div className='card-group d-flex'>
                <div className='card mr-4'>
                  <div className='card-body d-flex'>
                      <img src={Profile} alt="Profile pic"/>
                    <div className='card-title'>
                      <h4>{doctorappointments.doctorName}</h4>
                      <div className='card-text'>
                        <p>{doctorappointments.speciality}</p>
                        <br/>
                        {/* <h4>{doctorappointments.doctorMobileNo}</h4> */}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>):
          null
          }
        </div>


        
      </div>
    )
  }
} 


export default doctorview
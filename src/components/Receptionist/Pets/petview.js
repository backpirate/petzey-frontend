import React, { Component } from "react";
import './petview.css'
import Profile from '../../images/petowner.jpeg';
import axios from "axios";

class petview extends Component{
  constructor(props) 
  {
    super(props);
    this.state = {petappointments: []}
  }


  // GET All pets
  componentDidMount()
  {
    // axios.get("https://opt-appointment.learn.skillassure.com/pet/getpet")

    axios.get("http://localhost:8080/pet/getpet")
    .then((response) => {console.log(response)
    this.setState({ petappointments: response.data })})
    .catch(error => {console.log(error)})        
  }

  render()
  {
    const { petappointments } = this.state 
    return (
      <div className=''>
        <div className='petview'>
          <div className='d-flex justify-content-md-between'>
            <h3>All Pets</h3>
            <div className='d-flex'>
              <button type="button" class="btn btn-light d-flex"><i class="bi bi-filter"></i>Filters</button>
              <input type="email" class="form-control" id="" placeholder="Search pets"/>
            </div>
          </div>
          <hr />
          <h5 className='text-muted'>Recently Consulted</h5>
          <hr/>

          <div className='allpetview ml-2'>
          {
            petappointments.length ?
            petappointments.map(petappointments => 
            <div key={petappointments.id}>
              <div className='card-group d-flex'>
                <div className='card mr-4'>
                  <div className='card-body d-flex'>
                      <img src={Profile} alt="Profile pic" className="mr-3"/>
                    <div className='card-title'>
                      <h4>{petappointments.petName}</h4>
                      <div className='card-text d-flex'>
                        <p>{petappointments.gender}, </p>
                        <p>{petappointments.age} years</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>):
          null
          }
          {/* <div class="card-group d-flex">
            <div class="card mr-3">                                      
              <div class="card-body">
                <div class="card-title d-flex">
                <img src={Profile} alt="Profile pic"/>
                
                  <div class="card-text">
                    <h6>Bojjo</h6>
                    <p className="text-myted">Male,12 </p>
                    <p className="text-muted">Owner : John Doe</p>
                  </div>
                  </div>
                </div>
              </div>
              <div class="card mr-3">                                      
                <div class="card-body">
                  <div class="card-title d-flex">
                    <img src={Profile} alt="Profile pic"/>
                    <div class="card-text">
                      <h6>sweety</h6>
                      <p className="text-myted">Female,12</p>
                      <p className="text-muted">Owner : John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mr-3">                                      
              <div class="card-body">
                <div class="card-title d-flex">
                  <img src={Profile} alt="Profile pic"/>
                  <div class="card-text">
                    <h6>0</h6>
                    <p className="text-myted"></p>
                    <p className="text-muted">Owner : John Doe</p>
                  </div>
                </div>
                </div>
              </div>
              <div class="card mr-3">                                      
              <div class="card-body">
                <div class="card-title d-flex">
                  <img src={Profile} alt="Profile pic"/>
                    <div class="card-text">
                      <h6>GRoot</h6>
                      <p className="text-myted">0</p>
                      <p className="text-muted">Owner : John Doe</p>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            <h4 className='texted-muted mt-4'>All Pets</h4>
            <hr/>
          </div>
          <div className='allpetview'>
          {
            petappointments.length ?
            petappointments.map(petappointments => 
            <div key={petappointments.id}>
              <div className='card-group d-flex'>
                <div className='card mr-4'>
                  <div className='card-body d-flex'>
                      <img src={Profile} alt="Profile pic" className="mr-3"/>
                    <div className='card-title'>
                      <h4>{petappointments.petName}</h4>
                      <div className='card-text d-flex'>
                        <p>{petappointments.gender},</p>
                        <p>{petappointments.age}</p>
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


export default petview
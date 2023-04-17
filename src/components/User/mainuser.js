import React, { Component } from "react";
import './mainuser.css'
import Profile from '../images/petowner.jpeg';
import axios from "axios";



class mainuser extends Component{
  constructor(props) 
  {
    super(props);
    this.state = {petappointments: []}
  }
  componentDidMount()
  {
    axios.get("http://localhost:8092/pet/getpet")
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
          <div class="card-group d-flex">
            <div class="card mr-3">                                      
              <div class="card-body">
                <div class="card-title d-flex">
                <img src={Profile} alt="Profile pic"/>
                
                  <div class="card-text">
                    <h6>Doggo</h6>
                    <p className="text-myted">Male,2.2years</p>
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
                      <h6>Doggo</h6>
                      <p className="text-myted">Male,2.2years</p>
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
                    <h6>Doggo</h6>
                    <p className="text-myted">Male,2.2years</p>
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
                      <h6>Doggo</h6>
                      <p className="text-myted">Male,2.2years</p>
                      <p className="text-muted">Owner : John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className='card'>
                  <img src={Profile} alt="Profile pic"/>
                  <div className='card-body'>
                    <div className='card-title'>
                      <h1>{petappointments.petName}</h1>
                    </div>
                  <div className='card-text'>
                    <p>{petappointments.gender}</p>
                    <p>{petappointments.age}</p>
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


export default mainuser
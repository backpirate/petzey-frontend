import Profilepic from '../../../images/petowner.jpeg';
import axios from 'axios'
import React, { Component } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './patientdash.css'
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Header from '../../../Common/header/header'

class Patientdashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {doctors: []}
        }
      

        //GET Doctor
        componentDidMount(){
            // axios.get("https://opt-appointment.learn.skillassure.com/doctor/getdoctor")
            axios.get("http://localhost:8080/doctor/getdoctor")
            .then(response=> {console.log(response)
           this.setState({doctors: response.data})})
          .catch(error=>{console.log(error)})
        }
      
        render() {
                const {doctors}= this.state
                    return (
                        <div className=''>
                             <div className='sample col-10'>
                                <div className='search'>
                                    <nav class="navbar navbar-expand-md ">
                                        <h3>All Appointments</h3>
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse">
                                            <ul class="navbar-nav ml-auto">
                                            <div className='date'>
                                            <div className="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Selectdate <i className="fas fa-calendar input-prefix "></i>
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <div> <Calendar><p>hidden</p></Calendar></div>
                                                    </ul>
                                                </div>   
                                            </div> 
                                            <div className='status'>
                                                <select className= "myList" onChange = "favTutorial()">
                                                    <option value="All" selected>Status</option>
                                                    <option> Open </option>  
                                                    <option> Closed </option>  
                                                    <option> Cancelled </option>
                                                </select> 
                                            </div> 
                                            <div className='newappointment'>
                                            <Link to={"newappointment"} className='nav-link'>
                                                <button type="button" className="btn btn-danger"><a href='/allappointments/newappointment' className='text-white'>+ New Appointment</a></button>
                                            </Link>
                                            </div> 

                                            </ul>
                                        </div>
                                        </nav>

                                    </div>
                                    <hr className='col-11.5'/>                            
                                </div>
                            <div>
                                {
                                    doctors.length ?
                                    doctors.map(doctors => 
                                    <div key={doctors.id}> 
                                    <div className='recpappointment'>
                                    <div className="card-group">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='card-title d-flex'>
                                                    <div>        
                                                        <img src={Profilepic} alt='dp' className='rounded'/>
                                                    </div>
                                                <div>
                                                    <h6 className="card-text">{doctors.doctorName}</h6>
                                                    <p className='text-muted1'> {doctors.speciality}</p>
                                                    <p className='text-muted'>Pet:Doggo</p>
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div>
                                                    <h4 className='text-muted'><time>10:30</time></h4>
                                                    <h4 className='text-muted'>12/6/2020</h4>
                                               </div>
                                                <div>
                                                    <i className="bi bi-camera-video-fill"></i>
                                                    <i className="bi bi-telephone-fill"></i>
                                                </div>
                                            </div>
                                            <hr className='col-10'/>
                                            <div className='d-flex justify-content-around'>
                                                <a href='/allappointments/details'><h6>Details</h6></a>
                                                {/* <a href='Details'><h6>Feedback</h6></a> */}
                                                <button type="Button" className="btn btn-light"  data-toggle="modal" data-target="#myModal">
                                                    Feedback
                                                </button>               
                                                <div id="myModal" className="modal fade" role="dialog">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className='text-center mb-2'>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>  
                                                                <h3>Feedback Form</h3>
                                                            </div>                                                  
                                                            <div className="form-check mb-4">
                                                                <h7>1.How satisfied are you for the competence of doctor?</h7>
                                                                <div className='ml-5'>          
                                                                    <label className="ml-3">1</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">2</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">3</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">4</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">5</label>{" "}
                                                                    <input name="feedback" type="radio" />                                    

                                                                </div>
                                                            </div>
                                                            <div className="form-check mb-4">
                                                                <h7>2.How satisfied are you for the outcome of treatment?</h7>
                                                                <div className='ml-5'>

                                                                    <label className="ml-3">1</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">2</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">3</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">4</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">5</label>{" "}
                                                                    <input name="feedback" type="radio" />                                    

                                                                </div>
                                                            </div>
                                                            <div className="form-check mb-4">
                                                                <h7>3.Wold you refer this doctor to others?</h7>
                                                                <div className='ml-5'>
                                                                    <label className="ml-3">1</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">2</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">3</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">4</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">5</label>{" "}
                                                                    <input name="feedback" type="radio" />                                    

                                                                </div>
                                                            </div>
                                                <div className="form-check mb-4">
                                                    <h7>4.How satisfied are you with the process of booking appointment?</h7>
                                                    <div className='ml-5'>
                                                        <label className="ml-3">1</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">2</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">3</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">4</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">5</label>{" "}
                                                        <input name="feedback" type="radio" />                                    

                                                    </div>
                                                </div>
                                                <div>
                                                    <p>Additional Comments</p>
                                                    <textarea type="textarea" placeholder="Your Comment" rows="3" cols="50" className='ml-3'/>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
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

export default Patientdashboard
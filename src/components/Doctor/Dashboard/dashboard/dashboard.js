import React, { Component } from 'react'
import './dashboard.css'
import axios from 'axios'
import Profilepic  from '../../../images/petowner.jpeg'
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Header from '../../../Common/header/header'
 import header from '../../../Common/header/header';
class Doctordashboard extends Component {
    constructor(props){
        super(props)
        this.state = {patients: []}
    }

    //GET all patients
    componentDidMount(){
        axios.get("http://localhost:8080/pet/getpet")

        // axios.get("https://opt-appointment.learn.skillassure.com/appointment/pet/getpet")
        .then(response=> {console.log(response)
       this.setState({patients: response.data})})
      .catch(error=>{console.log(error)})
    }
    render(){
            const {patients} = this.state
                return (
                    <div className=''>
                    <div>
                    <div className='overall'>
                        <div className="card">
                            <div className="card-body d-flex">
                                <i className="bi bi-lightning-charge-fill m-3 "></i>
                                <b>Total</b>
                            </div>
                        <div>
                            <h3 className='ml-3'>18</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body d-flex">
                            <i className="bi bi-lightning-charge-fill m-3 "></i>
                            <b>Confirmed</b>
                        </div>
                    <div>
                        <h3 className='ml-3'>10</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body d-flex">
                        <i className="bi bi-lightning-charge-fill m-3 "></i>
                        <b>Closed</b>
                    </div>
                    <div>
                        <h3 className='ml-3'>5</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body d-flex">
                        <i className="bi bi-lightning-charge-fill m-3 "></i>
                        <b>Cancelled</b>
                    </div>
                    <div>
                        <h3 className='ml-3'>3</h3>
                    </div>
                </div>
                </div>
                <div className='sample col-10'>
                    <div className='searchd'>
                        <nav className="navbar navbar-expand-md ">
                            <h3>All Appointments</h3>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto">
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
                                    <div className='newappointmentdashd'>
                                        <Link to={"newappointmer/"} className='nav-link'>
                                                <button type="button" className="btn btn-danger"><a href='/allappointments/newappointment' className='text-white'>+ New Appointment</a></button>
                                        </Link>    
                                    </div> 
                                    {/* <div className='newappointment'>
                                        <button type="button" className="btn btn-danger"><a href='New_Appointment' className='text-white'>+ New Appointment</a></button>
                                    </div>  */}
                                </ul>
                            </div>                  
                        </nav>
                    </div>
                    <hr className='col-12'/>                            
                </div>
                <div>
                    {
                        patients.length ?
                        patients.map(patients => 
                        <div key={patients.id}>
                            <div className='docappointmentd'>
                                <div className="card-group">
                                   <div className="card">
                                        <div className="card-body">
                                            <div className='card-title d-flex'>
                                                <div>        
                                                    <img src={Profilepic} alt='dp' className='rounded'/>
                                                </div>
                                                <div>
                                                    <h6 className="card-text">{patients.petName}</h6>
                                                    <p className='text-muted1'> {patients.gender}</p>
                                                    <p className='text-muted'>Owner:John Doe</p>
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
                                                <a href='Details'><h6>Details</h6></a>
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
                                                                    <input name="feedback" type="radio" />                                    
                                                                    <label className="ml-3">1</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">2</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">3</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">4</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">5</label>{" "}
                                                                </div>
                                                            </div>
                                                            <div className="form-check mb-4">
                                                                <h7>2.How satisfied are you for the outcome of treatment?</h7>
                                                                <div className='ml-5'>
                                                                    <input name="feedback" type="radio" />                                    

                                                                    <label className="ml-3">1</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">2</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">3</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">4</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">5</label>{" "}
                                                                </div>
                                                            </div>
                                                            <div className="form-check mb-4">
                                                                <h7>3.Wold you refer this doctor to others?</h7>
                                                                <div className='ml-5'>
                                                                    <input name="feedback" type="radio" />
                                                                    <label className="ml-3">1</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">2</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">3</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">4</label>{" "}
                                                                    <input name="feedback" type="radio" />{" "}
                                                                    <label className="ml-3">5</label>{" "}
                                                                </div>
                                                            </div>
                                                <div className="form-check mb-4">
                                                    <h7>4.How satisfied are you with the process of booking appointment?</h7>
                                                    <div className='ml-5'>
                                                        <input name="feedback" type="radio" />
                                                        <label className="ml-3">1</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">2</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">3</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">4</label>{" "}
                                                        <input name="feedback" type="radio" />{" "}
                                                        <label className="ml-3">5</label>{" "}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>Additional Comments</p>
                                                    <textarea type="textarea" placeholder="Your Comment" rows="3" cols="50" className='ml-3'/>
                                                </div>
                                                {/* <div className="modal-footer">
                                                    <button type="button" class="btn btn-secondary mr-auto" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>                                  
                                                </div> */}
                                                {/* NOT USED     */}
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
    </div>
        )
    }
}        
export default Doctordashboard    
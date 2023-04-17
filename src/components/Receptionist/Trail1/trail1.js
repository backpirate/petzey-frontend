import React, { Component } from 'react'
import './trail2.css';
import axios from 'axios'

 class demo extends Component {


constructor(props) {
  super(props)

  this.state = {
    appointmentId:'',
    reasonForVisit: '',
  }
}

changeHandler = (e)=>{
    this.setState({[e.target.name]:e.target.value})
} 

submitHandler =(e) =>{
e.preventDefault()
console.log(this.state)
axios.post("http://localhost:8080/appointment/appointments", this.state)
.then (response=> {
    console.log(response)
})
.catch(error =>{
console.log(error)
})

}

  render() {
    const {appointmentId, reasonForVisit} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>

        <div className='newapp'>
            <div className='back'><h6>Back to Appointments</h6></div>
             <h2>NewAppointment</h2><br/><br/>

              <p className="new-appointment-calendar-text d-flex justify-content-center">Your Schedule</p>
             

              <div className='vatdet'> <h5>Vaterinarian Details</h5></div><br/>
              <div className='vat' > <h6>Vaterinarian</h6></div>
              <div className='search'>
  <form class="form-inline d-flex justify-content-center md-form form-sm">
  <input type="search" class="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <i class="fa fa-search" aria-hidden="true"></i>
  </form>
  </div><br/>
   


              <div className='petdet'><h5>patient Details</h5></div><br/>
              <div className='pet'><h6>Pet Name</h6></div>
              <div className='search'>
  <form class="form-inline d-flex justify-content-center md-form form-sm">
  <input type="search" class="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <i class="fa fa-search" aria-hidden="true"></i>
  </form>
  </div><br/>


              <div className='otherdet'><h5>Other Details</h5></div><br/>
              <div className='other'>  <h6>Pet's issue</h6></div>

     <div className='search'>
  <form class="form-inline d-flex justify-content-center md-form form-sm">
  <input type="search" class="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
     <i class="fa fa-search" aria-hidden="true"></i>
  </form>
  </div><br/>

  <div>
            <textarea type ='text' name='reasonForVisit' value={reasonForVisit} onChange={this.changeHandler}></textarea>
         </div>

              <button type="button" class="btn btn-light">Cancel</button>
                  &nbsp;&nbsp;&nbsp;

                  <button type='submit' class="btn btn-danger">Book Appointment</button>

</div>

       


        </form>
        </div>
    )
  }
}

export default demo
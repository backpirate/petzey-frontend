import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'
import './newappointment.css';
import { Link } from 'react-router-dom';



function NewAppointment(){

  const [reasonForVisit,setReasonForVisit] =useState('')
  const [name,setName] =useState('')
  const[doctorName, setDoctorName] =useState('')




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  //POST Appointent
  const postData=(e)=>
  {
    e.preventDefault();
    // Axios.post('https://opt-appointment.learn.skillassure.com/appointment/post',{

    Axios.post('http://localhost:8092/appointment/appointmentss',{
      reasonForVisit
    }).then(res=>console.log("posting data",res))
    .catch(err=>console.log(err))


    Axios.post('http://localhost:8092/patient/patientss',{
      name
    }).then(res=>console.log("posting data",res))
    .catch(err=>console.log(err))


    Axios.post('http://localhost:8092/doctor/doctorss',{
      doctorName
    }).then(res=>console.log("posting data",res))
    .catch(err=>console.log(err))


  }

 
    return (
<div>
<div className='form'>
        <Link to={"/patientdashboard"} className='nav-link'>
        <p class='col'><i class="bi bi-arrow-left"></i>Back to appointments</p>
        </Link>
          <h4>New Appointment</h4>
          <hr/>
           

          <div>
            <h6>Veterinarian Details</h6>
          </div>
          <div>
            <p class='text-muted'>Veterinarian</p>
          </div>
          <div className='line'>  
            <i  class="bi bi-search"></i>
            <input type="text" value={doctorName} onChange={(e)=>setDoctorName(e.target.value)} ></input>

          </div>
          <div>
            <h6>Patient Details</h6>
          </div>
          <div>
            <p class='text-muted'>Pet Name</p>
          </div>
          <div className='line'>  
            <i  class="bi bi-search"></i>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ></input>

            {/* <input></input> */}
          </div>
          <div>
            <h6>Other Details</h6>
          </div>
          <div>
            <p class='text-muted'>Pet's Issues</p>
          </div>
          <div className='line'>
            <i  class="bi bi-search"></i>
            <input></input>
          </div>
          <div className='reason'>
            <p class='text-muted'>Reason for Visit</p>
            {/* <input type='text'></input> */}
            {/* <input type="text" value={reasonForVisit} onChange={(e)=>setReasonForVisit(e.target.value)}></input> */}
            <textarea type="text" value={reasonForVisit} onChange={(e)=>setReasonForVisit(e.target.value)} rows="2" cols="20"></textarea>

          
          </div>
        
<br/>
 <div className='ConfirmCancel'>
            <button type="button" onClick={handleShow1} class="btn btn-primary">Cancel</button>
            <Modal show={show1} onHide={handleClose1} >
            <Modal.Header closeButton>
              <h6 className='position-relative top-4 start-50 translate-middle btn-sm btn-light rounded-pill'><i class="bi bi-exclamation-triangle-fill "></i></h6>
            </Modal.Header>
            <Modal.Body>
              <h5 className='discard'>Discard Changes?</h5>
              <p className='text-muted text-center'>Do you want to discard changes ???</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"className='mr-auto' onClick={handleClose1}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleClose1}>
                  Confirm
              </Button>
            </Modal.Footer>
      </Modal>

      <button type="button" onClick={handleShow} class="btn btn-danger">Book Appointment</button>


            <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <h6 className='position-relative top-4 start-50 translate-middle btn-sm btn-light rounded-pill'><i class="bi bi-exclamation-triangle-fill "></i></h6>
            </Modal.Header>
            <Modal.Body>
              <h5 className='discard'>Book Appointment</h5>
              <p className='text-muted text-center'>Do you want to discard changes ???</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"className='mr-auto' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={postData} >
                {/* <Link to={"newappointment"} className='nav-link'> */}
                  Confirm
                {/* </Link> */}
              </Button>
            </Modal.Footer>
      </Modal>
          </div>
        </div>
</div>   
    )
    }


export default NewAppointment















// import React, { Component } from 'react';
// import './newappointment.css';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import axios from 'axios'

// class newappointment extends Component {
 
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       appointmentId:'',
//       reasonForVisit: '',
//     }
//   }
  
//   changeHandler = (e)=>{
//       this.setState({[e.target.name]:e.target.value})
//   } 
  
//   submitHandler =(e) =>{
//   e.preventDefault()
//   console.log(this.state)
//   axios.post("http://localhost:8092/appointmentAI/appointments", this.state)
//   .then (response=> {
//       console.log(response)
//   })
//   .catch(error =>{
//   console.log(error)
//   })
  
//   }
  
//     render() {
//       const {appointmentId, reasonForVisit} = this.state

//  return (
//     // <div className='temp'>
//     <div className='newappointmentd'>
//       <div className='form'>
//         <p class='col'><i class="bi bi-arrow-left"></i>Back to appointments</p>
//           <h4>New Appointment</h4>
//           <hr/>
//           {/* <p className="new-appointment-calendar-text d-flex justify-content-center">Your Schedule</p>*/}
//           <button type="button" class="btn btn-light"> <i class="bi bi-calendar"></i>Today</button> 
//           <div>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//           </div>
//           <div>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type="button" class='btn btn-light btn-lg'>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-primary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//           </div>
//           <div>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//           </div>
//           <div>
//             <h6>Patient Details</h6>
//           </div>
//           <div>
//             <p class='text-muted'>Pet Parent</p>
//           </div>
//           <div className='line'>  
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div>
//             <p class='text-muted'>Pet Name</p>
//           </div>
//           <div className='line'>  
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div>
//             <h6>Other Details</h6>
//           </div>
//           <div>
//             <p class='text-muted'>Pet Issues</p>
//           </div>
//           <div className='line'>
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div className='reason'>
//             <p class='text-muted'>Reason for Visit</p>
//             {/* <textarea name="message" rows="5" cols="30"></textarea> */}
//             <textarea type='text' value={reasonForVisit} onChange={this.changeHandler}></textarea>
//           </div>
//           <div className='ConfirmCancel'>
//             <button type="button" class="btn btn-primary" >Cancel</button>
//             <button type="button" class="btn btn-danger">Book Appointment</button>
//           </div>
//         </div>
      
      
//         {/* <div class="ex1">
//           <Card  style={{ width: '14rem' ,height:'6rem' }} className='main1'>
//       {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU" circle className='image'/> */}
//           {/* <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU' roundedCircle style={{width:'70px',height:'70px',marginLeft:'-65%',marginTop:'5%'}}/>
//           <div className='main'>
//             <Card.Body>
//               <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU' roundedCircle style={{width:'30px',height:'30px',marginLeft:'-35%',marginTop:'5%'}}/>
//               <Card.Title style={{fontSize:'16px',marginRight:'-20%',marginTop:'-16%'}}>DOGGO</Card.Title>
//               <Card.Text className='cardbody'>
//                 <p style={{marginRight:'-37%',marginTop:'-3.8%'}}>MALE:2.2 YEARS</p>
//                 <p style={{marginLeft:'-37%',marginBottom:'-6.8%'}}>Dr John Doe</p>
//               </Card.Text> 
//             </Card.Body>
//           </div>
//         </Card>
//       </div> */}
//     </div>    
         
          
        
//         // </div>
//   )
//  }
// }

// export default newappointment










// import React, { Component } from 'react';
// import './newappointment.css';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import axios from 'axios'

// class newappointment extends Component {
 
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       appointmentId:'',
//       reasonForVisit: '',
//     }
//   }
  
//   changeHandler = (e)=>{
//       this.setState({[e.target.name]:e.target.value})
//   } 
  
//   submitHandler =(e) =>{
//   e.preventDefault()
//   console.log(this.state)
//   axios.post("http://localhost:8092/appointmentAI/appointments", this.state)
//   .then (response=> {
//       console.log(response)
//   })
//   .catch(error =>{
//   console.log(error)
//   })
  
//   }
  
//     render() {
//       const {appointmentId, reasonForVisit} = this.state

//  return (
//     // <div className='temp'>
//     <div className='newappointmentd'>
//       <div className='form'>
//         <p class='col'><i class="bi bi-arrow-left"></i>Back to appointments</p>
//           <h4>New Appointment</h4>
//           <hr/>
//           {/* <p className="new-appointment-calendar-text d-flex justify-content-center">Your Schedule</p>*/}
//           <button type="button" class="btn btn-light"> <i class="bi bi-calendar"></i>Today</button> 
//           <div>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//           </div>
//           <div>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type="button" class='btn btn-light btn-lg'>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-primary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//           </div>
//           <div>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type="button" class='btn btn-outline-dark btn-lg'>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//             <button type='button' class='btn btn-secondary btn-lg' disabled>11:00</button>
//           </div>
//           <div>
//             <h6>Patient Details</h6>
//           </div>
//           <div>
//             <p class='text-muted'>Pet Parent</p>
//           </div>
//           <div className='line'>  
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div>
//             <p class='text-muted'>Pet Name</p>
//           </div>
//           <div className='line'>  
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div>
//             <h6>Other Details</h6>
//           </div>
//           <div>
//             <p class='text-muted'>Pet Issues</p>
//           </div>
//           <div className='line'>
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div className='reason'>
//             <p class='text-muted'>Reason for Visit</p>
//             {/* <textarea name="message" rows="5" cols="30"></textarea> */}
//             <textarea type='text' value={reasonForVisit} onChange={this.changeHandler}></textarea>
//           </div>
//           <div className='ConfirmCancel'>
//             <button type="button" class="btn btn-primary" >Cancel</button>
//             <button type="button" class="btn btn-danger">Book Appointment</button>
//           </div>
//         </div>
      
      
//         {/* <div class="ex1">
//           <Card  style={{ width: '14rem' ,height:'6rem' }} className='main1'>
//       {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU" circle className='image'/> */}
//           {/* <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU' roundedCircle style={{width:'70px',height:'70px',marginLeft:'-65%',marginTop:'5%'}}/>
//           <div className='main'>
//             <Card.Body>
//               <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU' roundedCircle style={{width:'30px',height:'30px',marginLeft:'-35%',marginTop:'5%'}}/>
//               <Card.Title style={{fontSize:'16px',marginRight:'-20%',marginTop:'-16%'}}>DOGGO</Card.Title>
//               <Card.Text className='cardbody'>
//                 <p style={{marginRight:'-37%',marginTop:'-3.8%'}}>MALE:2.2 YEARS</p>
//                 <p style={{marginLeft:'-37%',marginBottom:'-6.8%'}}>Dr John Doe</p>
//               </Card.Text> 
//             </Card.Body>
//           </div>
//         </Card>
//       </div> */}
//     </div>    
         
          
        
//         // </div>
//   )
//  }
// }

// export default newappointment
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'
import './newappointment.css';
import { Link } from 'react-router-dom';



function NewAppointment(){

  const [reasonForVisit,setReasonForVisit] =useState('')


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  //POST Appoitment
  const postData=(e)=>
  {
    e.preventDefault();
    // Axios.post('https://opt-appointment.learn.skillassure.com/appointment/post',{

    Axios.post('http://localhost:8080/appointment/post',{
      reasonForVisit
    }).then(res=>console.log("posting data",res))
    .catch(err=>console.log(err))
  }

 
    return (
<div>
<div className='form'>
        <Link to={"/allappointments"} className='nav-link'>
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
            <input></input>
          </div>
          <div>
            <h6>Patient Details</h6>
          </div>
          <div>
            <p class='text-muted'>Pet Name</p>
          </div>
          <div className='line'>  
            <i  class="bi bi-search"></i>
            <input></input>
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




// //import React from 'react';
// import './newappointment.css';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import React, { useState} from 'react';


// const Newappointment = () => {

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [show1, setShow1] = useState(false);

//   const handleClose1 = () => setShow1(false);
//   const handleShow1 = () => setShow1(true);



//  return (
//     <div>

//       <div className='form'>
//         <Link to={"/allappointments"} className='nav-link'>
//         <p class='col'><i class="bi bi-arrow-left"></i>Back to appointments</p>
//         </Link>
//           <h4>New Appointment</h4>
//           <hr/>
//           {/* <p className="new-appointment-calendar-text d-flex justify-content-center">Your Schedule</p>*/}

//           <div>
//             <h6>Veterinarian Details</h6>
//           </div>
//           <div>
//             <p class='text-muted'>Veterinarian</p>
//           </div>
//           <div className='line'>  
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div>
//             <h6>Patient Details</h6>
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
//             <p class='text-muted'>Pet's Issues</p>
//           </div>
//           <div className='line'>
//             <i  class="bi bi-search"></i>
//             <input></input>
//           </div>
//           <div className='reason'>
//             <p class='text-muted'>Reason for Visit</p>
//             {/* <textarea name="message" rows="5" cols="30"></textarea> */}
//             <input type='text'></input>
//           </div>
//           {/* <Modal.Dialog>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <p>Modal body text goes here.</p>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary">Close</Button>
//         <Button variant="primary">Save changes</Button>
//       </Modal.Footer>
//     </Modal.Dialog> */}
//           <div className='ConfirmCancel'>
//             <button type="button" onClick={handleShow} class="btn btn-primary">Cancel</button>
//             <Modal show={show} onHide={handleClose} >
//             <Modal.Header closeButton>
//               <h6 className='position-relative top-4 start-50 translate-middle btn-sm btn-light rounded-pill'><i class="bi bi-exclamation-triangle-fill "></i></h6>
//             </Modal.Header>
//             <Modal.Body>
//               <h5 className='discard'>Discard Changes</h5>
//               <p className='text-muted text-center'>Do you want to discard changes ?</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary"className='mr-auto' onClick={handleClose}>
//                 Cancel
//               </Button>
//               <Button variant="danger" onClick={handleClose}>
//                 <Link to={"newappointment"} className='nav-link'>
//                   Confirm
//                 </Link>
//               </Button>
//             </Modal.Footer>
//       </Modal>
//             <button type="button" class="btn btn-danger" onClick={handleShow}>Book Appointment</button>
//             <Modal show1={show1} onHide={handleClose} >
//             <Modal.Header closeButton>
//               <h6 className='position-relative top-4 start-50 translate-middle btn-sm btn-light rounded-pill'><i class="bi bi-exclamation-triangle-fill "></i></h6>
//             </Modal.Header>
//             <Modal.Body>
//               <h5 className='discard'>Book Appointment</h5>
//               <p className='text-muted text-center'>Do you want to discard changes ?</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary"className='mr-auto' onClick={handleShow1}>
//                 Cancel
//               </Button>
//               <Button variant="danger" onClick={handleClose1}>
//                 Confirm
//               </Button>
//             </Modal.Footer>
//       </Modal>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Newappointment
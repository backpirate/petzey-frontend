import React, { Component } from "react"
import axios from "axios"
import './doctor_profile.css'
import ProfilePic from '../../../images/petowner.jpeg'


export default class extends Component {
  constructor(props) {
      super(props)
      this.state = {
        doctorName: "",
        doctorEmail: "",
        doctorMobileNo: "",
        npiNo: "",  
        speciality: "",
        data :{ }
      }
    }

    changeHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }

// UPDATE Doctor by ID
    updateData=(e)=>{
      e.preventDefault();
    
      const newData ={ 
        doctorName: this.state.doctorName,
        doctorMobileNo: this.state.doctorMobileNo,    
      }
      
      console.log(newData);
      axios.put('https://opt-appointment.learn.skillassure.com/appointment/doctor/doctorEdit/202', newData)
      // axios.put('http://localhost:8080/doctor/doctorEdit/202', newData)
    .then (response => {
      this.setState({doctorId:response.id},
    
      {doctorName:response.doctorName},
      {doctorMobileNo:response.doctorMobileNo}
      )
    })
      .catch((err)=>{
        console.log(err);
      })  
    }


// GET Doctor 
componentDidMount() {

  // axios.get("https://opt-appointment.learn.skillassure.com/appointment/doctor/doctor/202")
  
      axios.get(" http://localhost:8080/doctor/doctor/202")

  .then(response => {
      this.setState({
        doctorName: response.data.doctorName,
        doctorEmail: response.data.doctorEmail,
        doctorMobileNo: response.data.doctorMobileNo,
        npiNo:response.data.npiNo,
        speciality: response.data.speciality,
          
        })
  })
  .catch(error => {
    console.log(error)
  })
}

render() {
  return (
    <div className="temp">
      <div className="doctor_profile">
        <div className='row'>    {/*col-md-3'*/}
          <div class='col-lg-12 col-md-3'>
            <div class=" bg-white">
              <div class="card-body ">
                <div class="card-text">
                <h6>Account Details</h6>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalScrollable">
                Edit
              </button>
              <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>                 
                    <div class="modal-body">
                      <h6>Edit Profile</h6>
                      <p className='text-muted'>Update account details</p>
                      <div className='d-flex'>
                        <img src={ProfilePic} alt='Profile pic' className='w-25 mr-3;'/>
                        <div className>
                          <p className='docinput text-muted ml-4'> Name</p>
                          <input type="text" placeholder='Usename' name="doctorName"      onChange={(e) => this.changeHandler(e)}  className='ml-4'></input>

                          {/* <input placeholder='Usename' className='ml-4'></input> */}
                        </div>
                      </div>
                      <div>
                        <p className ='text-muted m-4'> Gender </p>
                        <div className='d-flex m-3'>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                          <label class="form-check-label" for="exampleRadios1">
                            Mr
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                          <label class="form-check-label" for="exampleRadios2">
                            Mrs
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                          <label class="form-check-label" for="exampleRadios2">
                            Other
                          </label>
                        </div>
                      </div>
                      <div className='docinput ml-4'>
                        <p text-muted> Mobile</p>
                        <input type="text" name="doctorMobileNo"    onChange={(e) => this.changeHandler(e)}  placeholder='Mobile Number'  />

                        {/* <input placeholder='Mobile Number'/> */}
                      </div>
                      <div className='ml-3'>
                        <h6 className='text-muted ml-4 mt-3'>Location</h6>
                        {/* <textarea  placeholder='Loction'></textarea> */}
                        <textarea name="message" rows="3" cols="50"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={this.updateData}   type="submit" className="btn btn-primary">Save changes</button>

                    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                  </div>
                </div>
              </div>
            </div>



              </div>
              <p className='manage'>Manage your Account details here</p>
              <hr/>
            </div>
          </div>
        </div>
        <div className='Profile_info'>
          {/* <img src={ProfilePic} alt='profile_pic'/> */}
          <div className='Profile_Text'>
            <h6 class='text-secondary'>Name</h6>
            <h6 class='text-secondary'>NPI NO.</h6>
            <h6 class='text-secondary'>Speciality</h6>
          </div>
          <div className='Profile_Text'>
            <h6 class='text-secondary'><span>:</span></h6>
            <h6 class='text-secondary'><span>:</span></h6>
            <h6 class='text-secondary'><span>:</span></h6>
          </div>
          <div>
            <h6 ><span>{this.state.doctorName} </span></h6>
            <h6 ><span>{this.state.npiNo}</span></h6>
            <h6 ><span>{this.state.speciality}</span></h6>
          </div>
          <div className='Profile_Text'>
            <h6 class='text-secondary'>Mobile</h6>
            <h6 class='text-secondary'>Email</h6>
            {/* <h6 class='text-secondary'>Speciality</h6> */}
          </div>
          <div className='Profile_Text'>
            <h6 class='text-secondary'><span>:</span></h6>
            <h6 class='text-secondary'><span>:</span></h6>
            {/* <h6 class='text-secondary'><span>:</span></h6> */}
          </div>
          <div>
            <h6 ><span>{this.state.doctorMobileNo}</span></h6>
            <h6 ><span>{this.state.doctorEmail}</span></h6>
            {/* <h6 ><span>{this.state.name}</span></h6> */}
            {/* <h6 ><span>Utah,Us</span></h6> */}
    
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
}

















// import React, { Component } from "react"
// import axios from "axios"
// import './doctor_profile.css'
// import ProfilePic from '../../../images/petowner.jpeg'


// export default class extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           doctorName: null,
//           doctorEmail: null,
//           doctorMobileNo: null,
//           npiNo: null,  
//           speciality: null
//         }
//       }

//   componentDidMount() {
//     // axios.get("https://opt-appointment.learn.skillassure.com/doctor/1")
//         axios.get("http://localhost:8080/doctor/1")

//     .then(response => {
//         this.setState({
//           doctorName: response.data.doctorName,
//           doctorEmail: response.data.doctorEmail,
//           doctorMobileNo: response.data.doctorMobileNo,
//           npiNo:response.data.npiNo,
//           speciality: response.data.speciality,
            
//           })
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   render() {
//     return (
//       <div className="">
//         <div className="doctor_profile">
//           <div className='row'>    {/*col-md-3'*/}
//             <div class='col-lg-12 col-md-3'>
//               <div class=" bg-white">
//                 <div class="card-body ">
//                   <div class="card-text">
//                   <h6>Account Details</h6>
//                   <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalScrollable">
//                   Edit
//                 </button>
//                 <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
//                   <div class="modal-dialog modal-dialog-scrollable" role="document">
//                     <div class="modal-content">
//                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                       </button>                 
//                       <div class="modal-body">
//                         <h6>Edit Profile</h6>
//                         <p className='text-muted'>Update account details</p>
//                         <div className='d-flex'>
//                           <img src={ProfilePic} alt='Profile pic' className='w-25 mr-3;'/>
//                           <div className>
//                             <p className='docinput text-muted ml-4'> Name</p>
//                             <input placeholder='Usename' className='ml-4'></input>
//                           </div>
//                         </div>
//                         <div>
//                           <p className ='text-muted m-4'> Gender </p>
//                           <div className='d-flex m-3'>
//                           <div class="form-check">
//                             <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
//                             <label class="form-check-label" for="exampleRadios1">
//                               Mr
//                             </label>
//                           </div>
//                           <div class="form-check">
//                             <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
//                             <label class="form-check-label" for="exampleRadios2">
//                               Mrs
//                             </label>
//                           </div>
//                           <div class="form-check">
//                             <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
//                             <label class="form-check-label" for="exampleRadios2">
//                               Other
//                             </label>
//                           </div>
//                         </div>
//                         <div className='docinput ml-4'>
//                           <p text-muted> Mobile</p>
//                           <input placeholder='Mobile Number'/>
//                         </div>
//                         <div className='ml-3'>
//                           <h6 className='text-muted ml-4 mt-3'>Location</h6>
//                           {/* <textarea  placeholder='Loction'></textarea> */}
//                           <textarea name="message" rows="3" cols="50"></textarea>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="modal-footer">
//                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                       <button type="button" class="btn btn-primary">Save changes</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>



//                 </div>
//                 <p className='manage'>Manage your Account details here</p>
//                 <hr/>
//               </div>
//             </div>
//           </div>
//           <div className='Profile_info'>
//             {/* <img src={ProfilePic} alt='profile_pic'/> */}
//             <div className='Profile_Text'>
//               <h6 class='text-secondary'>Name</h6>
//               <h6 class='text-secondary'>NPI NO.</h6>
//               <h6 class='text-secondary'>Speciality</h6>
//             </div>
//             <div className='Profile_Text'>
//               <h6 class='text-secondary'><span>:</span></h6>
//               <h6 class='text-secondary'><span>:</span></h6>
//               <h6 class='text-secondary'><span>:</span></h6>
//             </div>
//             <div>
//               <h6 ><span>{this.state.doctorName} </span></h6>
//               <h6 ><span>{this.state.npiNo}</span></h6>
//               <h6 ><span>{this.state.speciality}</span></h6>
//             </div>
//             <div className='Profile_Text'>
//               <h6 class='text-secondary'>Mobile</h6>
//               <h6 class='text-secondary'>Email</h6>
//               {/* <h6 class='text-secondary'>Speciality</h6> */}
//             </div>
//             <div className='Profile_Text'>
//               <h6 class='text-secondary'><span>:</span></h6>
//               <h6 class='text-secondary'><span>:</span></h6>
//               {/* <h6 class='text-secondary'><span>:</span></h6> */}
//             </div>
//             <div>
//               <h6 ><span>{this.state.doctorMobileNo}</span></h6>
//               <h6 ><span>{this.state.doctorEmail}</span></h6>
//               {/* <h6 ><span>{this.state.name}</span></h6> */}
//               {/* <h6 ><span>Utah,Us</span></h6> */}
      
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     )
//   }
// }
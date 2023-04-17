import React, { Component } from 'react'
import './patoent_profile.css'
import ProfilePic from '../../images/petowner.jpeg';
import axios from 'axios'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/esm/Image';

export default class patient_profile extends Component{
      constructor(props){
        super(props)
        this.state = {
          parentName: "",
          address: "",
          mobileNo: "",
          name:"",
          age:"",
          gender:"",
          data :{ },
          
        }
      }



      changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
  
      updateData=(e)=>{
        e.preventDefault();
      
        const newData ={ 
          parentName: this.state.parentName,
          mobileNo: this.state.mobileNo,
          address: this.state.address,
        }
        
        console.log(newData);
        axios.put('http://localhost:8092/PetParent/petparentEdit/1', newData)
      .then (response => {
        this.setState({patientId:response.id},
      
        {parentName:response.parentName},
        {mobileNo:response.mobileNo},
        {address:response.address},

        )
      })
        .catch((err)=>{
          console.log(err);
        })  
      }
  
      //GET PetParent
      componentDidMount(){
        // axios.get("https://opt-appointment.learn.skillassure.com/petparent/1")
          axios.get("http://localhost:8092/PetParent/PetParents/1")

          .then(response=>{
            this.setState({
              parentName:response.data.parentName,
              address:response.data.address,
              mobileNo:response.data.mobileNo
            })
          })


          //Get Patient
          // axios.get("https://opt-appointment.learn.skillassure.com/pet/pet/1")
          axios.get("http://localhost:8092/patient/getsymptominfo/1")
        .then(response=>{
          this.setState({
            name:response.data.name,
            gender:response.data.gender,
            age:response.data.age
          })
        })
          .catch(error=>{console.log(error)})



          // axios.post('http://localhost:8092/patient/patientss',{
          //   name
          // }).then(res=>console.log("posting data",res))
          // .catch(err=>console.log(err))

      }

      render(){
            return (
              <div className=""> {/*temp position-absolute */}
              <div className='patient_profile'>
              <div className='mb-3'>
                <div className='patientparent'>
                  <div className='row'>    {/*col-md-3'*/}
                    <div className='col-lg-12 col-md-3'>
                      <div className=" bg-white">
                        <div className="card-body ">
                          <div className="card-text">
                            <h6>Account Details</h6>
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#owneredit">
                              Edit
                            </button>
                            <div className="modal fade" id="owneredit" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-scrollable" role="document">
                                <div className="modal-content">
                                              
                                  <div className="modal-body">
                                    <h6>Edit Profile</h6>
                                    <p className='text-muted'>Update account details</p>
                                    <div className='d-flex'>
                                      <img src={ProfilePic} alt='Profile pic' className='w-25 mr-3;'/>
                                      <div className>
                                        <p className='docinput text-muted ml-4'> Name</p>
                                        {/* <input placeholder='Usename' className='ml-4'></input> */}
                                        <input type="text" placeholder='Usename' name="parentName"      onChange={(e) => this.changeHandler(e)}  className='ml-4'></input>

                                      </div>
                                    </div>
                                    <div>
                                      <p className ='text-muted m-4'> Gender </p>
                                      <div className='d-flex m-3'>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                          <label className="form-check-label" for="exampleRadios1">
                                            Mr
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                          <label className="form-check-label" for="exampleRadios2">
                                            Mrs
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                          <label className="form-check-label" for="exampleRadios3">
                                            Other
                                          </label>
                                        </div>
                                      </div>
                                      <div className='docinput ml-4'>
                                        <p text-muted> Mobile</p>
                                        <input type="Number" name="mobileNo"   onChange={(e) => this.changeHandler(e)}  placeholder='Mobile Number'  />

                                        {/* <input placeholder='Mobile Number'/> */}
                                      </div>
                                      <div className='ml-3'>
                                        <h6 className='text-muted ml-4 mt-3'>Location</h6>
                                        <textarea type ="text" name="address" onChange={(e) => this.changeHandler(e)}     rows="3" cols="50"></textarea>

                                        {/* <textarea name="message" rows="3" cols="50"></textarea> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  
                                    <button onClick={this.updateData}   type="submit" className="btn btn-primary">Save changes</button>

                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                            <p className='manage'>Manage your team members and theiraccount permissions here</p>
                            <hr/>
                          </div>
                        </div>
                      </div>
                      <div className='Profile_info'>
                        <img src={ProfilePic} alt='profile_pic'/>                         
                        <div className='Profile_Text'>
                          <h6 className='text-secondary'>Name</h6>
                          <h6 className='text-secondary'>MObile</h6>
                          <h6 className='text-secondary'>Location</h6>
                        </div>
                        <div className='Profile_Text'>
                          <h6 className='text-secondary'><span>:</span></h6>                         
                          <h6 className='text-secondary'><span>:</span></h6>
                          <h6 className='text-secondary'><span>:</span></h6>
                        </div>
                        <div>
                          <h6 ><span>{this.state.parentName}</span></h6>
                          <h6 ><span>{this.state.mobileNo}</span></h6>
                          <h6 ><span>{this.state.address}</span></h6>
                          <h6 ><span></span></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='patient'>
                  <div className='row'>    {/*col-md-3'*/}
                  <div className='col-lg-12 col-md-3'>
                    <div className=" bg-white">
                      <div className="card-body ">
                        <div className="card-text">
                          <h6>Pet Details</h6>
                          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalScrollable">
                            + New Pet
                          </button>
                          <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable" role="document">
                              <div className="modal-content">
                                              
                                <div className="modal-body">
                                  <h6>Edit Pet Profile</h6>
                                  <p className='text-muted'>Update account details</p>
                                  <div className='d-flex'>
                                    <img src={ProfilePic} alt='Profile pic' className='w-25 mr-3;'/>
                                    <div className>
                                      <p className='docinput text-muted ml-4'> Name</p>
                                      <input placeholder='Usename' className='ml-4'></input>
                                    </div>
                                  </div>
                                  

                                  <div>
                                  <p className ='text-muted m-4'> Species </p>
                                    <div className='d-flex m-3'>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                        <label className="form-check-label" for="exampleRadios1">
                                          Dog
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                        <label className="form-check-label" for="exampleRadios2">
                                          Cat
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                        <label className="form-check-label" for="exampleRadios2">
                                          Reptile
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                        <label className="form-check-label" for="exampleRadios2">
                                          Other
                                        </label>
                                      </div>
                                    </div>  

                                  </div>

                                  <div>
                                    <p className ='text-muted m-4'> Gender </p>
                                    <div className='d-flex m-3'>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                        <label className="form-check-label" for="exampleRadios1">
                                          Male
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                        <label className="form-check-label" for="exampleRadios2">
                                          Female
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                        <label className="form-check-label" for="exampleRadios2">
                                          Neutered
                                        </label>
                                      </div>
                                    </div>
                                    <div className='docinput ml-4 d-flex'>
                                      <div>
                                        <p text-muted> Date of Birth</p>
                                        <input placeholder='DOB' /><i className="bi bi-calendar-event"></i>
                                      </div>
                                      <div className='ml-4'>
                                        <p>Age</p>
                                        <input placeholder='DOB' />
                                      </div>
                                    </div>
                                    <div className='docinput ml-4 mt-3'>
                                      <p>Blood Group</p>
                                      <input placeholder='DOB' />
                                    </div>
                                    <div className='docinput ml-4 mt-3'>
                                      <p>Allergies</p>
                                      <input placeholder='Allergies' />
                                    </div>

                                    {/* <div className='ml-3'>
                                      <h6 className='text-muted ml-4 mt-3'>Location</h6>
                                      {/* <textarea  placeholder='Loction'></textarea> */}
                                      {/*<textarea name="message" rows="3" cols="50"></textarea>
                                    </div> */}
                                  </div>
                                </div>
                                <div className="modal-footer justify-content : space-around">
                                  <button type="button" className="btn btn-secondary ml-1 mr-auto" data-dismiss="modal" >Close</button>
                                  {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                  {/* <button onClick={postPutEvent}>Submit</button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          <p className='manage'>Manage your pets here</p>
                          <hr/>
                        </div>
                      </div>
                    </div>
                    <div className='Profile_info'>
                    <Card  style={{ width: '14rem' ,height:'6rem',marginLeft:'4%' }} className='main1'>

                      {/* <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU" circle className='image'/> */}
                      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRVDc3u-H2EhNDuD55wGd-WNkVOqOLLbhMQ&usqp=CAU' roundedCircle style={{width:'70px',height:'70px',marginLeft:'5%',marginTop:'5%'}}/>
                      <div className='main'>
                        <Card.Body>
                          <Card.Title style={{fontSize:'16px',marginLeft:'40%',marginTop:'-40%'}}> pinku <span>{this.state.name}</span></Card.Title>
                          <Card.Text className='cardbody'>
                            {/* <p style={{marginLeft:'-37%'}}>NAVLE</p> */}
                            <p style={{marginLeft:'40%',marginTop:'-3.8%'}}>Female,  4<span>{this.state.gender}</span></p>
                            <p style={{marginLeft:'40%',marginTop:'-3.8%'}}> <span>{this.state.age}</span></p>
                          </Card.Text>
                        </Card.Body>
                      </div>
                  </Card>
                    
                  </div>
                </div>
                </div>
              </div>    
              </div>
            </div>         
            )
          }
    }

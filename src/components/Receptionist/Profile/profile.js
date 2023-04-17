import React from 'react'
import './profile.css'
import ProfilePic from '../../images/petowner.jpeg';
import './Trail/trail'

const Profile = () => {


  
  return (
    <div className=""> {/**temp position-absolute */}
    <div className='recp-profile'>
     <div className='row'>    {/*col-md-3'*/}
      <div className='col-lg-12 col-md-3'>
        <div className=" bg-white">
          <div className="card-body ">
            <div className="card-text">
            <h6>Account Details</h6>
            {/* <button type="button" className="btn btn-danger">Edit</button> */}


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
                        <input placeholder='Usename' className='ml-4'></input>
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
                      <input placeholder='Mobile Number'/>
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
                  <button type="button" class="btn btn-primary" >Save changes</button>
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
        <h6 className='text-secondary'>Mobile</h6>
        <h6 className='text-secondary'>Location</h6>
      </div>
      <div className='Profile_Text'>
        <h6 className='text-secondary'><span>:</span></h6>
        <h6 className='text-secondary'><span>:</span></h6>
        <h6 className='text-secondary'><span>:</span></h6>
      </div>
      <div>
        <h6 ><span>Mrs.Sally Mae</span></h6>
        <h6 ><span>+412121344</span></h6>
        <h6 ><span>New York,USA</span></h6>
        <h6 ><span>7810</span></h6>
      </div>
    </div> 
  </div>
  </div>
  </div>
  )
}

export default Profile
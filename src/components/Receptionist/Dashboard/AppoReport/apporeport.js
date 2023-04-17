// import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './apporeport.css';
import axios from 'axios';

import React, { Component } from 'react'

 class appointreport extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         report:[]
      }
    }


    // Get Appointment
    componentDidMount()
    {
        // axios.get('https://opt-appointment.learn.skillassure.com/appointment/appointmentAl/getpetparentAppo/1')
    axios.get('http://localhost:8080/appointmentAl/getpetparentAppo/1')
  .then(response => {console.log(response)
    this.setState({report:response.data})})
  .catch(error => {console.log(error) })
    }


  render() {
    const{report}=this.state
    const{prescription}=this.state
    return (
    <div className='apporeportr'>

        <div>
           <div>
            {
                report.length ?
                report.map(report=>
                    
                    // style={{backgroundColor:'#DDDDDD',marginLeft: '8%',marginRight:'-65px'}}>
           <div style={{backgroundColor:'#DDDDDD',marginLeft: '8%',marginRight:'-65px',paddingBottom:'200px'}}>
        {/* <Container  style={{backgroundColor:'#DDDDDD',marginLeft: '8%',marginRight:'-65px'}}> */}
            <div className='firstpart'>
         <p style={{paddingTop:'10px'}}><i className="bi bi-arrow-left"></i> Back to appointments</p>
         <h3 style={{marginTop:'-10px'}}>#ID-{report.petId}</h3>
         <p style={{marginTop:'-10px'}}><i className="fas fa-calendar input-prefix "></i> 25th March,2022 <i className="bi bi-clock"></i> 10:23 PM</p>
         </div>
         {/* </Container> */}
         <Container fluid>
            <Row>
                <Col>
                <div className='arpicons'>
                    <i className="bi bi-chat-right-text-fill"></i>
                    <i className="bi bi-telephone-fill"></i>
                    <i className="fas fa-video"></i>
                </div>
                </Col>
                <Col>
                <Button variant="danger" size="sm" style={{marginLeft:'910px',marginTop:'-130px'}}>Cancel Appointment</Button>
                </Col>
            </Row>
         </Container>
         <div className='secondpart'>
         <p>Pet Issuse:<span>{report.details}</span> </p>
         <p>Reason for visit : {report.reasonForVisit}</p>
         <p> Confirmed by {report.doctorName}</p>
         <hr/>
         </div>
         {/* <Container fluid> */}
         {/* xs={2} */}
         {/* md={3} */}
            <Row  >
                <Card className='parentcard'>
                <Row>
                <Col > 
                <img style={{marginLeft: '15px',marginTop: '10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvW5SpUaaEkSgPw_IYzYoc0yjIgDUab0ZCQ&usqp=CAU"  className="rounded-circle" height="75px" width="75px" alt="Dr.jhon Doe"/>
                <div className='parentcard1'>
                <p style={{marginTop:'-60px'}}>Patient</p>
                <h6 style={{marginTop:'-20px'}}>{report.petName}</h6>
                <p style={{marginTop:'-5px'}}>Dog,{report.species}</p>
                </div>
                <p >Gender : {report.gender}</p>
                <p style={{marginTop:'-17px'}}>Age :{report.age} </p>

                </Col>
                <Col>
                <img style={{marginLeft: '15px',marginTop: '10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvW5SpUaaEkSgPw_IYzYoc0yjIgDUab0ZCQ&usqp=CAU"  className="rounded-circle" height="75px" width="75px" alt="Dr.jhon Doe"/>
                <p style={{marginLeft:'135px',marginTop:'-65px'}}>Pet Owner</p>
                <h6 style={{marginTop:'-10px'}}>{report.parentName}</h6>
                <p style={{marginTop:'20px',marginLeft:'27px',padding:'10px'}}><i className="bi bi-envelope p-2"></i> {report.parentEmail}</p>
                <p style={{marginTop:'-20px',marginLeft:'27px',padding:'10px'}}><i className="bi bi-telephone-fill p-2"></i> {report.parentMobileNo}</p>
                <p style={{marginTop:'-20px',marginLeft:'27px',padding:'10px'}}><i className="bi bi-house p-2"></i> {report.location}</p>

                </Col>
                </Row>
                </Card>
                <Card className='doctorcard'>
                <Col>
                <img style={{marginLeft: '15px',marginTop: '15px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvW5SpUaaEkSgPw_IYzYoc0yjIgDUab0ZCQ&usqp=CAU"  className="rounded-circle" height="75px" width="75px" alt="Dr.jhon Doe"/>
                    <div className='doctorname'>
                    <p style={{marginTop:'-80px'}}>Doctor</p>
                    <h5 style={{marginTop:'-18px'}}>{report.doctorName}</h5>
                    
                    </div>
                    <h6 style={{marginLeft:'140px'}}>NAVLE</h6>
                    <p style={{marginTop:'22px'}}>NPI No : {report.npiNo}</p>
                    <p style={{marginTop:'-10px'}}>Clinic : {report.addClinic}</p>
                    <p style={{marginLeft:'177px',marginTop:'-70px'}}><i className="bi bi-envelope p-2"></i> {report.doctorEmail}</p>
                    <p style={{marginLeft:'177px',marginTop:'-15px'}}><i className="bi bi-telephone-fill p-2"></i> {report.doctorMobileNo}</p>

                </Col>
                </Card>
                </Row>
                <div className='apr'>
                    <h5 style={{paddingBottom:'10px'}}>Appointment Report</h5>
                    <div className='button2'>
                    <Button variant="light"><i className="bi bi-download"></i>Report</Button>
                    {/* <Button variant="danger">Edit Report</Button> */}
                    </div>
                    <hr/>
                </div>
                
                <Row>
                    
                    <Card className='perscription'>
                    <h6> Prescriptions</h6>
                        <div className='pres1'>
                            <p style={{paddingTop:'10px'}}>1. {report.medicineName}</p>
                            <p>Days : {report.days}</p>
                            <p>{report.comments}</p>
                            <p style={{marginLeft:'75%',marginTop:'-15%'}}>{report.consume}</p>
                            <p style={{marginLeft:'75%',marginTop:'-3%'}}>{report.dosage}</p>

                        </div>
                    <Col>
                    
                    </Col>
                    </Card>
                    <Card className='vitals'>
                    {/* md={{ span: 5, offset: 6 }} */}
                    <Col >
                    <h6>Vitals</h6>
                    <div className='iconvitals'>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <i className="bi bi-heart"></i>
                    {/* <FontAwesomeIcon icon="fas fa-lungs" /> */}
                    <i className="bi bi-thermometer-half"></i>
                    {/* <i className="fa-solid fa-lungs"></i> */}
                    {/* <i className="bi bi-lungs">lungs</i> */}
                    {/* <i className="bi bi-lungs-fill"></i> */}
                   <i className='fas fa-lungs'></i> 

                    </div>
                    <div className='units'>
                   
                    &nbsp;&nbsp;{report.heartBeat} &nbsp;&nbsp;&nbsp; BPM &nbsp;&nbsp; &nbsp; 
                        {report.temp} &nbsp;&nbsp; &nbsp; 'C &nbsp;&nbsp; &nbsp;
                        {report.lungsbpm} &nbsp;&nbsp; &nbsp; BPM &nbsp;&nbsp;
                    </div>
                    
                    
                   
                  
                    
                    </Col>
                    </Card>
                    
                </Row>
                <Row>
                    <Card className='symptoms'>
                    <Col >
                    <h6>Symptoms</h6>
                    {/* <p style={{color:'red',backgroundColor:'#FFE9AE'}}>{report.symptomdesc}</p> */}
                    <span>{report.symptomdesc}</span>
                   
                    </Col>

                    </Card>

                    

                </Row>
                <Row>
                    <Card className='tests'>
                    <Col>
                    <h6>Tests</h6>
                    <span>{report.testdesc}</span>
                    </Col>

                    </Card>
                    
                </Row>
                <div className='recommend'>
                <Row>
                    <Card className='clinic'>
                    <Col>
                    <h6>Recommended Clinic</h6>
                    <span>{report.recommendedClinic}</span>
                    </Col>

                    </Card>
                    <Card className='doc'>
                    <Col> 
                    <h6>Recommended Doctors</h6>
                    <span>{report.recommendedDoctor}</span>
                        </Col>
                    </Card>
                </Row>
                </div>
                <Row>
                    <Card className='comments'>
                    <Col>
                    <h6>comments</h6>
                    </Col>

                    </Card>
                    
                </Row>

            
         {/* </Container> */}
         </div>):
         null
            }
         </div>
    </div>
    </div>
      
    )
  }
}

export default appointreport

// function appointreport() {
//   return (
    
//   )
// }

// export default appointreport
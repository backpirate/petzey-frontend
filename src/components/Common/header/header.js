import React from 'react';
import './header.css';
import profile_logo from '../../images/profile_logo.png';

export const header = () => {
  return (
    <div>
        <div className="profile">
                <div className="text">
                    <h6>Profile Name</h6>
                    <a href='logout'><h5>Logout</h5></a>
                </div>
                <img src={profile_logo} alt="Profile"/>
        </div>
    </div>
    )
}

export default header;

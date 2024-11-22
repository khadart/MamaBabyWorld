import React from 'react'
import './Profile.css'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div className='profile-header'>
        <div className='profile-btns'>
        <Link to=''>SignIn</Link>
        <Link to=''>Settings</Link>
        <Link to=''>Sign Up</Link>
        </div>
   
  
    </div>
  )
}

export default Profile
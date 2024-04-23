import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div className='about-page'>
        <h1>About Us</h1>
        <h2>Work in progress  </h2>

        {/* <User name="Nikhil <function>" city="Patna" /> */}
        <UserClass name="Nikhil <class>" city="Patna" />
    </div>
  )
}


export default About
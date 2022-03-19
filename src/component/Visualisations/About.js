import { Memory } from '@mui/icons-material'
import React from 'react'

function About() {
  return (
    <div className="aboutContainer">
    <h4 className='title mb-4'>
      <span>About</span>
      <Memory style={{marginLeft:'10px'}} />
    </h4>
    <p>
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry
      <span>Click here</span>
    </p>
  </div>
  )
}

export default About
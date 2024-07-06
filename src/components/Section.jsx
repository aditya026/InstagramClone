import React from 'react'
import './section.css'
import images from '../components/images'

const Section = (props) => {
  return (
    <div className='section01'>
      <img src={props.img} alt="" />
      <a href='#'>{props.name}</a>
    </div>  
  )
}

export default Section


import React from 'react'
import './Style/gradienttext.css'
const GradientText = (props) => {
  return (
    <>
    <span className='gradient-text'>{
        props.tag
    }</span>
    </>
  )
}

export default GradientText

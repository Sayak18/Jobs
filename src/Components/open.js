import React from 'react'
import "../styles/open.css"
export default function JobsList(props){
  return(
  <div className="Jobs">
      <h1 className="role">{props.designation}</h1>
      <div className="company">{props.company}</div> 
      <div className="location">{props.location}</div>
      {
         props.min_experience > 0 && 
         <span className='exp'>{props.min_experience} years of experience required</span>
      }
      {
         props.min_experience === 0 && 
         <span className='exp'>Freshers are welcome!</span>
      }
      <div className="skill">
      {props.skills.map(skill => (
        <span className='skills'>{skill}</span>
      ))}
      </div>
  </div>
  )
}
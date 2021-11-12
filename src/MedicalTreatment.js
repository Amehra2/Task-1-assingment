import React from 'react';
import "./style.css";

export default function Medicaltreatment (props) { 
  return (
      <div> 
    {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} 
      </div> 
  )
}
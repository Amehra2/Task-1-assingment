import React from 'react';
import "./style.css";

export default function Medicaltreatment (props) {  //Here I am creating and declaring a new function which is called MedicalTreatment. Within this function, I have created props, which we can see below. These props we will use in App.js to retrieve and set values for the medical record.
  return (
      <div> 
    {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} 
      </div>
  )
}
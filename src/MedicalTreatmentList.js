import React from 'react';//Task 2
import MedicalTreatment from './MedicalTreatment.js'


function MedicalTreatmentList (props){
  return(
    <li key= {props.treatId} > {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} </li>

  );
}

const treatmentList = treatments.map(

)




export default MedicalTreatmentList;
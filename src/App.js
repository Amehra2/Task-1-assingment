import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";

const treatId1 = "EAL401";
const treatCourseId1 = "9475";
const type1 = "Critical";
const category1 = "Dementia";
const name1 = "Harry Greenway";
const startDate1 = "01-01-2020";




 
  
 export default function App(){
   return(

<div>
  <MedicalTreatment treatId={treatId1} treatCourseId={treatCourseId1} type={type1}  category={category1} name={name1} startDate={startDate1}/>
  </div>
   )
 }

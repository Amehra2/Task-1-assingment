import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment"; 

const treatId1 = "LHM401" ; 
const treatCourseId1 = "02021"; 
const type1 = "Long term"; 
const category1 = "Cancer"; 
const name1 = "Harry Greenway"; 
const startDate1 = "22-10-2021"; 



  
 export default function App(){ 
   return(
    <MedicalTreatment treatId={treatId1} treatCourseId={treatCourseId1} type={type1}  category={category1} name={name1} startDate={startDate1}/>
   )
 }

 
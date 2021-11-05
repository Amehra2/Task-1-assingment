import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";

const treatId1 = "EAL401" ;
const treatCourseId1 = "9475";
const type1 = "Critical";
const category1 = "Dementia";
const name1 = "Harry Greenway";
const startDate1 = "01-01-2020";




 
  
 export default function App(){ // Here below, I have created the identifications for the elements that are included in the instance above. This relates to the props assigned in the MedicalTreatment.js component. Based on them, here below I am declaring and assigning them a specific identification. This allows us to create constants, which have been done above.
   return(

<div> 
  <MedicalTreatment treatId={treatId1} treatCourseId={treatCourseId1} type={type1}  category={category1} name={name1} startDate={startDate1}/>
  
  <p>Treat ID: {treatId1}</p>
  <p>TreatCourseId: {treatCourseId1}</p>
  <p>Type: {type1}</p>
  <p>Category: {category1} </p>
  <p>Name: {name1}</p>
  <p> startDate: {startDate1}</p>

  
  
  
  
  </div>
   )
 }

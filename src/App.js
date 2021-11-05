import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment"; //This allow the data to be imported from the MedicalTreatment.js component. This allows us access to the props.

const treatId1 = "LHM401" ; //Here I have declared the treatid data for the patient.
const treatCourseId1 = "02021"; //Here I have declared the treatCourseId
const type1 = "Long term"; //Here I declared the situation of the patient. The patient has a long term illness.
const category1 = "Cancer"; //Here I have declared the category of illness of the patient.
const name1 = "Harry Greenway"; // Here I have declared the name of the patient.
const startDate1 = "22-10-2021"; //Here I have declared the treatment startdate of the patient.



  
 export default function App(){ // Here below, I have created the identifications for the elements that are included in the instance above. This relates to the props assigned in the MedicalTreatment.js component. Based on them, here below I am declaring and assigning them a specific identification. This allows us to create constants, which have been done above.
   return(
    <MedicalTreatment treatId={treatId1} treatCourseId={treatCourseId1} type={type1}  category={category1} name={name1} startDate={startDate1}/>
   )
 }

 
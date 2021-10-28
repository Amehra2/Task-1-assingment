import React from 'react';

function Medicaltreatment (prop) {

  function toString(prop){
      return "[" + "treatId = "+ prop.treatId+ ", treatCourseId = "+prop.treatCourseId+ ", type = "+prop.type + ", category ="+prop.category+ ", name = "+prop.name+ ", startDate = "+prop.startDate +"]";
    }

  return (
      <div>
          {toString(prop)};  
      </div>
  );
}

export default Medicaltreatment;
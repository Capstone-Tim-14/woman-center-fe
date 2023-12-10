import React from "react";
import Kalender from "../components/Molekul/Kalender/Calendar"



function KalenderPage () {
  
    return (
        <div className="flex border-l-indigo-500">
          <Kalender label={'Lab Room'}/>
        </div>
    );
}

export default KalenderPage;
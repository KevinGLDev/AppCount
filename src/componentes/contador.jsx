import React from "react";
import '../stylesheets/contador.css'

function Contador({conteo}){

    return(
        <div className="contador">
            {conteo}
        </div>
    )
}

export default Contador
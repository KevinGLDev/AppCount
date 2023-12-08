import React from 'react'
import '../stylesheets/boton.css'

function Boton({ texto,tipo,funcion }){

    return(
        <div className='boton-contador'>
            <button className={tipo ? 'boton-suma':'boton-reinicio'} onClick={funcion}>
                {texto}
            </button>

        </div>
    )

}

export default Boton
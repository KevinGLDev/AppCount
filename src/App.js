
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador'
import { useState } from 'react';
function App() {

  const [numClick,setNumClicks] = useState(0)

  const sumarClick = () => {
    setNumClicks(numClick + 1 );
  }
  const reiniciarClick = () => {
    setNumClicks(0);
  }

  return (
    
    <div className="App">
      <div className='contenedor-principal'>
        <Contador conteo = {numClick}/>
        <Boton texto='Click' tipo={true} funcion={sumarClick}/>
        <Boton texto='Reset' tipo={false} funcion={reiniciarClick}/>
        
        

      </div>
      
    </div>
  );
}

export default App;

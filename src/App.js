//import React, {useEffect, useState} from 'react';
//import './App.css';
//
//function App() {
 // const url = 'https://digimon-api.vercel.app/api/digimon' // Observaciones:                                                       
 // const [digimon, setDigimon] = useState()                 // En la ruta api/digimon                                                         
 // const fetchApi = async () => {                           // para utilizar  los datos ocupamos la ultima palabra "digimon"
  //  const response = await fetch(url)                      // ejemplos: setDigimon, digimon.map, digimon.name 
  //  const responseJSON = await response.json()
  //  setDigimon(responseJSON)


 // }
 // useEffect(() => {
 //   fetchApi()
//  }, [])
  //return (
    //<div className="App">
     // <h1>Consumo de API Digimon - Yerko Barrera 2021</h1>
      //<ul>
        //{ !digimon ? 'Cargando Datos...'  :
         // digimon.map( (digimon,index)=>{
          //  return <li key= {index}>{digimon.name} {digimon.level ?'✅':'❌'} </li> 
            //Observaciones:
            // - Informacion Incorrecta: digimon.level1 carga con este ticket '❌' Resultado no encontrado 
            // - Informacion Correcta: digimon.level carga con este ticket '✅' Resultado Encontrado
       // })
      //} 
    //  </ul>
   // </div>
  //);
//}

// * Anotaciones
// - Inspeccion de elementos
// - Network
// - Actualizar con F5 informacion de API Digimon 
// - Seleccionar nombre de api "digimon"
// - Datos: name, img, level y seleccionar para mostrar los datos correspondiente al parrafo 23 digimon.level 


//export default App;

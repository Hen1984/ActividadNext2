import React, { useState, useRef, useMemo } from 'react';
import './App.css';

function App () {

  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const nombre = useRef ('Enrique')

  const sumaValor1 = ()=>{
    setN1( n1 + 1)
  }
  const sumaValor2 = ()=>{
    setN2( n2 + 1)
  }
  

  const total = useMemo(() => {
    return n1 + n2
  }, [n1, n2])

  const cambiarNombre = ()=>{
    nombre.current = 'Luis'
    console.log('El nuevo valor de la variable sin renderizar la pagina es' . $nombre.current);
  }

  return (

  <div className= 'container'>

  <h1>UseMemo</h1>
  <p>Valor 1 : {n1}</p>
  <p>Valor 2 : {n2}</p>
  <button onClick={sumaValor1}> Suma Valores 1</button>
  <button onClick={sumaValor2}> Suma Valores 2</button>
  <p>Total {total}</p>

  <h1>UseRef</h1>
  <button onClick={cambiarNombre}>Cambiar valor de nombre</button>

  </div>




  );
}
export default App;
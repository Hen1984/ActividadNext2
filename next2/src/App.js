import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

function App () {

  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)

  const sumaValor1 = ()=>{
    setN1( n1 + 1)
  }
  const sumaValor2 = ()=>{
    setN1( n2 + 1)
  }

  let total = useMemo(() => {
    return n1 + n2
  }, [n1, n2])

  return (

  <div className= 'container'>

  <h1>UseMemo</h1>
  <p>Valor 1 : {n1}</p>
  <p>Valor 2 : {n2}</p>
  <button onClick={sumaValor1}> Suma Valores 1</button>
  <button onClick={sumaValor2}> Suma Valores 2</button>
  <p>Total {total}</p>

  </div>
  );
}
export default App;
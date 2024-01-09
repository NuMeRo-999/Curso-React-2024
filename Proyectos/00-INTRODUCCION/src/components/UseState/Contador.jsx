import { useState } from "react";

export const Contador = () => {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  function handleIncrement() {

    setCounter(counter + parseInt(document.getElementById('num').value))
    // Así es como se debería de hacer para asegurarnos traer siempre el último valor de la variable estado
    setCounter((prevCounter) => prevCounter + 1)
  }

  function handleDecrement() {
    if(counter !== 0) {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Ejemplo de contador en React</h1>
      <h2>El contador vale {counter}</h2>
      <input id="num" type="number" placeholder="Introduce el incremento" /><br /><br />
      <button onClick={handleIncrement}>Incrementar Contador</button>
      <button onClick={handleDecrement}>Restar Contador</button>
    </>
  )
}

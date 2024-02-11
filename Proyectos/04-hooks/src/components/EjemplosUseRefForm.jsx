import { useState, useRef } from "react"

const EjemplosUseRefForm = () => {

  const [nombre, setNombre] = useState('');
  const inputRef = useRef(null)

  function handleFocus() {
    if(inputRef.current){
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <label htmlFor="nombre">Nombre usuario: </label>
        <input type="text" id="nombre" value={nombre} onChange={ e => setNombre(e.target.value)} ref={inputRef}/>
        <button onClick={handleFocus}>Enviar</button>
    </div>    
  )
}

export default EjemplosUseRefForm
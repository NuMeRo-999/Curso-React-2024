import { useRef } from "react";

const EjemplosUseRefMutable = () => {

  const dataRef = useRef({value: "valor inicial"});

  function handleUpdate() {
    dataRef.current.value = "Actualizando...";
  }
  
  return (
    <>
    <div>{dataRef.current.value}</div>
    <button onClick={handleUpdate}>Actualizar</button>
    </>
  )
}

export default EjemplosUseRefMutable
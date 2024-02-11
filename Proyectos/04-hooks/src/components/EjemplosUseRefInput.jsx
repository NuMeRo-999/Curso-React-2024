import { useEffect, useRef } from "react"

const EjemplosUseRefInput = () => {

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, [])


  const inputRef = useRef(null);

  return (
    <div>
      <label>Nombre:</label>
      <input type="text" ref={inputRef}/>

    </div>
  )
}

export default EjemplosUseRefInput
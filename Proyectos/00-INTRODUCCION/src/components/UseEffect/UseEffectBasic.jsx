import { useEffect, useState } from "react"

const UseEffectBasic = () => {

  function handlerCounter() {
    setCounter(counter + 1)
  }

  const [counter, setCounter] = useState(0)
  // Los efectos van aqui
  // Variantes del useEffect - todos se usan al montar el componente
  // useEffect(() => {
  //   // primera variante
  //   // Se ejecuta cuando se pinta el componente y cuando se modifica cualquier estado. Esta variante es MUY peligrosa.
  //   console.log('peligro');
  //   }
  // )

  // useEffect(() => {
  //   // segunda variante
  //   // Solo se ejecuta una única vez y es cuando se monta el componente porque el array de dependencias está vacio
  //   console.log('Variante 2');
  
  // }, [])

  useEffect(() => {
    // tercera variante
    // En el array de dependencias coloco cualquier estado que quiero que cuando se modifique dispare este useEffect
    console.log('Variante 3');
  }, [counter])

  // useEffect(() => {
  //   // cuarta variante
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  

  return (
    <div className="flex justify-center items-center flex-col bg-slate-200 h-screen">
      <h1 className="font-bold text-xl">Contador: {counter}</h1>
      <button 
        className="mt-4 p-2 bg-slate-800 text-white rounded-md"
        onClick={handlerCounter}
      >Aumentar contador</button>
    </div>
  )
}

export default UseEffectBasic
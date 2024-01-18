import { useState } from "react";



const Titulo = (props) => {
  return (
    <h2 className="text-2xl font-bold">{props.children}</h2>
  )
}

const Card = (props) => {
  const {title, description, bgColor, count, setCount} = props;
  // Hijo
  return(
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2"><Titulo>{count}</Titulo></p>
    </div>
  )

}

function ComponenteProps() {
  const [count, setCount] = useState(0);
  // Padre
  return (
    <div className="flex justify-center items-center h-screen bg-slate-400 gap-4">
      <Card
        state={useState(0)}
        count={count}
        setCount={setCount}
        title='Tarjeta1' 
        description='Contenido de la tarjeta 1' 
        bgColor='bg-green-200' 
      />
      <Card
        title='Tarjeta1' 
        description='Contenido de la tarjeta 1' 
        bgColor='bg-red-200' 
      />
      <Card
        title='Tarjeta1' 
        description='Contenido de la tarjeta 1' 
        bgColor='bg-yellow-200' 
      />
    </div>
  )
}

export default ComponenteProps
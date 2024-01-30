
const nombres = ['Pepe', 'Paco', 'Mario', 'Maria', 'Lucia']

function Ejercicio2() {
  return (
    <ul>
      {nombres.map((nombre) => (
        <li key={nombre}>{nombre}</li>
        ))
      }
    </ul>
  )
}

export default Ejercicio2
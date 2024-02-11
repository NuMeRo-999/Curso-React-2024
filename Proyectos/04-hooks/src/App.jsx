import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EjemplosUseRefInput from './components/EjemplosUseRefInput'
import EjemplosUseRefForm from './components/EjemplosUseRefForm'
import EjemplosUseRefMutable from './components/EjemplosUseRefMutable'
import InicioApp from './components/useContext/InicioApp'

function App() {
  const [count, setCount] = useState(0)
  const btnRef = useRef(null);

  function handleClick() {
    const r =  Math.floor(Math.random() * 255)
    const r1 =  Math.floor(Math.random() * 255)
    const r2 =  Math.floor(Math.random() * 255)
    if(btnRef.current){
      btnRef.current.style.background = `rgb(${r},${r1},${r2})`;
      setCount((count) => count + 1)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick} ref={btnRef}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr />
      <h2>Uso useRef</h2>
      {/* <EjemplosUseRefInput/><br /> */}
      <EjemplosUseRefForm/>
      <EjemplosUseRefMutable/> <br />
      <hr />
      <h2>Uso useContext</h2>
      <InicioApp/>
    </>
  )
}

export default App

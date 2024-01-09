import { useState } from "react"

export const DarkLightMode = () => {

  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    
  }

  return (
    <>
      <div className="{`default ${darkMode ? dark : light}`}">
        <h1>Cambio de color Tema</h1>
        <button onClick={toggleTheme}>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam odio, laboriosam minima aspernatur molestias fuga veritatis veniam eaque itaque facilis adipisci error molestiae porro? Sit, porro ullam? Aperiam, vitae.</p>
      </div>
    </>
  )
}

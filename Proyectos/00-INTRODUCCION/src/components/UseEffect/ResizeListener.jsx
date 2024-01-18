import { useEffect, useState } from "react"

const ResizeListener = () => {

  const initialState = {
    width: innerWidth,
    height: innerHeight,
  }

  const [windowSize, setWindowSize] = useState(initialState)

  useEffect(() => {

    function handlerResize() {
      setWindowSize({width: innerWidth, height:innerHeight})
    }

    window.addEventListener('resize', handlerResize)
  
    return () => {
      window.removeEventListener('resize', handlerResize)
    }
  }, [])
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Tamaño de mi ventana:{windowSize.width}x{windowSize.height}</p>
    </div>
  )
}

export default ResizeListener
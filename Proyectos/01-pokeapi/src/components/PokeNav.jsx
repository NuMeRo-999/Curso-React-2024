import BuscadorPoke from "./BuscadorPoke"

function PokeNav() {
  return (
    <>
      <nav className="flex items-center justify-between h-60 bg-red-500 p-5 m-0 w-full">
        <img src="public/pokeapi_256.png" alt="" />

        <div className="flex items-center justify-center flex-col">
          <BuscadorPoke></BuscadorPoke>
        </div>

        <div className="flex p-5 gap-5 text-white text-2xl">
          <a>Home</a>
          <a>About</a>
        </div>
      </nav>
      <div className="bg-gray-900 h-11 flex items-center justify-center mb-10">
        <div className="bg-gray-900 rounded-full absolute size-12 top-64 flex items-center justify-center">
          <div className="bg-white size-8 rounded-full"></div>
        </div>
      </div>

    </>
  )
}

export default PokeNav
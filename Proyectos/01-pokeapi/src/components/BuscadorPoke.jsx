
function BuscadorPoke() {
  return (
    <div>
      <input className='w-96 h-10 border-4 border-solid border-slate-900 border-r-0 p-1 rounded-md outline-none text-stone-500 ' type="text" placeholder="Busca un pokemon..." list="pokemons" /*onChange={}*/></input>
      <button type="submit" className="size-10 bg-slate-900 border border-solid border-slate-900 text-center text-white rounded-md cursor-pointer text-xl"><i className="fa fa-search"></i></button>
    </div>
  )
}

export default BuscadorPoke
import React, { useState } from 'react'

function PokemonCard({pokemon, handleDelete, openModal}) {

  const [isDeleting, setIsDeleting] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  function handleClickDelete() {
    setIsDeleting(true)
    setTimeout(() => {
      handleDelete(pokemon.id)  
    }, 500);
  }

  function handleClickModal() {
    setOpenModal(true)
    setTimeout(() => {
      openModal(pokemon.id)  
    }, 500);
  }

  return (
    // <div className={`max-w-xs rounded overflow-hidden shadow-md bg-white m-4 flex flex-col justify-center transform ${isDeleting ? 'rotateY-180 scale-0' : 'rotateY-0 scale-100'} transition-transform duration-500 ease-in-out`}>
    //   <div className='flex felx-col w-full'>
    //     <img src={pokemon.image} alt={pokemon.name} className='size-24 mx-auto mt-4'/>
    //     <div className='p-4'>
    //       <h2 className='text-xl font-bold'>{pokemon.name}</h2>
    //       <p>{pokemon.stats}</p>
    //     </div>
    //     <div>
    //       <button className='w-auto mb-4 bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-700' onClick={handleClickDelete}>Eliminar</button>
    //     </div>
    //   </div>
    // </div>

    <div className={`flex size-[25rem] flex-col gap-5 rounded-xl bg-amber-100 bg-clip-border border-4 text-gray-700 shadow-md my-5 justify-center font-bold items-center p-5 ${pokemon.stats <= 33 ? 'border-red-700' : (pokemon.stats <= 66 ? 'border-blue-700' : 'border-yellow-600')} transform ${isDeleting ? 'rotateY-180 scale-0' : 'rotateY-0 scale-100'} transition-transform duration-500 ease-in-out`}>
      <p className="uppercase text-xl">{pokemon.name}</p>
      <img src={pokemon.image} alt="" className="size-52" />
      <p>STATS: {pokemon.stats.toFixed(2)}</p>
        <div className='flex flex-col'>
          <button className='w-auto mb-2 bg-green-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-green-600' onClick={handleClickModal}><i className="fa-solid fa-circle-info"></i> INFO</button>
          <button className='w-auto mb-2 bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-700' onClick={handleClickDelete}>Eliminar</button>
        </div>
    
    </div>
  )
}

export default PokemonCard
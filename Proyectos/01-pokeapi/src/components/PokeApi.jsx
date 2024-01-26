import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PokemonCard from "./PokemonCard";
import Modal from "./Modal";
const URL = import.meta.env.VITE_URL_POKEAPI;

function PokeApi() {

  const initialState = []
  const [pokemons, setPokemons] = useState(initialState)
  const [loading, setLoading] = useState(true)

  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleOpenModal = (pokemon) => setSelectedPokemon(pokemon)
  const handleCloseModal = () => setSelectedPokemon(null)

  function handleDelete(id) {
    const updatePokemons = pokemons.filter(pokemon => pokemon.id !== id);
    setPokemons(updatePokemons);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)

        if(!response.ok){ throw new Error }

        const data = await response.json();
        const results = data.results;
        const pokemonData = await Promise.all(
          results.map( async pokemon => {
            const resp = await fetch(pokemon.url);
            const pokemonDetails = await resp.json();
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image: pokemonDetails.sprites.other.dream_world.front_default || '',
              stats: pokemonDetails.stats.reduce((accum, stat) => accum + stat.base_stat, 0) / pokemonDetails.stats.length, // Media aritmetica
              // 0-33-->1, 34-66-->2, 66-100-->3
              weight: pokemonDetails.weight
            }
          })
        )
        setPokemons(pokemonData)
        setLoading(false);
      } catch (error) { throw new Error(error); }
    }

    fetchData();
  
  }, [])

  return (
    <>
      <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto relative gap-4 place-items-center">
        {loading ? <Spinner/> : pokemons.map(pokemon => (
          
          <PokemonCard key={pokemon.id} pokemon={pokemon} handleDelete={handleDelete} openModal={()=>handleOpenModal(pokemon)}></PokemonCard>
          
        ))}
      </div>
      <Modal
            isOpen={!!selectedPokemon}
            image={selectedPokemon?.image}
            onClose={handleCloseModal}
          />
    </>
  )
}

export default PokeApi
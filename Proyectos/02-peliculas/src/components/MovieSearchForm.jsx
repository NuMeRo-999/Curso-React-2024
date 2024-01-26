import { useState } from "react";
import useDataApi from "../hooks/useDataApi";

const MovieSearchForm = () => {
  const apiEndPoint = 'https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key='+import.meta.env.VITE_API_KEY;
  // const { data, error, loading } = useDataApi(apiEndPoint);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([])

  function handleSearchSubmit() {
    () => setSearchQuery('') ();
    () => setFilteredMovies([]);
  }

  function handleSearch(e) {
    e.preventDefault();
    
    const searchTerm = e.target.value.toLowerCase();

    setSearchQuery(searchTerm)

    if(searchTerm.trim() === "") {
      setFilteredMovies([]);
    } else {
      const filteredResults = data?.results.filter( movie => movie.title.toLowerCase().includes(searchTerm) );
      setFilteredMovies(filteredResults || [])
    }
   
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center my-4">
        <form className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center" onSubmit={handleSearch}>
          <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Buscar película" className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"/>
          <button type="submit" className="ml-2 bg-sky-700 text-white py-2 px-4 rounded-md focus:outline-none">Buscar</button>
          <button className={`ml-2 bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none ${searchQuery ? 'block' : 'hidden'}`} onClick={handleSearchSubmit}>Borrar</button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
          {/* Sentencias de cortocircuito */}
          {loading && <Spinner/>}
          {error && <h1>Error</h1>}
          {filteredMovies.map()}
        </div>        
      </div>
    </>
  )
}

export default MovieSearchForm
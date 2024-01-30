import { Link } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";
import Spinner from "./Spinner";

const urlImg = "https://image.tmdb.org/t/p/original"

const MovieDetails = ({movieId}) => {

  const endPointSearch = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=es-es`;
  const {data, loading, error} = useDataApi(endPointSearch);
  const generos = data?.genres.map(genre => genre.name)?.join(", ");

  return (
    <>
      <div className="bg-gray-800 p-4">
        {loading && <Spinner/>}
        {error && <p className="text-3xl font-bold uppercase">Error {error}</p>}
        {data && (
          <>
            <div className="flex flex-col w-3/6 items-center mx-auto ">
              <img src= {`${urlImg}${data.poster_path}`} alt={data.title} className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"/>
              <img src= {`${urlImg}${data.backdrop_path}`} alt={data.title} className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"/>
            </div>
            <div className=" bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out p-5">
              <div className="md:flex">
                <div className="tracking-wide text-2xl text-indigo-500 font-semibold">
                  <p className="uppercase block mt-5 text-lg leading-tight font-medium text-white">{data.title}</p>
                  <p className="block mt-5 text-lg leading-tight font-medium text-white">{data.tagline}</p>
                  <p className="block mt-5 text-lg leading-tight font-medium text-white">{data.release_date}</p>
                  <p className="block mt-5 text-lg leading-tight font-medium text-white">Generos: {generos}</p>
                  <p className="mt-20 text-gray-300">{data.overview}</p>
                </div>
              </div>
              <div className="my-5">
                  <Link to=".." className="mt-2 text-xl font-bold text-red-600 hover:text-white">Volver</Link>
                </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default MovieDetails
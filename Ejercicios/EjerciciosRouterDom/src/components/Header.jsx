import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between items-center font-bold ">
      <div className='flex items-center gap-5'>
        
        <span className='text-2xl font-bold '>Api Peliculas -Usando React Router Dom-</span>
      </div>
      <nav>
        <ul className='flex space-x-12 mx-10'>
          <li>
            <Link to='acerca_de' className='hover:text-gray-400'>Acerca de</Link>
          </li>
          <li>
            <Link to='' className='hover:text-gray-400'>Usuario</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
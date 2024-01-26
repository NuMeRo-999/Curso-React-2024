import { Link } from "react-router-dom"

function MainNavigation() {
  return (
    <header className="bg-blue-400 text-xl">
      <nav className="flex text-center justify-evenly">
        <li className="mx-10">
          <Link to='..' >Home</Link>
        </li>
        <li>
          <Link to='productos' >Productos</Link>
        </li>
      </nav>
    </header>
  )
}

export default MainNavigation
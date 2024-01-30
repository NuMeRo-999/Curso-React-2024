import { Link } from "react-router-dom"

const BackButton = () => {

  // const navigate = useNavigate()

  return (
    <>
      <div className="bg-gray-800 relative">
        {/* <button className="bg-gray-800 text-white py-2 px-4 ml-5">Volver</button> */}
        <Link to=".." className="bg-gray-800 text-white py-2 px-4 ml-5">Volver</Link>
      </div>
    </>
  )
}

export default BackButton
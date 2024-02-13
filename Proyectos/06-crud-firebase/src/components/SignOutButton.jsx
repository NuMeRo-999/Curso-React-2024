import { useAuthProduct } from "../context/authContextProduct"
import { useNavigate } from "react-router-dom";
import { cerrarSesion } from "../firebase/productosApi";

const SignOutButton = () => {

  const { signOutFirebase } = useAuthProduct();
  // const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const correctSignOut = await cerrarSesion();
      if(correctSignOut){
        signOutFirebase();
        // navigate
      }
    } catch (error) {
      console.error('Error SignOut:',error);
    }
  }

  return (
    <button onClick={handleSignOut} className="bg-red-500 hover_bg-red-700 text-white font-bold py-2 px-4 rounded-md">
      Cerrar Sesión
    </button>
  )
}

export default SignOutButton
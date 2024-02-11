import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProduct } from "../context/authContextProduct";
import { singWithGoogle } from "../firebase/productosApi";
import { useProductosContext } from "../context/ProductosContext";

const Login = ({setLogin}) => {

  // const {data, error, loading} = useDataApi('https://fakestoreapi.com/users');
  // const navigate = useNavigate();

  
  // function handleLogin(e) {
  //   e.preventDefault();

  //   const email = document.getElementById('email').value;
  //   const password = document.getElementById('password').value;

  //   if(data?.some(user => user.email === email)){
  //     if(data?.some(user => user.password === password)) {
  //       setLogin(true);
  //       navigate('/');
  //     }
  //   }
  // }

  const [error, setError] = useState(null);
  const navigate = useNavigate()
  // const { singInFirebase } = AuthContextProduct;
  const { singInFirebase } = useProductosContext();

  const handleSingIn = async () => { 
    await singWithGoogle( singInFirebase , setError, navigate )
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-gray-500">
        <div className="flex items-center justify-center mx-10">
          <div className="flex flex-col justify-center items-center h-1/2">
            <h1 className="text-5xl font-bold text-gray-800 ml-8 mt-10 text-center">Productos React Firebase</h1>
            <p className="text-lg text-gray-60 ml-8 mt-10">Proyecto de DWEC</p>
          </div>
          <div className="flex justify-center items-start mt-2">
            <video id="video-firebase" className="w-1/2" autoPlay loop>
              <source src="https://firebase.google.com/static/images/homepage/Firebase_Hero_Loop.webm?hl=es-419" type="video/webm" /> {/* useRef */}
            </video>
          </div>
        </div>

          <div className="w-full flex items-center justify-center">
            <div className="w-1/4 bg-gray-50 py-12 px-4 rounded-lg shadow-xl">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">Iniciar Sesión</h2>
              </div>
              { error && 
                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Danger alert!</span> {error}
                </div>
              </div>
                
              }
              
              <div className="rounded-md shadow-sm">
                <button className="relativve w-full flex justify-center items-center py-2 px-4 border text-sm font-medium rounded-lg text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none focus:ring-2" onClick={handleSingIn}>
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                  </svg>
                  Iniciar Sesión con Google 
                </button>
      
              </div>
            </div>
          </div>

      </div>
      <>
      {/* <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="src\assets\react.svg"
              alt="logo"
            />
            PedroShop
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Inicia sesión en tu cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nombre@empresa.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Recuérdame
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-purple-500 hover:underline dark:text-purple-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  // onClick={handleLogin}
                >
                  Iniciar sesión
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  ¿Aún no tienes una cuenta?{" "}
                  <Link
                    to='/register'
                    className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                  >
                    Regístrate
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      </>
    </>
  );
};

export default Login;

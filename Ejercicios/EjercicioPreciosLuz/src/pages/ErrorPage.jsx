import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-b to-purple-800 from-gray-900 flex justify-center content-center flex-wrap">
        <p className="font-sans text-white error-text text-9xl">404</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span className="opacity-50">Volver a </span>
        <Link className="border-b" to='/'>
          HOME
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;

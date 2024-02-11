import { Link, useParams } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";
import { useEffect } from "react";

const ProductDetail = () => {
  const parametros = useParams();
  const URL = `https://fakestoreapi.com/products/${parametros?.productId}`;
  useEffect(() => {}, []);

  const { data, error, loading } = useDataApi(URL);

  // const { image, title, price, description, id } = data;

  return (
    <>
      <div className="flex w-[95%] m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg size-80 object-content"
            src={data?.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.title}
          </h5>
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
            {data?.description}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.price}€
          </h5>
          <Link to='/cart'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Añadir al Carrito
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

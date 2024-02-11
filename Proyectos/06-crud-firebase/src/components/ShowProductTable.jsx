import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { eliminarProducto, getProductos } from "../firebase/productosApi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ShowProductTable = ({actualizarProductos}) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const fetchDataProducts = async () => {
    try {
      const productosData = await getProductos();
      setProductos(productosData);
    } catch (error) {
      console.log("Error al obtener los productos ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataProducts();
  }, [actualizarProductos]);

  const deleteProduct = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¡Vas a borrar un producto!",
        text: "¿Estás seguro de que quieres borrar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "Cancelar",
      });
  
      if (result.isConfirmed) {
        await eliminarProducto(id);
        // const productosData = await getProductos();
        // setProductos(productosData);
        actualizarProductos()
        Swal.fire("¡Producto eliminado!", "", "success");
      }
    } catch (error) {
      console.error("Error al eliminar el producto ", error);
      Swal.fire("Error", "Hubo un error al intentar eliminar el producto", "error");
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Lista de productos</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300 mb-10">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre Producto</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Descripción</th>
                <th className="py-2 px-4 border-b">Imagen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map( producto => (
                <tr key={producto.id}>
                  <td className="py-2 px-4 border-b">{producto.id}</td>
                  <td className="py-2 px-4 border-b">{producto.Nombre}</td>
                  <td className="py-2 px-4 border-b">{producto.Stock}</td>
                  <td className="py-2 px-4 border-b">{producto.Descripcion}</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={producto.url}
                      alt={producto.Nombre}
                      className="size-12"
                    />
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <Link to={`productos/${producto.id}`}><button title="Editar" className="m-4"><i className="fa-solid fa-pen-to-square"></i></button></Link>
                    <button onClick={() => deleteProduct(producto.id)} title="Eliminar"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductTable;
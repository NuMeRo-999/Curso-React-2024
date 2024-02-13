import { useState } from "react";
import { editProduct } from "../firebase/productosApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditProductForm = ({ initialData }) => {
  const navigate = useNavigate();
  const [newData, setNewData] = useState({
    Nombre: initialData.Nombre || "",
    Stock: initialData.Stock || 0,
    Descripcion: initialData.Descripcion || "",
    url: initialData.url || "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault(); // Previene el envío del formulario por defecto
    
    try {
      await editProduct(initialData.id, newData);
      Swal.fire({
        title: "¡Insercción correcta!",
        text: "Datos del producto insertados correctamente",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/')
        }
      });

    } catch (error) {
      console.log("Error al actualizar el producto:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="w-1/2 mx-auto mt-8">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleUpdate}
      >
        <h2 className="text-3xl font-semibold mb-4">Editar Producto</h2>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500"
            type="text"
            id="nombre"
            placeholder="Nombre del Producto"
            value={newData.Nombre}
            onChange={(e) => setNewData({ ...newData, Nombre: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="stock"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Stock del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500"
            type="number"
            id="stock"
            placeholder="Stock del Producto"
            value={newData.Stock}
            onChange={(e) => setNewData({ ...newData, Stock: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripción del Producto
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500"
            id="descripcion"
            placeholder="Descripción del Producto"
            value={newData.Descripcion}
            onChange={(e) => setNewData({ ...newData, Descripcion: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            URL del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500"
            type="text"
            id="url"
            placeholder="URL del Producto"
            value={newData.url}
            onChange={(e) => setNewData({ ...newData, url: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:shadow-md focus:shadow-slate-700">
            Actualizar Producto
          </button>
          <button type="button" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:shadow-md focus:shadow-slate-700" onClick={handleBack}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;

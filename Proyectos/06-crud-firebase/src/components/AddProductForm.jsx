import { useState } from "react"
import { addProducto } from "../firebase/productosApi";
import Swal from "sweetalert2";

const AddProductForm = ({actualizarProductos}) => {

  const [nombre, setNombre] = useState('');
  const [stock, setStock] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // llamar a una función que añada los datos del form
    try {
      const nuevoProducto = await addProducto(
        {
          Nombre: nombre,
          Stock: stock,
          Descripcion: descripcion,
          url,
        }
      )

      // ventana OK
      Swal.fire({
        title: "¡Insercción correcta!",
        text: "Datos del producto insertados correctamente",
        icon: "success",
        timer: 1500
      });

      setNombre('')
      setStock(0)
      setDescripcion('')
      setUrl('')
      
      actualizarProductos();
      
    } catch (error) {
      console.error("Error al añadir un producto: ", error);
    }
  }


  return (
    <div className="w-1/2 mx-auto mt-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold mb-4">Añadir nuevo Producto</h2>

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre del Producto</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500" type="text" id="nombre" placeholder="Nombre del Producto" value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>

        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock del Producto</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500" type="number" id="stock" placeholder="Stock del Producto" value={stock} onChange={e => setStock(e.target.value)} required />
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Desciption del Producto</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500" id="descripcion" placeholder="Descripción del Producto" value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
        </div>
        
        <div className="mb-4">
          <label htmlFor="url" className="block text-gray-700 text-sm font-bold mb-2">Url del Producto</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadowg-blue-500" type="text" id="url" placeholder="Url del Producto" value={url} onChange={e => setUrl(e.target.value)} required />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:shadow-md focus:shadow-slate-700">Añadir producto</button>
        </div>

      </form>
    </div>
  )
}

export default AddProductForm
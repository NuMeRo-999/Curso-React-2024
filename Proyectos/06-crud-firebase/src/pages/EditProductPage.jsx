import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import EditProductForm from "../components/EditProductForm";
import { getProductById } from "../firebase/productosApi";

const EditProductPage = () => {

  const {productId} = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect( () => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(productId);
        if(productData) {
          setProducto(productData);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    }

    if(productId) {
      fetchProduct()
    }
  
  }, []) // idproducto o navigate posibles
  
  if(producto == null) {
    return <h1>Cargando...</h1>
  }

  

  return (
    <div className="w-5/6 mx-auto mt-10">
      <EditProductForm initialData={producto}/>
    </div>
  )
}

export default EditProductPage
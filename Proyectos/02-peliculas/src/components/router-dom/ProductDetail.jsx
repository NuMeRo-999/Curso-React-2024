import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const parametros= useParams();

  return (
    
    <div>ProductDetail: {parametros.productId}</div>
  )
}

export default ProductDetail
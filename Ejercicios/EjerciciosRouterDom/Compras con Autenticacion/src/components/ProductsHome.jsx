import useDataApi from "../hooks/useDataApi";
import ProductCard from "./ProductCard";

const URL = "https://fakestoreapi.com/products";
const ProductsHome = () => {
  const { data, error, loading } = useDataApi(URL);

  return (
    <>
        {loading && <p className="text-white text-5xl text-center m-10">Cargando...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6 mx-auto mb-10">
        {error && <p>Error</p>}
        {data?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default ProductsHome;

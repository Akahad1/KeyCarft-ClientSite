import Product from "../components/Product";
import { useGetProductQuery } from "../redux/Features/baseApi";

const ProductsPage = () => {
  const { data, isLoading } = useGetProductQuery([]);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-4 lg:pt-10 pb-6">
      {data?.data.map((Sdata) => (
        <Product data={Sdata} key={Sdata._id}></Product>
      ))}
    </div>
  );
};

export default ProductsPage;

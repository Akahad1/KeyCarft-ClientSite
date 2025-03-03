import AllProductHeader from "../components/AllProduct/AllProductHeader";
import Product from "../components/Home/Product";
import { useGetProductQuery } from "../redux/Features/baseApi";
import Loading from "../components/Loading/loaders";
import { TProduct } from "../components/Home/AllProduct";
import { useAppSelector } from "../redux/hook";
import { useaddQurey } from "../redux/Features/productSlice";

const ProductsPage = () => {
  // const [query, setQuery] = useState("");
  const query = useAppSelector(useaddQurey);

  const { data, isLoading } = useGetProductQuery(query);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <AllProductHeader />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-4 lg:pt-10 pb-6">
        {data?.data?.map((product: TProduct) => (
          <Product data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

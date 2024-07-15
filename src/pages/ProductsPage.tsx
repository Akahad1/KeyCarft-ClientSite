import { useState } from "react";
import AllProductHeader from "../components/AllProduct/AllProductHeader";
import Product from "../components/Home/Product";
import { useGetProductQuery } from "../redux/Features/baseApi";

const ProductsPage = () => {
  const [qurey, setQurey] = useState("");

  // const sort = "Sort by price: low to hight";
  // setQurey(sort);
  const { data, isLoading } = useGetProductQuery(qurey);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <AllProductHeader setQurey={setQurey}></AllProductHeader>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-4 lg:pt-10 pb-6">
        {data?.data?.map((Sdata) => (
          <Product data={Sdata} key={Sdata._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

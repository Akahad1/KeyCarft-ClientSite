import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../redux/Features/baseApi";
import Product from "./Product";

export type TProduct = {
  _id: string;
  image: string;
  title: string;
  description: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
};
const AllProduct = () => {
  const { data, isLoading } = useGetProductQuery([]);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  console.log(data.data);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-4 lg:mt-10 pb-6">
        {data?.data?.slice(0, 6).map((SData: TProduct) => (
          <Product data={SData} key={SData._id}></Product>
        ))}
      </div>

      <div className="flex justify-center pb-10">
        <Link to="/productsPage">
          <button className="btn w-32 ">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default AllProduct;

import AllCart from "../components/Cart/AllCart";
import Loading from "../components/Loading/loaders";
import { useGetCartDataQuery } from "../redux/Features/baseApi";
export type TcartProduct = {
  _id: string;
  image: string;
  brand: string;
  title: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  cartid: string;
  createdAt: string;
  updatedAt: string;
};
export type TcartApiResponse = {
  data: TcartProduct[];
};
const Cart = () => {
  const { data: cartProducts, isLoading } = useGetCartDataQuery();
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(cartProducts);
  return (
    <div>
      <div>
        {cartProducts?.data.map((cartProduct) => (
          <AllCart cartProduct={cartProduct} key={cartProduct._id}></AllCart>
        ))}
      </div>
    </div>
  );
};

export default Cart;

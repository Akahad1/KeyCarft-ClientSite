import AllCart from "../components/Cart/AllCart";
import { useGetCartDataQuery } from "../redux/Features/baseApi";

const Cart = () => {
  const { data: cartProducts, isLoading } = useGetCartDataQuery([]);
  if (isLoading) {
    return <p>Loadding...</p>;
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

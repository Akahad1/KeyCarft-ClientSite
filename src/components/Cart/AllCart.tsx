import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AllCart = ({ cartProduct }) => {
  const { _id, image, brand, title, quantity, price, rating } = cartProduct;

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const totalPrice = count * parseInt(price);

  return (
    <div>
      <div className="pt-10 pb-10">
        <div className="card lg:card-side md:card-side mr-5 ml-5 ">
          <figure>
            <img className="h-72" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{title}</h2>
            <p className="text-white">{brand}</p>
            <Rating
              className="inline text-white"
              style={{ maxWidth: 140 }}
              value={rating}
              readOnly
            />
            <p className="text-white">
              <span className="text-xl text-white">৳</span>
              {price}
            </p>
            <p className="text-white">
              <span className="text-lg font-semibold text-white">
                InStrock{" "}
              </span>
              {quantity}
            </p>
            <p className="text-white">
              <span className="text-lg font-semibold text-white">
                TotalPrice{" "}
              </span>
              {totalPrice}
            </p>
            <div className="flex w-16 mt-3">
              <button
                onClick={increment}
                disabled={parseInt(quantity) <= count}
                className=" text-2xl mr-5 btn"
              >
                +
              </button>
              <p className={`text-white text-xl mt-2`}> {count}</p>
              <button
                onClick={decrement}
                disabled={count <= 1}
                className={`${"btn text-2xl ml-5"}`}
              >
                -
              </button>
            </div>
            <div className="card-actions justify-end mt-5">
              <button className="btn ">Delete Cart</button>
              <Link to={`/checkout/${_id}`}>
                <button className="btn ">Chckout Page</button>
              </Link>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCart;

import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const { title, image, brand, quantity, price, rating } = data;
  return (
    <div className="pt-10 pb-10">
      <div className="card bg-[#24283B] lg:w-96 md:w-80 w-80 shadow-xl lg:ml-11  m-auto">
        <figure>
          <img src={image} alt="Shoes" className="lg:h-72 md:h-60 h-60" />
        </figure>
        <div className="card-body lg:h-auto h-80">
          <h1 className="text-white text-xl mb-2">{title}</h1>
          <h1 className="text-white text-lg ">{brand}</h1>
          <h1 className="text-white text-lg">
            <p className="inline mr-3">In Stock</p>
            {quantity}
          </h1>
          <p className="text-white text-lg">Price: {price}</p>
          <p>
            <Rating
              className="inline "
              style={{ maxWidth: 90 }}
              value={rating}
              readOnly
            />
          </p>

          <button className="btn w-full">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

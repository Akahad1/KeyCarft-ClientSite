import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface ProductProps {
  data: {
    title: string;
    image: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    _id: string;
  };
}

const Product: React.FC<ProductProps> = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { title, image, brand, quantity, price, rating, _id } = data;

  return (
    <div>
      <div
        className="card bg-[#24283B] lg:w-96 md:w-80 w-80 shadow-xl mb-10 lg:ml-11 lg:mb-10 m-auto"
        data-aos="flip-left"
      >
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
          <Rating
            className="inline "
            style={{ maxWidth: 90 }}
            value={rating}
            readOnly
          />

          <Link to={`/product/${_id}`}>
            <button className="btn w-full">See Details</button>
          </Link>
        </div>
      </div>
      {/* <div className="hidden">
        <ProductDetails id={_id}></ProductDetails>
      </div> */}
    </div>
  );
};

export default Product;

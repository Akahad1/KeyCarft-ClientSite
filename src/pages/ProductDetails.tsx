import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {
  useAddCartDataMutation,
  useGetSpecificCartDaraQuery,
} from "../redux/Features/baseApi";
import { useState } from "react";
import { toast } from "sonner";
import Loading from "../components/Loading/loaders";

interface ProductData {
  _id: string;
  title: string;
  image: string;
  brand: string;
  quantity: number;
  description: string;
  price: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

interface LoaderData {
  data: ProductData;
  mesages: string;
  success: boolean;
}

const ProductDetails = () => {
  const [addCartData] = useAddCartDataMutation();
  const [cartID, setCartID] = useState("");
  const [macthData, setMacthData] = useState("");
  const data = useLoaderData() as LoaderData;

  const { _id, title, image, brand, quantity, description, price, rating } =
    data.data;

  const { data: data2, isLoading } = useGetSpecificCartDaraQuery(_id);

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log("cartID", cartID, data);
  console.log("cartdata", data2);

  let res;
  const addCartHandler = async () => {
    try {
      const myCart = {
        cartid: _id,
        title,
        image,
        brand,
        quantity,
        description,
        price,
        rating,
      };
      setCartID(_id);
      if (quantity < 1) {
        return toast.error("This is Product StrockOut");
      }

      res = await addCartData(myCart);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    if (data2) {
      setMacthData(data2);
      toast.success("Data add succesFully");
    } else {
      setMacthData("");
    }
  };

  console.log("macthdat", macthData);

  return (
    <div className="pt-10 pb-10">
      <div className="mt-20 mb-20 lg:mr-14 md:mr-14 h-2/4 mr-3 ml-3  lg:h-96 card lg:card-side  justify-center">
        <figure>
          <div className=" lg:h-70 md:h-96 h-70  w-96   ">
            <img src={image} alt="" />
          </div>
        </figure>
        <div className="">
          <div className="flex ml-10 lg:mt-[-3rem] md:ml-10 lg:justify-end mt-5 md:justify-center">
            <div>
              <h2 className="text-2xl font-style text-white">{title}</h2>
              <p className="mt-3 text-blue-400  mb-4 text-xl">{price}</p>
              <p className=" mb-1 text-white">{brand}</p>
              <p className=" mb-1 text-white">Quantity: {quantity}</p>
              <p className=" mb-1 text-white">Description: {description}</p>
              <p className=" mb-1 text-white"> Rating</p>
              <div>
                <Rating
                  className="inline"
                  style={{ maxWidth: 160 }}
                  value={rating}
                  readOnly
                />
              </div>
              <div className="divider bg-white h-1 rounded-md "></div>
              <p className="text-white font-style mt-3 text-xl mb-4">{}</p>

              <p className="text-white">Inclusive of all taxes</p>
              <div className="flex">
                <p className="mr-2 text-white">Share:</p>
                <Link className="mr-2 " to={``}>
                  <BiLogoFacebookCircle className="h-5 mt-1 text-white"></BiLogoFacebookCircle>
                </Link>
                <Link to="" className="ml-2 mr-2 text-white">
                  <FaInstagram className="h-5 mt-1 text-white" />
                </Link>
                <Link to="" className="mr-2 text-white">
                  <AiFillLinkedin className="h-5 mt-1 text-white" />
                </Link>
                <Link to="" className="mr-2 text-white">
                  <AiOutlineTwitter className="h-5 mt-1 text-white" />
                </Link>
              </div>
              <div className="mt-10">
                {macthData ? (
                  <Link to="/cart">
                    <button className="btn">Go To Cart</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={addCartHandler}>
                    Add to Cart
                  </button>
                )}
              </div>
              <button></button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;

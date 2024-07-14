import { Link } from "react-router-dom";
import PreventRefresh from "../components/Cart/PreventRefresh";

const AboutUs = () => {
  return (
    <div>
      <div className="hero bg-[#12151e] lg:h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">About Us</h1>
            <p className="py-6 text-white w-full">
              Welcome to the Mechanical Keyboard Shop, your ultimate destination
              for premium mechanical keyboards and accessories. Whether you're a
              professional typist, a hardcore gamer, or a tech enthusiast, our
              shop offers an extensive collection tailored to meet your unique
              needs. We pride ourselves on curating a diverse range of
              keyboards, featuring top brands and the latest innovations in
              switch technology, keycap design, and customizable features. At
              Mechanical Keyboard Shop, we understand that every keystroke
              matters. That's why we offer keyboards with various switch types,
              from tactile and clicky to silent and linear, ensuring you find
              the perfect match for your typing style. Our knowledgeable staff
              is passionate about mechanical keyboards and is always ready to
              assist you in making an informed decision.
            </p>
            <Link to="/">
              <button className="btn ">Home</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white mr-5 w-5/6 flex justify-center"> </p>
        <PreventRefresh></PreventRefresh>
      </div>
    </div>
  );
};

export default AboutUs;

import img1 from "../../public/Images/Barand/35115.jpg";
import img2 from "../../public/Images/Barand/back-school-concept-with-pencil-keyboard-mouse-blue-background-flat-lay.jpg";
import img3 from "../../public/Images/Barand/black-office-business-equipment-black-background.jpg";
import img4 from "../../public/Images/Barand/crop-hand-using-keyboard-near-stationery-coffee.jpg";
import img5 from "../../public/Images/Barand/keyboard_cartoon.jpg";
import img6 from "../../public/Images/Barand/wireless-mouse-keyboard.jpg";

const FeaturedBrands = () => {
  return (
    <div className="pb-20 lg:ml-16 mt-5 md:ml-10  ml-7">
      <h1 className="text-white text-2xl font-semibold lg:mb-10 mb-5 ">
        Top Barand Keyboard
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div>
          <div className="carousel-item relative lg:w-11/12 md:w-11/12 w-80  h-72">
            <img src={img1} className=" w-96 h-72 opacity-55 rounded-sm" />
            <div className="absolute   m-auto  top-1/2  -translate-y-1/2 transform     justify-center w-96">
              <h1 className=" text-4xl font-sans font-semibold text-white rounded lg:ml-32 ml-24 md:ml-32">
                Apple
              </h1>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className="carousel-item relative lg:w-11/12 md:w-11/12 w-80 h-72  lg:ml-6 md:mt-0 lg:mt-0 mt-10   ">
            <img src={img2} className=" w-96 h-72 opacity-55 rounded-sm" />
            <div className="absolute   m-auto  top-1/2  -translate-y-1/2 transform     justify-center w-96">
              <h1 className=" text-4xl font-sans font-semibold text-white rounded lg:ml-32 ml-24 md:ml-32">
                Logitech
              </h1>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className="carousel-item relative lg:w-11/12 md:w-11/12 w-80  h-72 lg:ml-6  lg:mt-0 mt-10">
            <img src={img3} className=" w-96 h-72 opacity-55 rounded-sm" />
            <div className="absolute   m-auto  top-1/2  -translate-y-1/2 transform     justify-center w-96">
              <h1 className=" text-4xl font-sans font-semibold text-white rounded lg:ml-32 ml-24 md:ml-32">
                Microsoft
              </h1>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className="carousel-item relative  lg:w-11/12 md:w-11/12 w-80  h-72 lg:mt-10 mt-10">
            <img src={img4} className=" w-96 h-72 opacity-55 rounded-sm" />
            <div className="absolute   m-auto  top-1/2  -translate-y-1/2 transform     justify-center w-96">
              <h1 className=" text-4xl font-sans font-semibold text-white rounded lg:ml-32 ml-24 md:ml-32">
                Corsair
              </h1>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div>
          <div className="carousel-item relative  lg:w-11/12 md:w-11/12 w-80 lg:ml-6 h-72 lg:mt-10 mt-10">
            <img src={img5} className=" w-96 h-72 opacity-55 rounded-sm" />
            <div className="absolute   m-auto  top-1/2  -translate-y-1/2 transform     justify-center w-96">
              <h1 className=" text-4xl font-sans font-semibold text-white rounded lg:ml-32 ml-24 md:ml-32">
                Logitech
              </h1>
            </div>
          </div>
        </div>
        {/* 6*/}
        <div>
          <div className="carousel-item relative  lg:w-11/12 md:w-11/12 w-80 lg:ml-6  h-72 lg:mt-10 mt-10">
            <img src={img6} className=" w-96 h-72 opacity-55 rounded-sm" />
            <div className="absolute   m-auto  top-1/2  -translate-y-1/2 transform     justify-center w-96">
              <h1 className=" text-4xl font-sans font-semibold text-white rounded lg:ml-32 ml-24 md:ml-32">
                Razer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;

import img1 from "../../public/Images/carosol/flat-lay-keyboard-headphones-desktop.jpg";
import img2 from "../../public/Images/carosol/office-desk-top-view.jpg";
import img3 from "../../public/Images/carosol/top-view-desk-concept-with-laptop-mouse.jpg";
import img4 from "../../public/Images/carosol/top-view-virtual-reality-headset-with-joystick.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center pt-10 pb-10">
      <div className="carousel  w-11/12 lg:h-[700px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="  w-full opacity-55" />
          <div className="absolute   m-auto left-5 right-5 top-1/2  -translate-y-1/2 transform     justify-center w-96">
            <p className="text-white text-center  lg:mr-0 mr-20 lg:mb-3 md:mr-0">
              Get You Neo Today
            </p>
            <h1 className="text-white text-center  lg:text-3xl md:mr-0 lg:mb-10 text-xl lg:mr-0 mr-20 mb-5">
              RGB Gaming Keyboard!
            </h1>
            <button className="btn rounded lg:ml-32 ml-24  md:ml-32">
              Shop Now
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full opacity-55" />
          <div className="absolute   m-auto left-5 right-5 top-1/2  -translate-y-1/2 transform     justify-center w-96">
            <p className="text-white text-center   lg:mr-0 mr-20 lg:mb-3 md:mr-0">
              Get You Neo Today
            </p>
            <h1 className="text-white text-center lg:text-3xl lg:mb-10 text-xl lg:mr-0 md:mr-0 mr-20 mb-5">
              Compact Mechanical Keyboard!
            </h1>
            <button className="btn rounded lg:ml-32 ml-24 md:ml-32">
              Shop Now
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full opacity-55" />
          <div className="absolute   m-auto left-5 right-5 top-1/2  -translate-y-1/2 transform     justify-center w-96">
            <p className="text-white text-center  lg:mr-0 mr-20 lg:mb-3  md:mr-0">
              Get You Neo Today
            </p>
            <h1 className="text-white text-center lg:text-3xl lg:mb-10 md:mr-0   text-xl lg:mr-0 mr-20 mb-5">
              Wireless Keyboard!
            </h1>
            <button className="btn rounded lg:ml-32 ml-24 md:ml-32">
              Shop Now
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full opacity-55" />
          <div className="absolute   m-auto left-5 right-5 top-1/2  -translate-y-1/2 transform     justify-center w-96">
            <p className="text-white text-center  lg:mb-10 mr-20   md:mr-0">
              Get You Neo Today
            </p>
            <h1 className="text-white text-center text-xl lg:text-3xl lg:mb-10">
              Hybrid Mechanical Keyboard
            </h1>
            <button className="btn rounded lg:ml-32 ml-24 md:ml-32 mt-5">
              Shop Now
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

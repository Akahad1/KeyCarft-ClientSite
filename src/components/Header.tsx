import { Link } from "react-router-dom";
import logo from "../../public/Images/Cyan Modern Professional Technology Company Logo.jpg";

const Header = () => {
  // bg-[#24283b]

  return (
    <div>
      <div className="navbar bg-[#24283b]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#24283b]  rounded-box z-[1] mt-3 w-80 p-2 shadow"
            >
              <button className="lg:mr-14 lg:mt-0 mt-1 text-lg text-white ">
                <Link to="/">Home</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg text-white ">
                <Link to="/products">Products</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg text-white ">
                <Link to="/">Home</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg text-white ">
                <Link to="/aboutUs">About Us</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg text-white ">
                <Link to="/contactUs">Contact Us</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg text-white ">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </ul>
          </div>

          <div className="avatar  lg:m-5 hidden lg:flex">
            <div className="w-24 rounded-3xl">
              <img src={logo} />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <button className="lg:mr-14 lg:text-xl text-white ">
              <Link to="/">Home</Link>
            </button>
            <button className="lg:mr-10 lg:text-xl text-white ">
              <Link to="/products">Products</Link>
            </button>
            <button className="lg:mr-10 lg:text-xl text-white ">
              <Link to="/">Home</Link>
            </button>
            <button className="lg:mr-10 lg:text-xl text-white ">
              <Link to="/aboutUs">About Us</Link>
            </button>
            <button className="lg:mr-10 lg:text-xl text-white ">
              <Link to="/contactUs">Contact Us</Link>
            </button>
            <button className="lg:mr-10 lg:text-xl text-white ">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 lg:size-8 md:size-8 text-white lg:mr-16 mr-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          <div className="avatar  lg:m-5 flex lg:hidden m-3">
            <div className="w-24 rounded-3xl">
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

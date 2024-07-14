import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { ImEnvelop } from "react-icons/im";

const ContactUs = () => {
  return (
    <div>
      <div className=" ">
        <h1 className="text-center pt-6  text-white text-3xl">Contract Us</h1>
        <div className="flex flex-col  h-1 w-full border-opacity-50">
          <div className="divider  text-white"></div>
        </div>
        <div className="hero mt-12   flex justify-center pb-10">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div
              className="card  lg:w-96 ml-5  w-full  border bg-[#24283B]     border-slate-900 rounded-2xl "
              data-aos="fade-left"
            >
              <form>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white"> Name</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder=" Tye frist-name"
                      className="input input-bordered bg-slate-700 text-white"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="email"
                      className="input input-bordered bg-slate-700 text-white"
                    />
                  </div>
                  <label className="label">
                    <span className="label-text text-white">Message</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea  bg-slate-700 text-white"
                    placeholder="Maessge"
                  ></textarea>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn text-white btn-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="text-center mb-[20px] lg:text-left "
              data-aos="fade-right"
            >
              <div className="lg:mr-5 mt-5 mr-0 ml-4 ">
                <p className="text-2xl mb-3 text-white ">
                  <BsFillTelephoneFill className="inline" />
                  <span className="ml-3 inline">+08801851189738</span>{" "}
                </p>

                <p className="lg:text-2xl text-xl mb-3  text-white inline ">
                  <ImEnvelop className="inline" />
                  <span className="ml-3 inline">
                    keycraft234@gmail.com
                  </span>{" "}
                </p>

                <p className="lg:text-2xl text-xl mt-3 mb-3 text-white">
                  <BsGeoAltFill className="inline" />
                  <span className="ml-3">Feni Bangladesh</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20 text-white text-center pb-10">
          Copyright © 2024 - All right reserved by Ashraful Karim
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;

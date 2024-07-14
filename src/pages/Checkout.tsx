import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsHouseAdd } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { toast } from "sonner";

const Checkout = () => {
  // const { data } = useLoaderData();

  // const [UpdateCartData] = useUpdateCartDataMutation();

  const OderData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userName = (form.elements.namedItem("name") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const number = (form.elements.namedItem("number") as HTMLInputElement)
      .value;
    const District = (form.elements.namedItem("District") as HTMLInputElement)
      .value;
    const City = (form.elements.namedItem("city") as HTMLInputElement).value;

    console.log(userName, email, number, District, City);
    toast.success("Your order confirmed");
  };
  return (
    <div>
      <div>
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}

        <div className=" pt-10 pb-10">
          <div className="w-96 m-auto bg-[#24283B] lg:p-10">
            <h3 className="font-bold text-lg text-white">Confrim Your Order</h3>

            <form onSubmit={OderData}>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-white">
                    {" "}
                    <RxAvatar className="inline text-2xl mr-1 rounded text-white" />
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-white">
                    {" "}
                    <AiOutlineMail className="inline text-2xl mr-1 rounded text-white" />
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-white">
                    {" "}
                    <AiFillPhone className="inline text-2xl mr-1 rounded" />
                    Phone Number
                  </span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-white">
                    {" "}
                    <BsHouseAdd className="inline text-2xl mr-1 rounded text-white" />
                    Town / City{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder=" Enter you Town / City address"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-white">
                    {" "}
                    <BsHouseAdd className="inline text-2xl mr-1 rounded text-white" />
                    District{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="District"
                  placeholder=" Enter you District address"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    <input type="checkbox" className="mr-3" name="" id="" />
                    Cash on Delivery
                  </span>
                </label>
              </div>

              <p></p>
              <div className="flex justify-end">
                <button type="submit" className="btn mt-5 btn-primary  ">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

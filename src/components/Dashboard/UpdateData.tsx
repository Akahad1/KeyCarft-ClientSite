import { toast } from "sonner";
import { useUpdateProductDataMutation } from "../../redux/Features/baseApi";

const UpdateData = ({ id }) => {
  const [UpdateProductData] = useUpdateProductDataMutation();
  const updateData = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const brand = form.brand.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const image = form.image.value;
    try {
      const updateProduct = {
        image,
        title,
        description,
        brand,
        quantity,
        price,
        rating,
      };
      console.log(updateProduct);
      const res = await UpdateProductData({ id, updateProduct });
      console.log(res);
      toast.success("Update Data SuccessFully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#24283B]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute text-white right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={updateData}>
            <div className="form-control mt-5 ">
              <label className="label">
                <span className="label-text text-white"> Title</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder=" Enter Name"
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-white"> Brand</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder=" Enter Brand"
                className="input input-bordered "
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-white"> Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder=" Enter Brand"
                className="input input-bordered "
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-white">
                  {" "}
                  Available Quantity
                </span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter Product Quantity"
                className="input input-bordered "
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-white"> Price </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder=" Enter Price"
                className="input input-bordered "
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-white">Rating </span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder=" Enter Rating"
                className="input input-bordered "
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-white"> Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder=" Enter Description"
                className="input input-bordered "
              />
            </div>
            <p></p>
            <div className="flex justify-end">
              <button type="submit" className="btn  mt-5 ">
                UpdateData
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateData;

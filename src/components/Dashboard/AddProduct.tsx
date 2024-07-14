import { toast } from "sonner";
import { useAddProductDataMutation } from "../../redux/Features/baseApi";

const AddProduct = () => {
  const [addProductData] = useAddProductDataMutation();
  const AddProductData = async (event) => {
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
        quantity: parseInt(quantity),
        price: parseInt(price),
        rating: parseInt(rating),
      };
      console.log(updateProduct);
      const res = await addProductData(updateProduct);
      console.log(res);
      if (res?.success) {
        return toast.success("Product Add SuccessFully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-[#24283B]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute text-white right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              <p className="text-xl text-white">Upload You Product</p>
            </div>
            <form onSubmit={AddProductData}>
              <div className="form-control mt-5 ">
                <label className="label">
                  <span className="label-text text-white"> Title</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  placeholder=" Enter Name"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
              <p></p>
              <div className="flex justify-end">
                <button type="submit" className="btn  mt-5 ">
                  Add Data
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AddProduct;

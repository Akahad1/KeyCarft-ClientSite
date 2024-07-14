import { useGetProductQuery } from "../../redux/Features/baseApi";
import { TProduct } from "../Home/AllProduct";
import AddProduct from "./AddProduct";
import DeleteModel from "./DeleteModel";
import UpdateData from "./UpdateData";

const MyProduct: React.FC = () => {
  const { data: AllProduct, isLoading } = useGetProductQuery([]);
  console.log(AllProduct);
  if (isLoading) {
    return <p>Loading..</p>;
  }
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <div>
        <div className="overflow-x-auto pt-5 lg:h-screen">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>

                <th className="text-white">Name</th>
                <th className="text-white">Brand</th>
                <th className="text-white">Price</th>

                <th className="text-white">Update Data</th>
                <th className="text-white">Delete Data</th>
              </tr>
            </thead>
            <tbody>
              {AllProduct?.data?.map((order: TProduct, i: number) => (
                <tr>
                  <th className="text-white">{i + 1}</th>

                  <td className="text-white">{order?.title}</td>
                  <td className="text-white">{order?.brand}</td>
                  <td className="text-white">{order?.price}</td>

                  <td>
                    <button
                      onClick={() => openModal("my_modal_3")}
                      className="btn"
                    >
                      Update
                    </button>
                    <UpdateData id={order?._id} key={order?._id}></UpdateData>
                  </td>
                  <td>
                    <button
                      onClick={() => openModal("my_modal_2")}
                      className="btn"
                    >
                      Delete
                    </button>
                    <DeleteModel id={order?._id} key={order._id}></DeleteModel>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => openModal("my_modal_1")}
              className="btn m-auto"
            >
              Add Product
            </button>
            <AddProduct></AddProduct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;

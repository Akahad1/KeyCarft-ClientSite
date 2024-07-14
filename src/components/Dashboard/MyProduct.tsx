import { useGetProductQuery } from "../../redux/Features/baseApi";
import AddProduct from "./AddProduct";
import DeleteModel from "./DeleteModel";
import UpdateData from "./UpdateData";

const MyProduct = () => {
  const { data: AllProduct, isLoading } = useGetProductQuery([]);
  console.log(AllProduct);
  if (isLoading) {
    return <p>Loading..</p>;
  }
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
              {AllProduct?.data?.map((order, i) => (
                <tr>
                  <th className="text-white">{i + 1}</th>

                  <td className="text-white">{order?.title}</td>
                  <td className="text-white">{order?.brand}</td>
                  <td className="text-white">{order?.price}</td>

                  <td>
                    <button
                      onClick={() =>
                        (
                          document.getElementById("my_modal_3") as any
                        ).showModal()
                      }
                      className="btn"
                    >
                      Update
                    </button>
                    <UpdateData id={order?._id} key={order?._id}></UpdateData>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        (
                          document.getElementById("my_modal_2") as any
                        ).showModal()
                      }
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
              onClick={() =>
                (document.getElementById("my_modal_1") as any).showModal()
              }
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

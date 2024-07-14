import { toast } from "sonner";
import { useDeleteProductDataMutation } from "../../redux/Features/baseApi";

const DeleteModel: React.FC<{ id: string }> = ({ id }) => {
  const [DeleteProductData] = useDeleteProductDataMutation();
  const deleteProduct = async () => {
    try {
      const res = await DeleteProductData(id);
      console.log(res);
      toast.success("Delete Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box bg-[#24283B]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-white text-center mb-10">
            Are You Sure! Delete You Product
          </h3>
          <div className="w-full">
            <div className="flex justify-center">
              <form method="dialog">
                <button onClick={deleteProduct} className="btn mr-14">
                  Confrim
                </button>
              </form>
              <form method="dialog">
                <button className="btn">Cancle</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModel;

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";
import { Upload, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { imageUploade } from "../../utils";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Loading from "../../pages/Loding";
import Error from "../Error";

export default function ManagerUpdateLoanModal({ loan }) {
  const axiouSecore = useAxiousSecoure();
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [image_url, setImage_url] = useState(null);
  const [privewImage_url, setPrivewImage_url] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const quarycline = useQueryClient();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const imageUploadHandalar = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPrivewImage_url(URL.createObjectURL(file));
    setImageUploading(true);
    const imageUpload = await imageUploade(file);
    setImage_url(imageUpload);

    setImageUploading(false);
  };
  const { isLoading, data: allLoan } = useQuery({
    queryKey: ["singleLoanCard", loan._id],
    queryFn: async () => {
      const res = await axiouSecore.get(`/all_loan/${loan._id}`);
      return res.data;
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async ({ id, paylod }) =>
      await axiouSecore.patch(`/updateloan/${id}`, paylod),
    onSuccess: (data) => {
      toast("update successfully");
      quarycline.invalidateQueries("single loan update");
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const loanupdatehandalar = async (data) => {
    console.log("helal");
    console.log(data);
    const { avliableEMI, catagory, interest, maxLoan, description } = data;
    const updateloan = {
      loanImage: image_url,
      loanTitle: data.title,
      description: description,
      category: catagory,
      interestRate: interest,
      maxLimit: maxLoan,
      emiPlans: avliableEMI,
    };
    await mutateAsync({ id: loan._id, paylod: updateloan });
  };

  if (isPending) return <Loading></Loading>;

  return (
    <>
      <Button
        onClick={open}
        className="btn bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
      >
        Edit
      </Button>

      <Dialog open={isOpen} onClose={close} className="relative z-10">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <form onSubmit={handleSubmit(loanupdatehandalar)}>
          <div className="fixed inset-0 flex items-center justify-center dark:text-base-100 text-gray-800 p-4">
            <DialogPanel className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl relative dark:text-black ">
              <DialogTitle className="text-3xl font-semibold text-gray-800 text-center">
                Update Loan Product
              </DialogTitle>

              <button
                onClick={close}
                className="absolute right-6 top-6 text-gray-600 hover:text-black"
              >
                <X size={24} />
              </button>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="border rounded-xl h-48 overflow-hidden flex items-center justify-center bg-gray-100">
                    {privewImage_url ? (
                      <img
                        src={privewImage_url}
                        alt="Preview"
                        className="h-full object-cover"
                      />
                    ) : (
                      <>
                        <p>image uploading</p>
                      </>
                    )}
                  </div>

                  <label className="flex items-center gap-2 mt-3 cursor-pointer text-blue-600">
                    <Upload size={20} />
                    <span>Change Image</span>
                    <input
                      onChange={imageUploadHandalar}
                      type="file"
                      className="hidden"
                    />

                    {imageUploading && (
                      <div className="flex items-center gap-2 text-blue-500 text-sm">
                        <span className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
                        Image uploading...
                      </div>
                    )}
                  </label>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-medium">Title</label>
                    <input
                      type="text"
                      name="loanTitle"
                      {...register("title")}
                      className="w-full mt-1 p-2 border rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="font-medium">Category</label>
                    <input
                      type="text"
                      {...register("catagory")}
                      className="w-full mt-1 p-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-medium">Interest Rate</label>

                  <input
                    type="text"
                    {...register("interest")}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">Max Limit</label>
                  <input
                    type="number"
                    {...register("maxLoan")}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="font-medium">EMI Plans</label>
                <input
                  type="text"
                  {...register("avliableEMI")}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <div className="mt-6">
                <label className="font-medium">Description</label>
                <textarea
                  placeholder="Secondary"
                  {...register("description")}
                  className="textarea textarea-secondary w-full mt-1 p-2 border rounded-lg bg-white/50"
                ></textarea>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <Button
                  onClick={close}
                  className="px-4 py-2 rounded-xl bg-gray-300 text-black hover:bg-gray-400"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save Changes
                </Button>
              </div>
            </DialogPanel>
          </div>
        </form>
      </Dialog>
    </>
  );
}

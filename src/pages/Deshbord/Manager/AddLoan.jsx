import { useForm } from "react-hook-form";
import { imageUploade } from "../../../utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import Loading from "../../Loding";
import Error from "../../../components/Error";
import { toast } from "react-toastify";
import React, { useState } from "react";

const AddLoan = () => {
  const { register, handleSubmit, reset } = useForm();
  const axioussecore = useAxiousSecoure();
  const quarycline = useQueryClient();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // Uploaded URL
  const [uploading, setUploading] = useState(false);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (paload) => await axioussecore.post("/microloan", paload),
    onSuccess: (res) => {
      console.log(res);
      toast("updaoad sussessfully");
      quarycline.invalidateQueries("loan add post ");
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreviewUrl(URL.createObjectURL(file)); // Preview image

    setUploading(true);

    // Upload to ImageBB or cloud
    const uploadedUrl = await imageUploade(file);
    setImageUrl(uploadedUrl);

    setUploading(false);
  };

  const loanupdatehandalar = async (data) => {
    console.log(data);

    const upload = {
      loanImage: imageUrl,
      loanTitle: data.title,
      description: data.description,
      category: data.catagory,
      interestRate: data.interest,
      maxLimit: data.maxLoan,
      emiPlans: data.avliableEMI,
      showIsHome: data.Ishome,
    };
    await mutateAsync(upload);
    console.log(upload);
  };

  if (isPending) return <Loading></Loading>;
  if (isError) return <Error />;

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10">
        <h1 className="text-center font-extrabold text-4xl mb-8 text-indigo-700 border-b-2 pb-3">
          💰Add Loan
        </h1>

        <form onSubmit={handleSubmit(loanupdatehandalar)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 dark:text-black gap-8">
            {/* --------------------- Image Upload Section --------------------- */}
            <div className="lg:col-span-1 flex flex-col items-center justify-start pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Display Image
              </label>

              {/* Preview Box */}
              <div className="w-full max-w-[250px] h-[180px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-gray-400 text-sm">No Image Selected</p>
                )}
              </div>

              {/* Image Input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input file-input-primary"
              />

              {uploading && (
                <p className="text-indigo-500 text-sm mt-2">
                  Uploading Image...
                </p>
              )}
            </div>

            {/* --------------------- Form Fields Section --------------------- */}
            <div className="lg:col-span-2 space-y-6">
              {/* Loan Title */}
              <div>
                <label
                  htmlFor="loanTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Small Business Startup Loan"
                  {...register("title")}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <label
                  htmlFor="loanTitle"
                  className="block text-sm font-medium text-gray-700 mt-3"
                >
                  Catagory
                </label>
                <input
                  type="text"
                  {...register("catagory")}
                  //   defaultValue={loan.category}
                  placeholder="Loan catagory name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Max Limit */}
                <div>
                  <label
                    htmlFor="maxLimit"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Maximum Loan Limit (BDT)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 200000"
                    {...register("maxLoan")}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <label
                    htmlFor="interestRate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interest Rate Range
                  </label>
                  <input
                    type="text"
                    {...register("interest")}
                    placeholder="e.g., 12% - 18%"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interestRate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    available EMI plan
                  </label>
                  <input
                    type="text"
                    placeholder="available EMI plan"
                    {...register("avliableEMI")}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-center  gap-3">
                  <label
                    htmlFor="interestRate"
                    className="block text-sm font-bold text-gray-700 "
                  >
                    Show on Home
                  </label>
                  <label>
                    <input
                      {...register("Ishome")}
                      type="checkbox"
                      className="checkbox  dark:bg-black"
                    />
                  </label>
                </div>
              </div>

              {/* Hidden ID Field (for reference) */}
              <div className="pt-2 dark:text-white">
                <label
                  htmlFor="interestRate"
                  className="block text-sm font-medium text-gray-700"
                >
                  description
                </label>
                <textarea
                  placeholder="Bio"
                  {...register("description")}
                  className="textarea textarea-xs"
                ></textarea>
              </div>
            </div>
          </div>

          {/* --------------------- Submit Button --------------------- */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLoan;

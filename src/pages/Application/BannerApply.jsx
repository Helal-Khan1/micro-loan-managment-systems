import { useMutation, useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router";
import Loading from "../Loding";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";
import Error from "../../components/Error";

const BannerApply = () => {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();
  const axioussecore = useAxiousSecoure();

  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: async (playload) =>
      await axioussecore.post("/application", playload),
    onSuccess: (data) => {
      console.log(data);
      alert("successfullu post");
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (playload) => {
      console.log("i will post the data", playload);
    },
    onSettled: (data, error) => {
      if (data) console.log(data);
      if (error) console.log(data);
    },
  });

  const applicationhandalar = async (data) => {
    console.log(data);
    await mutateAsync(data);
  };

  if (isPending) return <Loading></Loading>;
  if (isError) return <Error />;

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-12">
      <div className="card bg-base-100 shadow-2xl p-6 sm:p-10">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-primary">
          Application For Loan
        </h2>

        {/* Form Grid */}
        <form
          onSubmit={handleSubmit(applicationhandalar)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Personal Information Fields */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6 mb-6">
            <h3 className="text-2xl font-semibold md:col-span-2 mb-2 text-info">
              Personal Details
            </h3>

            <fieldset className="form-control">
              <label className="label font-medium">First Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="First Name"
                {...register("FastName")}
                required
              />
            </fieldset>

            <fieldset className="form-control">
              <label className="label font-medium">Last Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Last Name"
                {...register("lestName")}
                required
              />
            </fieldset>

            <fieldset className="form-control">
              <label className="label font-medium">User Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                defaultValue={user?.email}
                placeholder="user@example.com"
                {...register("UserEmail")}
                readOnly
              />
            </fieldset>

            <fieldset className="form-control">
              <label className="label font-medium">Contact Number</label>
              <input
                type="tel" // Changed to tel for semantic correctness
                className="input input-bordered w-full"
                placeholder="e.g., 017xxxxxxxx"
                {...register("ContactNumber")}
                required
              />
            </fieldset>

            <fieldset className="form-control md:col-span-2">
              <label className="label font-medium">NID/Passport Number</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="National ID or Passport Number"
                {...register("Pass/NID")}
                required
              />
            </fieldset>
          </div>

          {/* Financial & Loan Details Fields */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6 mb-6">
            <h3 className="text-2xl font-semibold md:col-span-2 mb-2 text-info">
              Financial & Loan Details
            </h3>

            <fieldset className="form-control">
              <label className="label font-medium">Interest Rate</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("IntersRate")}
                required
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label font-medium">Lon Title</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Loan Title "
                {...register("LoanTitle")}
                required
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label font-medium">Income Source</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="e.g., Salaried, Business Owner, Freelancer"
                {...register("IncomeSurce")}
                required
              />
            </fieldset>

            <fieldset className="form-control">
              <label className="label font-medium">Monthly Income (BDT)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="e.g., 50000"
                {...register("MonthlyIncome")}
                required
              />
            </fieldset>

            <fieldset className="form-control">
              <label className="label font-medium">Loan Amount (BDT)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Amount Needed"
                {...register("LoneAmount")}
                required
              />
            </fieldset>

            <fieldset className="form-control">
              <label className="label font-medium">Reason for Loan</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="e.g., Education, Home Renovation, Business Capital"
                {...register("ReasonForLon")}
                required
              />
            </fieldset>
          </div>

          {/* Address and Notes */}
          <fieldset className="form-control md:col-span-2">
            <label className="label font-medium">Full Address</label>
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Your Full Residential Address"
              {...register("FullAddress")}
              required
            ></textarea>
          </fieldset>

          <fieldset className="form-control md:col-span-2">
            <label className="label font-medium">Extra Notes </label>
            <textarea
              className="textarea textarea-bordered h-20 w-full"
              placeholder="Additional Information or comments"
              {...register("ExtraNotes")}
            ></textarea>
          </fieldset>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="btn btn-primary btn-lg w-full sm:w-1/2 transition duration-300 transform hover:scale-[1.02]"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerApply;

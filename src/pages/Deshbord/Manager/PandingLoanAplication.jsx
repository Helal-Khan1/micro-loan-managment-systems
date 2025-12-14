import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import { toast } from "react-toastify";
import PandingApplicationMudal from "../../../components/Modul/PandingApplication";

const PandingLoanAplication = () => {
  const axiouSecore = useAxiousSecoure();
  const quarycline = useQueryClient();
  const { refetch, data: pandingLoan } = useQuery({
    queryKey: ["update Aplication"],
    queryFn: async () => {
      const res = await axiouSecore.get("/pending_application?status=pending");
      return res.data;
    },
  });

  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: async ({ id, updateData }) =>
      await axiouSecore.patch(`/aplication/${id}`, updateData),

    onSuccess: (res) => {
      quarycline.invalidateQueries({ queryKey: "update Stutas" });
      toast(`Loan Aplication${res.data} `);
    },
  });

  const loanAprovedHandalar = async (id) => {
    const updateData = { status: "approved" };
    await mutateAsync({ id, updateData });
    refetch();
  };

  const loanrejacthandalar = async (id) => {
    const updateData = { status: "rejected" };
    await mutateAsync({ id, updateData });
    refetch();
  };

  console.log(pandingLoan);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Lan ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pandingLoan?.map((loan) => (
              <tr key={loan._id}>
                <td>{loan._id}</td>
                <td>{loan.FastName}</td>
                <td>{loan.UserEmail}</td>
                <td>{loan.LoneAmount}</td>
                <td>{new Date(loan.FromSubmitDate).toLocaleDateString()}</td>
                <td className=" space-x-3.5 space-y-2.5 items-center">
                  <button
                    onClick={() => loanAprovedHandalar(loan._id)}
                    className="btn  px-2 py-1 rounded text-white bg-green-500"
                  >
                    Approved
                  </button>
                  <button
                    onClick={() => loanrejacthandalar(loan._id)}
                    className="btn px-2 py-1 rounded text-white bg-red-500"
                  >
                    Rejected
                  </button>
                  <PandingApplicationMudal
                    loan={loan}
                  ></PandingApplicationMudal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PandingLoanAplication;

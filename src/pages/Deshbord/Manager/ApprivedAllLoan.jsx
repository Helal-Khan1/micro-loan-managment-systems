import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";

import PandingApplicationMudal from "../../../components/Modul/PandingApplication";

const ApprivedAllLoan = () => {
  const axiouSecore = useAxiousSecoure();

  const { data: pandingLoan } = useQuery({
    queryKey: ["update Aplication"],
    queryFn: async () => {
      const res = await axiouSecore.get("/pending_application?status=approved");
      return res.data;
    },
  });

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
                <td>
                  {new Date(loan.approvedDate).toLocaleDateString()}
                  <br />
                  {new Date(loan.approvedDate).toLocaleTimeString()}
                </td>
                <td className=" space-x-3.5 space-y-2.5 items-center">
                  <button className="btn  px-2 py-1 rounded text-white bg-green-500">
                    Approved
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

export default ApprivedAllLoan;

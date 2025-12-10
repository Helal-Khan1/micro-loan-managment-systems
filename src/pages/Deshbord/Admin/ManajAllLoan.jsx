import React, { use } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import Loading from "../../Loding";

const ManajAllLoan = () => {
  const axiouSecore = useAxiousSecoure();
  const { isPending, data: allLoan } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiouSecore.get("/all_loan");
      return res.data;
    },
  });
  if (isPending) return <Loading />;
  const { category, interestRate, loanImage, loanTitle } = allLoan;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Interest</th>
              <th> Category</th>
              <th>Created By</th>
              <th>Show on Home </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {allLoan.map((loan) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={loan.loanImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{loan.loanTitle}</td>
                <td>{loan.interestRate}</td>
                <td>{loan.category}</td>
                <td>Helal Khan</td>
                <td>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </td>
                <td className=" space-x-5">
                  <button className="btn">update</button>
                  <button className="btn ">detale</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManajAllLoan;

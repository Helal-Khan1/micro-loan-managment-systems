import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import AllaplicationMudal from "../../../components/Modul/AllaplicationMadul";

const LoanApplications = () => {
  const axiousSecoure = useAxiousSecoure();

  const [filterStatus, setFilterStatus] = useState(""); // <-- filter state

  const { data: aplication = [] } = useQuery({
    queryKey: ["aplication"],
    queryFn: async () => {
      const res = await axiousSecoure.get("/application");
      return res.data;
    },
  });

  // Filtering Logic
  const filteredData = filterStatus
    ? aplication.filter((item) => item.status === filterStatus)
    : aplication;

  return (
    <div>
      <h1 className="font-bold">Filtering Functionality Based On Status</h1>

      {/* Dropdown */}
      <select
        onChange={(e) => setFilterStatus(e.target.value)}
        className="select border shadow"
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Loan ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Loan Category</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((aplication) => (
              <tr key={aplication._id}>
                <td></td>
                <td>{aplication._id}</td>
                <td>
                  {aplication.FastName} {aplication.lestName}
                </td>
                <td>{aplication.UserEmail}</td>
                <td>{aplication.loanCategroy}</td>
                <td>{aplication.LoneAmount}</td>
                <td>{aplication.status}</td>
                <td>
                  <AllaplicationMudal aplication={aplication} />
                </td>
              </tr>
            ))}

            {/* No Data Message */}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-red-400">
                  No Application Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanApplications;

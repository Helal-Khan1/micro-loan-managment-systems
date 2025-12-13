import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import ManagerUpdateLonMudal from "../../../components/Modul/ManagerUpdateLonMudal";
import Swal from "sweetalert2";

const ManagLoan = () => {
  const axioussecore = useAxiousSecoure();
  const quarycline = useQueryClient();
  const [searchText, setSearchText] = useState("");
  const { data: allLoan = [] } = useQuery({
    queryKey: ["namag_all_Loan", searchText],
    queryFn: async () => {
      const res = await axioussecore.get(`/all_loan?search=${searchText}`);
      return res.data;
    },
  });

  const { mutate: deleteLoan, isPending: isDeleting } = useMutation({
    mutationFn: async (id) => {
      const res = await axioussecore.delete(`/delete_loan/${id}`);
      return res.data;
    },

    onSuccess: (res) => {
      quarycline.invalidateQueries(["todos"]);
      console.log(res.data);
    },
  });

  const delateloanhandalar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your loan has been deleted.",
          icon: "success",
        });
        deleteLoan(id);
      }
    });
  };

  return (
    <div>
      <label className="input ml-6">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search "
          className="grow "
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by catagory Or title "
        />
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Interest</th>
              <th>Category</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {allLoan.map((loan) => (
              <tr key={loan._id}>
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
                <td className="flex space-x-4">
                  <ManagerUpdateLonMudal loan={loan}></ManagerUpdateLonMudal>
                  <button
                    onClick={() => delateloanhandalar(loan._id)}
                    className="btn"
                  >
                    detale
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagLoan;

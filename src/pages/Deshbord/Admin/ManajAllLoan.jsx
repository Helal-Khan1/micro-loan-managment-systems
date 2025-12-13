import React, { use, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import Loading from "../../Loding";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManajAllLoan = () => {
  const axiouSecore = useAxiousSecoure();
  const queryClient = useQueryClient();

  const { isPending, data: allLoan } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiouSecore.get("/all_loan");
      return res.data;
    },
  });
  const { mutate: deleteLoan, isPending: isDeleting } = useMutation({
    mutationFn: async (id) => {
      const res = await axiouSecore.delete(`/delete_loan/${id}`);
      return res.data;
    },

    onSuccess: (res) => {
      // delete সফল হলে ক্যাশ রিফ্রেশ হবে
      queryClient.invalidateQueries(["todos"]);
      console.log(res.data);
    },
  });

  // const { mutateAsync, isPending: panding } = useMutation({
  //   mutationFn: async ({ id, payload }) =>
  //     await axiouSecore.patch(`/updateloan/${id}`, payload),

  //   onSuccess: (res) => {
  //     queryClient.invalidateQueries(["todos"]);
  //     console.log(res);
  //   },
  // });

  // const ishomeHandalar = async (id, value) => {
  //   const payload = { isHome: value };

  //   await mutateAsync({ id, payload });
  // };
  const delatehandalar = (id) => {
    console.log(id);
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
        deleteLoan(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (isPending) return <Loading />;

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
                <td>Helal Khan</td>
                <td>
                  <th>
                    <input
                      type="checkbox"
                      checked={loan.isHome}
                      // onChange={(e) =>
                      //   ishomeHandalar(loan._id, e.target.checked)
                      // }
                      className="checkbox"
                    />
                  </th>
                </td>
                <td className=" space-x-5">
                  <Link to={`/deshbord/updateLoan/${loan._id}`}>
                    <button className="btn">update</button>
                  </Link>
                  <button
                    onClick={() => delatehandalar(loan._id)}
                    className="btn "
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

export default ManajAllLoan;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import Loading from "../../Loding";
import Swal from "sweetalert2";
import { Description } from "@headlessui/react";
import { useSearchParams } from "react-router";
import axios from "axios";
import PremintInfoMudali from "../../../components/Modul/PremintInfoMudali";

const MyLoan = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiousSecoure();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    refetch,
    data: myloan = [],
    isLoading,
  } = useQuery({
    queryKey: ["myLoan", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myloan/${user.email}`);
      return res.data;
    },
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async ({ id }) =>
      await axiosSecure.delete(`/application/${id}`),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const sessionId = searchParams.get("session_id");

  const { mutateAsync: mutatepostdata } = useMutation({
    mutationFn: async (sessionId) =>
      await axiosSecure.post("/deshbord_myloan", { sessionId }), // ✅
    onSuccess: (data) => {
      console.log("Status update successful:", data);

      refetch(); //
      setSearchParams({}); // ✅
    },
  });

  useEffect(() => {
    if (sessionId) {
      mutatepostdata(sessionId);
    } //
  }, [sessionId, mutatepostdata, refetch, setSearchParams]);

  // ...
  const handalPrement = async (loan) => {
    console.log(loan);
    const prementFree = 10;
    const prementInfo = {
      loanId: loan._id,
      loanTitle: loan.LoanTitle,
      payFree: prementFree,

      costomer: {
        name: user?.displayName,
        email: user.email,
      },
    };
    console.log(prementInfo);
    const res = await axiosSecure
      .post(`/create-checkout-session`, prementInfo)
      .then((res) => {
        console.log(res.data.url);
        window.location.href = res.data.url;
      });
    console.log(res.data.url);
  };

  const delatehandalar = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      refetch();
      if (result.isConfirmed) {
        mutateAsync({ id });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
    console.log(id);
  };

  if (isPending) return <Loading></Loading>;
  if (isLoading) return <Loading></Loading>;

  console.log(myloan);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Name</th>
              <th>Loan Title </th>
              <th>Amoun </th>
              <th>status</th>

              <th>Aplication Free</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myloan.map((loan) => (
              <tr key={loan._id}>
                <td>{loan._id}</td>
                <td>{loan.FastName}</td>
                <td>{loan.LoanTitle}</td>
                <td>{loan.LoneAmount}</td>
                <td>{loan.status}</td>

                <td>
                  {loan.ApplicationFeeStatus === "paid" ? (
                    <PremintInfoMudali loan={loan}></PremintInfoMudali>
                  ) : (
                    <button
                      onClick={() => handalPrement(loan)}
                      className="btn bg-green-400"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td className=" space-x-3.5">
                  <button className="btn">View</button>
                  {loan.status === "pending" && (
                    <>
                      <button
                        onClick={() => delatehandalar(loan._id)}
                        className="btn bg-red-500 text-white"
                      >
                        cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoan;

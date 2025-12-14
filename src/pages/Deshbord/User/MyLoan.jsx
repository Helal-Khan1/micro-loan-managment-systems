import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";

const MyLoan = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiousSecoure();

  const { data: myloan = [], isLoading } = useQuery({
    queryKey: ["myLoan", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myloan/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  console.log(myloan);
  return <div>My Loan Data {myloan.length}</div>;
};

export default MyLoan;

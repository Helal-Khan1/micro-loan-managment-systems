import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiousSecoure from "./useAxiousSecoure";

const useRole = () => {
  const { user } = useAuth();
  const axiouSecore = useAxiousSecoure();
  const { isLoading, data: role = "borrower" } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiouSecore.get(`/users/${user?.email}/role`);
      return res.data.role;
    },
  });
  return { role, isLoading };
};

export default useRole;

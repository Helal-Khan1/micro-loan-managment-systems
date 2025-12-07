import React, { useContext } from "react";
import { AuthContex } from "../providers/AuthContex";

const useAuth = () => {
  const auth = useContext(AuthContex);
  return auth;
};

export default useAuth;

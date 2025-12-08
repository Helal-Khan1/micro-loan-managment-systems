import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_HOST_URL}`,
});

const useAxiousSecoure = () => {
  const { user, loading, logOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user?.accessToken) {
      const requestInterceptor = instance.interceptors.request.use(
        (configs) => {
          configs.headers.Authorization = `Bearer ${user?.accessToken}`;
          return configs;
        }
      );

      // Add response interceptor
      const responseInterceptor = instance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err.response.status === 403 || err.response.status === 401) {
            logOutUser()
              .then(() => {
                console.log("log Out successfully");
              })
              .catch(console.error);
            navigate("/login");
          }
          return Promise.reject(err);
        }
      );

      return () => {
        instance.interceptors.request.eject(requestInterceptor);
        instance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, logOutUser, navigate]);

  return instance;
};

export default useAxiousSecoure;

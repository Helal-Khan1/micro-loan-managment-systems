import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiousSecoure from "../../../hooks/useAxiousSecoure";
import Loading from "../../Loding";
import { FaEdit } from "react-icons/fa";
import MyModal from "../../../components/Modul/UserManagModul";
import UserSespanModu from "../../../components/Modul/UserSespanModul";

const ManageUsers = () => {
  const axiouSecore = useAxiousSecoure();

  const { isLoading, data: users } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiouSecore.get("/users");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/10 bg-base-200">
        <table className="table border">
          {/* head */}

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td
                  className={`${
                    user.role == "suspend"
                      ? "text-red-400 round-sm"
                      : "text-primary"
                  }`}
                >
                  {user.role}
                </td>
                <td className=" space-x-2">
                  <MyModal user={user}></MyModal>
                  <UserSespanModu></UserSespanModu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

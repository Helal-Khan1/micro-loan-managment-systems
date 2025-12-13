import React from "react";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";
import UserSespanModu from "./UserSespanModul";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Loading from "../../pages/Loding";
import Error from "../Error";

export default function MyModal({ user }) {
  let [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(user.role);
  const axiousSecore = useAxiousSecoure();
  const QueryClient = useQueryClient();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const { reset, isPending, isError, mutateAsync } = useMutation({
    mutationFn: async ({ id, payload }) =>
      await axiousSecore.patch(`/update_user/${id}`, payload),

    onSuccess: () => {
      QueryClient.invalidateQueries(["allUsers"]); // ⭐ গুরুত্বপূর্ণ
      setIsOpen(false);
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
    onMutate: (payload) => {
      console.log("i will post ", payload);
    },
  });

  const updateinfo = async () => {
    console.log("rhe roe ", role);
    const updatainfo = {
      role: role,
      status: "aproved",
    };

    await mutateAsync({ id: user._id, payload: updatainfo });
  };

  if (isPending) return <Loading />;
  if (isError)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <>
      <button onClick={open} className="btn ">
        <FaEdit />
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0  dark:text-black z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center dark:text-black justify-center p-4">
            <DialogPanel
              transition
              className="w-[600px]  rounded-xl bg-gray-200 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="dark:text-black">
                      <th>Name</th>
                      <th>Update Role</th>
                      <th>update</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.name}</td>
                      <td>
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="select select-xs dark:text-white"
                        >
                          <option value="Manager">Manager</option>
                          <option value="borrowe">borrowe</option>
                        </select>
                      </td>
                      <td>
                        {user.status === "aproved" ? (
                          <button onClick={() => updateinfo()} className="btn">
                            approved
                          </button>
                        ) : (
                          <button onClick={() => updateinfo()} className="btn">
                            approve
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4  space-x-20">
                <Button className={"btn"} onClick={close}>
                  Cancal
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

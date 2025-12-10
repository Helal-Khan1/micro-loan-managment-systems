import React from "react";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";
import UserSespanModu from "./UserSespanModul";

export default function MyModal({ user }) {
  let [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(user.role);
  const axiousSecore = useAxiousSecoure();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const updateinfo = (id) => {
    console.log(id);
    console.log("rhe roe ", role);
    const updatainfo = {
      role: role,
      status: "aproved",
    };

    axiousSecore.patch(`/update_user/${id}`, updatainfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        setIsOpen(false);
      }
    });
  };

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
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-[600px]  rounded-xl bg-gray-200 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
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
                          className="select select-xs"
                        >
                          <option value="Manager">Manager</option>
                          <option value="Browser">Browser</option>
                        </select>
                      </td>
                      <td>
                        {user.status === "aproved" ? (
                          <button
                            onClick={() => updateinfo(user._id)}
                            className="btn"
                          >
                            approved
                          </button>
                        ) : (
                          <button
                            onClick={() => updateinfo(user._id)}
                            className="btn"
                          >
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

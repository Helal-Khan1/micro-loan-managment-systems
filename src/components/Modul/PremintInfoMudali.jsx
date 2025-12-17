import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function PremintInfoMudali({ loan }) {
  let [isOpen, setIsOpen] = useState(false);
  console.log(loan);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={open} className="btn">
        paid
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={close}
      >
        <div className="   inset-0 backdrop-blur-sm fixed z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className=" rounded-xl  bg-white h-[300px] p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className=" font-medium text-black text-center text-3xl"
              >
                Payment History
              </DialogTitle>
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-10">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Loan Id</th>
                      <th>Name</th>
                      <th>emial</th>
                      <th>Transaction ID</th>
                      <th>Loan Amout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{loan._id}</td>
                      <td>{loan.FastName}</td>
                      <td>{loan.UserEmail}</td>
                      <td>{loan?.transactionId}</td>
                      <td>{loan.LoneAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  cancel
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}



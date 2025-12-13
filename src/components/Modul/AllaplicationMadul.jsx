import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function AllaplicationMudal({ aplication }) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={open} className="btn">
        View
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto dark:text-black bg-black/40">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl duration-300"
            >
              <DialogTitle
                as="h3"
                className="text-xl font-bold mb-3 border-b pb-2"
              >
                Application Details
              </DialogTitle>

              {/* Application Details */}
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Loan ID:</strong> {aplication._id}
                </p>
                <p>
                  <strong>Name:</strong> {aplication.FastName}{" "}
                  {aplication.lestName}
                </p>
                <p>
                  <strong>Email:</strong> {aplication.UserEmail}
                </p>
                <p>
                  <strong>Contact:</strong> {aplication.ContactNumber}
                </p>
                <p>
                  <strong>Loan Title:</strong> {aplication.LoanTitle}
                </p>
                <p>
                  <strong>Loan Category:</strong> {aplication.loanCategroy}
                </p>
                <p>
                  <strong>Loan Amount:</strong> {aplication.LoneAmount}
                </p>
                <p>
                  <strong>Interest Rate:</strong> {aplication.IntersRate}%
                </p>
                <p>
                  <strong>Income Source:</strong> {aplication.IncomeSurce}
                </p>
                <p>
                  <strong>Monthly Income:</strong> {aplication.MonthlyIncome}
                </p>

                <p>
                  <strong>Reason For Loan:</strong> {aplication.ReasonForLon}
                </p>
                <p>
                  <strong>Full Address:</strong> {aplication.FullAddress}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      aplication.status === "Approved"
                        ? "bg-green-600"
                        : aplication.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {aplication.status}
                  </span>
                </p>
              </div>

              {/* Close Button */}
              <div className="mt-5 flex justify-end">
                <Button
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

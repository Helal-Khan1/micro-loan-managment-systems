import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function PandingApplicationMudal({ loan }) {
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
        <button className="btn text-white bg-blue-500">View Details</button>
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
                  <strong>Loan ID:</strong> {loan._id}
                </p>
                <p>
                  <strong>Name:</strong> {loan.FastName} {loan.lestName}
                </p>
                <p>
                  <strong>Email:</strong> {loan.UserEmail}
                </p>
                <p>
                  <strong>Contact:</strong> {loan.ContactNumber}
                </p>
                <p>
                  <strong>Loan Title:</strong> {loan.LoanTitle}
                </p>
                <p>
                  <strong>Loan Category:</strong> {loan.loanCategroy}
                </p>
                <p>
                  <strong>Loan Amount:</strong> {loan.LoneAmount}
                </p>
                <p>
                  <strong>Interest Rate:</strong> {loan.IntersRate}%
                </p>
                <p>
                  <strong>Income Source:</strong> {loan.IncomeSurce}
                </p>
                <p>
                  <strong>Monthly Income:</strong> {loan.MonthlyIncome}
                </p>

                <p>
                  <strong>Reason For Loan:</strong> {loan.ReasonForLon}
                </p>
                <p>
                  <strong>Full Address:</strong> {loan.FullAddress}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      loan.status === "Approved"
                        ? "bg-green-600"
                        : loan.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {loan.status}
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

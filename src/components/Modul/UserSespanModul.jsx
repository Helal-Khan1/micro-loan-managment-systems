import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";

export default function UserSespanModu() {
  let [issuspend, setIssuspend] = useState(false);
  const axiousSecore = useAxiousSecoure();

  function open() {
    setIssuspend(true);
  }

  function close() {
    setIssuspend(false);
  }

  const rejectUser = (id) => {
    console.log(id);

    const updatainfo = {
      role: "suspend",
      status: "suspend",
    };

    axiousSecore.patch(`/update_user/${id}`, updatainfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        setIssuspend(false);
      }
    });
  };

  return (
    <>
      <Button onClick={open} className="btn">
        suspend
      </Button>

      <Dialog
        open={issuspend}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gray-200 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-center "
              >
                why suspend feedback
              </DialogTitle>
              <p className="mt-2 text-sm/6 ">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Button className="btn" onClick={close}>
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

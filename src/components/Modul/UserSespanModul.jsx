import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "../../pages/Loding";
import Error from "../Error";

export default function UserSespanModu({ user }) {
  const [issuspend, setIssuspend] = useState(false);
  const axiousSecore = useAxiousSecoure();
  const queryClient = useQueryClient();

  function open() {
    setIssuspend(true);
  }

  function close() {
    setIssuspend(false);
  }

  const { isError, isPending, mutateAsync } = useMutation({
    mutationFn: async ({ id, payload }) =>
      await axiousSecore.patch(`/update_user/${id}`, payload),

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      setIssuspend(false);
    },
  });

  const handleSuspend = async (event) => {
    event.preventDefault();

    const form = event.target;
    const reason = form.reason.value;
    const feedback = form.feedback.value;
    console.log(reason);

    const payload = {
      role: "suspend",
      status: "suspend",
      whaysuspend: reason,
      feedback,
    };

    await mutateAsync({ id: user._id, payload });
  };

  // if (isPending) return <Loading />;
  if (isError)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <>
      <Button onClick={open} className="btn">
        suspend
      </Button>

      <Dialog open={issuspend} onClose={close} as="div">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto dark:text-black">
          <div className="flex min-h-full items-center justify-center dark:text-base-100 text-gray-800 p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-gray-200 p-6">
              <DialogTitle className="text-center font-bold text-lg">
                Why suspend feedback?
              </DialogTitle>

              {/* SUBMIT FORM */}
              <form onSubmit={handleSuspend}>
                <div className="flex gap-4 mt-4">
                  <div>
                    <h1 className="font-bold">Why suspend</h1>
                    <textarea
                      name="reason"
                      className="bg-white border rounded px-2 mt-2"
                      placeholder="Why suspend"
                      required
                    />
                  </div>

                  <div>
                    <h1 className="font-bold">Feedback</h1>
                    <textarea
                      name="feedback"
                      className="bg-white border rounded px-2 mt-2"
                      placeholder="feedback"
                    />
                  </div>
                </div>

                <div className="mt-6 space-x-6">
                  <Button type="submit" className="btn bg-red-400">
                    Suspend
                  </Button>

                  <Button className="btn bg-blue-400" onClick={close}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

import React from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const UsersProfile = () => {
  // Dummy data, replace with real API data
  const { user, logOutUser } = useAuth();
  const { role } = useRole();

  const logOutHandalar = () => {
    logOutUser();
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6 md:p-10">
          {/* Avatar */}
          <img
            src={user?.photoURL}
            alt={user.displayName}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary object-cover"
          />

          {/* Info */}
          <div className="mt-6 md:mt-0 md:ml-10 flex-1">
            <h2 className="text-3xl font-bold text-gray-800">
              {user.displayName}
            </h2>
            <p className="text-gray-500 mt-1">
              <span className="font-bold text-2xl"> Role: </span> {role}
              {user.department}
            </p>
            <p className="text-gray-500 mt-1">{user.location}</p>

            <p className="mt-4 text-gray-700">{user.bio}</p>

            {/* Contact */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-sm text-gray-500">Email</h3>
                <p className="font-medium text-gray-800">{user.email}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-sm text-gray-500">Phone</h3>
                <p className="font-medium text-gray-800">{user.phone}</p>
              </div>
              <div>
                <button
                  onClick={logOutHandalar}
                  className="btn bg-red-500 text-white"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Nine-grid stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 bg-gray-50 p-6">
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Total Application</p>
            <p className="font-bold text-2xl text-primary">24</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Approved</p>
            <p className="font-bold text-2xl text-primary">12</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Reject</p>
            <p className="font-bold text-2xl text-primary">6</p>
          </div>
          {/* <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Tasks</p>
            <p className="font-bold text-2xl text-primary">128</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Reports</p>
            <p className="font-bold text-2xl text-primary">8</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Meetings</p>
            <p className="font-bold text-2xl text-primary">20</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Awards</p>
            <p className="font-bold text-2xl text-primary">5</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Trainings</p>
            <p className="font-bold text-2xl text-primary">10</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">Certificates</p>
            <p className="font-bold text-2xl text-primary">7</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UsersProfile;

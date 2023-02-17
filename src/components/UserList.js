import React, { useContext } from "react";
import UserListitem from "./UserListitem";
import userContext from "../context/userContext";

const UserList = () => {
  const context = useContext(userContext);
  const { users } = context;

  return (
    <div>
      <div className="overflow-y-scroll sm:-mx-6 lg:-mx-8" style={{ height: "50vh" }}>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-xs sm:text-sm font-medium text-gray-900 px-4 sm:px-6 py-3 text-left"
                  >
                    Users
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      className="text-gray-400 text-center py-4"
                      colSpan="1"
                    >
                      No data available
                    </td>
                  </tr>
                ) : (
                  users.map((item) => (
                    <UserListitem user={item} key={item._id} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

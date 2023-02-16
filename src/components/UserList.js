import React, { useContext } from "react";
import UserListitem from "./UserListitem";
import userContext from "../context/userContext";

const UserList = () => {
  const context = useContext(userContext);
  const { users } = context;

  return (
    <div>
      <div
        className="overflow-y-scroll sm:-mx-6 lg:-mx-8"
        style={{ height: "400px" }}
      >
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <UserListitem user={item} key={item._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import userContext from "../context/userContext";

const UserListitem = (props) => {
  const { user } = props;

  const context = useContext(userContext);
  const { deleteUser, getUsers, users } = context;

  useEffect(() => {
    getUsers();
  }, [users, getUsers]);

  return (
    <tr className="bg-white border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.name}
      </td>
      <td>
        <Link
          href="#"
          className="text-red-600 hover:text-red-700 transition duration-300 ease-in-out mb-4"
          onClick={() => {
            deleteUser(user._id);
          }}
        >
          delete
        </Link>
      </td>
    </tr>
  );
};

export default UserListitem;

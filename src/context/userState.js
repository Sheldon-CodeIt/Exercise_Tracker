import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  const host = "http://localhost:3000";

  const usersInitial = [
    {
      _id: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      __v: "",
    },
  ];

  const [users, setUsers] = useState(usersInitial);

  const getUsers = async () => {
    const response = await fetch(`${host}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();
      setUsers(json);
    } else {
      console.error("Failed to fetch exercises data");
    }
  };

  const addUser = async (name) => {
    const response = await fetch(`${host}/users/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const json = await response.json();
    console.log(json);

    const user = {
      _id: "63e735cbf5d41f6cbc005866",
      name: name,
      createdAt: "2023-02-11T06:29:31.561Z",
      updatedAt: "2023-02-11T06:29:31.561Z",
      __v: 0,
    };
    setUsers(users.concat(user));
  };


  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${host}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      const deletedUser = await response.json();
      console.log(deletedUser);

      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        getUsers,
        addUser,
        deleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

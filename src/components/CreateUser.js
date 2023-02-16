import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList";

const CreateUser = () => {
  const navigate = useNavigate();

  const context = useContext(userContext);
  const { addUser } = context;

  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
    };

    console.log("User object: ", user);
    await addUser(name);
    console.log("User added!");
    setName("");

    navigate("/create", { replace: true });
  };

  return (
    <div className="flex mt-28 justify-center items-center">
      <form
        className="mr-32 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={onSubmit}
          >
            Add User
          </button>
        </div>
      </form>
      <UserList/>
    </div>
  );
};

export default CreateUser;




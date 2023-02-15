import React from "react";
import { useState, useContext } from "react";
import exerciseContext from "../context/exerciseContext";

const CreateUser = () => {

  const context = useContext(exerciseContext);
  const { addUser } = context;

  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
    };

    // axios
    //   .post("http://localhost:3000/users/add", user)
    //   .then((res) => console.log(res.data));
    console.log("User Added!");

    setName("");
  };

  return (
    // <div>
    //   <div className="flex mt-20 items-center justify-center">
    //     <div className="xl:w-96">
    //       <label
    //         for="exampleText0"
    //         className="form-label text-lg inline-block mb-2 font-bold text-gray-700"
    //       >
    //         Create New User
    //       </label>
    //       <input
    //         type="text"
    //         className="
    //     form-control
    //     block
    //     w-full
    //     px-3
    //     py-1.5
    //     text-base
    //     font-normal
    //     text-gray-700
    //     bg-white bg-clip-padding
    //     border border-solid border-gray-300
    //     rounded
    //     transition
    //     ease-in-out
    //     m-0
    //     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    //   "
    //         id="exampleText0"
    //         placeholder="Text input"
    //       />
    //     </div>

    //     <div>
    //       <button
    //         type="button"
    //         data-mdb-ripple="true"
    //         data-mdb-ripple-color="light"
    //         className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center my-52 items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
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
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={onSubmit}
            
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

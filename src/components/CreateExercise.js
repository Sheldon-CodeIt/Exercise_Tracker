import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import exerciseContext from "../context/exerciseContext";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const users = ["user1", "user2", "user3"]; 

  const userInput = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);

    setUsername("");
    setDescription("");
    setDuration("");
    setDate(new Date());
  };

  return (
    <div className="mx-32">
      <h3 className="text-lg font-medium mb-4">Create New Exercise Log</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="username">Username:</label>
          <select
            ref={userInput}
            required
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="description">Description:</label>
          <input
            type="text"
            required
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="duration">Duration (in minutes):</label>
          <input
            type="text"
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div  className="flex flex-col">
          <label  className="text-sm font-medium mb-1" for="date">Date:</label>
          <div>
            <DatePicker className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" selected={date} onChange={(date) => setDate(date)} />
          </div>
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Create Exercise Log"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;

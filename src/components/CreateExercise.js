import React, { useState, useEffect, useRef, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import userContext from "../context/userContext";
import exerciseContext from "../context/exerciseContext";
import { useNavigate } from "react-router-dom";

const CreateExercise = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());

  const userInput = useRef(null);

  const context = useContext(userContext);
  const { users, getUsers } = context;

  const econtext = useContext(exerciseContext);
  const { addExercise } = econtext;

  useEffect(() => {
    getUsers();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const exercise = {
  //     name,
  //     description,
  //     duration,
  //     date,
  //   };

  //   // Api post request
  //   addExercise( exercise.name, exercise.description, exercise.duration, exercise.date );

  //   setname("");
  //   setDescription("");
  //   setDuration("");
  //   setDate(new Date());

  //   navigate('/exercises', { replace: true });

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exercise = {
      name,
      description,
      duration,
      date,
    };

    try {
      await addExercise(
        exercise.name,
        exercise.description,
        exercise.duration,
        exercise.date
      );

      setname("");
      setDescription("");
      setDuration("");
      setDate(new Date());

      navigate("/exercises", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-32">
      <h3 className="text-lg font-medium mb-4">Create New Exercise Log</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="name">
            name:
          </label>
          <select
            ref={userInput}
            required
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setname(e.target.value)}
          >
            {users.map((user) => (
              <option key={user._id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="description">
            Description:
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="duration">
            Duration (in minutes):
          </label>
          <input
            type="text"
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" for="date">
            Date:
          </label>
          <div>
            <DatePicker
              className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Create Exercise Log"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;

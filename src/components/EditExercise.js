import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import exerciseContext from "../context/exerciseContext";
import { useNavigate, useParams } from "react-router-dom";

const EditExercise = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const econtext = useContext(exerciseContext);
  const { exercises, updateExercise } = econtext;

  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const exercise = exercises.find((exercise) => exercise._id === id);
    if (exercise) {
      setname(exercise.name);
      setDescription(exercise.description);
      setDuration(exercise.duration);
      setDate(new Date(exercise.date));
    }
  }, [exercises, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exercise = {
      name,
      description,
      duration,
      date,
    };

    if (
      name.trim() === "" ||
      description.trim() === "" ||
      (typeof duration !== 'string' || duration.trim() === "")
    ) {
      setErrorMessage("Please update the fields");
      return;
    }

    if (isNaN(parseInt(duration))) {
      setErrorMessage("Duration should be a number");
      return;
    }

    try {
      await updateExercise(id, exercise.name, exercise.description, exercise.duration, exercise.date);
      setname("");
      setDescription("");
      setDuration("");
      setDate(new Date());
      setErrorMessage("");
      navigate("/exercises", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-32 pt-16">
      <h3 className="text-lg font-medium mb-4">Edit Exercise Log</h3>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="description">
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
          <label className="text-sm font-medium mb-1" htmlFor="duration">
            Duration (in minutes):
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 py-2 px-3 rounded
            -md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="date">
            Date:
          </label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
        >
          Update Exercise
        </button>
      </form>
    </div>
  );
};

export default EditExercise;

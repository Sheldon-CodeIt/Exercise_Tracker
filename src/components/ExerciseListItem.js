import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import exerciseContext from "../context/exerciseContext";


const ExerciseListItem = (props) => {

  const { exercise } = props;
  const context = useContext(exerciseContext);
  const { deleteExercise, getExercises, exercises } = context;


  useEffect(() => {
    getExercises();
  }, [exercises]);

  return (
    <tr className="bg-white border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {exercise.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {exercise.description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {exercise.duration}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {exercise.date.substring(0, 10)}
      </td>
      <td>
        <Link to={`/edit/${exercise._id}`}>edit</Link> |{" "}
        <Link
          href="#"
          className="text-red-600 hover:text-red-700 transition duration-300 ease-in-out mb-4"
          onClick={() => {
            deleteExercise(exercise._id);
          }}
        >
          delete
        </Link>
      </td>
    </tr>
  );
};

export default ExerciseListItem;

import ExerciseContext from "./exerciseContext";
import { useState } from "react";

const ExerciseState = (props) => {
  const host = "http://localhost:3000";

  const exercisesInitial = [
    {
      _id: "",
      name: "",
      description: "",
      duration: "",
      date: "",
      createdAt: "",
      updatedAt: "",
      __v: "",
    },
  ];

  const [exercises, setExercises] = useState(exercisesInitial);

  const getExercises = async () => {
    const response = await fetch(`${host}/exercises`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();
      setExercises(json);
    } else {
      console.error("Failed to fetch exercises data");
    }
  };

  const addExercise = async (name, description, duration, date) => {
    const response = await fetch(`${host}/exercises/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, duration, date }),
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      const exercise = {
        _id: json._id,
        name: name,
        description: description,
        duration: duration,
        date: date,
        createdAt: json.createdAt,
        updatedAt: json.updatedAt,
        __v: json.__v,
      };
      setExercises(exercises.concat(exercise));
    } else {
      console.error("Failed to add exercise");
    }
  };

  const deleteExercise = async (id) => {
    const response = await fetch(`${host}/exercises/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    console.log("deleting the exercise with id" + id);
    const newExercises = exercises.filter((exercise) => {
      return exercise._id !== id;
    });
    setExercises(newExercises);
  };

  const updateExercise = async (id, name, description, duration, date) => {
    const response = await fetch(`${host}/exercises/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, duration, date }),
    });
  
    const json = await response.json();
    console.log(json);
  
    // logic to edit in client
    const updatedExercises = exercises.slice().map((exercise) => {
      if (exercise._id === id) {
        return {
          ...exercise,
          name,
          description,
          duration,
          date,
        };
      }
      return exercise;
    });
    setExercises(updatedExercises);  
  };

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        setExercises,
        getExercises,
        deleteExercise,
        updateExercise,
        addExercise,
      }}
    >
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseState;

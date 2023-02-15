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

    const json = await response.json();

    const exercise = {
      _id: "63e735cbf5d41f6cbc005866",
      name: name,
      description: description,
      duration: duration,
      date: date,
      createdAt: "2023-02-11T06:29:31.561Z",
      updatedAt: "2023-02-11T06:29:31.561Z",
      __v: 0,
    };
    setExercises(exercises.concat(exercise));
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

  const editExercises = async (id, name, description, duration, date) => {
    const response = await fetch(`${host}/exercises/edit/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, duration, date }),
    });

    const json = response.json();

    // logic to edit in client
    for (let index = 0; index < exercises.length; index++) {
      const element = exercises[index];
      if (element._id === id) {
        element.name = name;
        element.description = description;
        element.duration = duration;
        element.date = date;
      }
    }
  };

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        setExercises,
        getExercises,
        deleteExercise,
        editExercises,
        addExercise
      }}
    >
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseState;

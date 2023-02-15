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
    }
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
//     // TODO API

//     const response = await fetch(`${host}/exercises/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, skill, amount, date }),
//     });

//     const json = await response.json();

//     const exercise = {
//       _id: "63e735cbf5d41f6cbc005866",
//       name: name,
//       skill: skill,
//       amount: amount,
//       date: date,
//       createdAt: "2023-02-11T06:29:31.561Z",
//       updatedAt: "2023-02-11T06:29:31.561Z",
//       __v: 0,
//     };
//     setWorkers(workers.concat(worker));
//   };

//   const deleteWorker = async (id) => {
//     const response = await fetch(`${host}/workerProfiles/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     console.log(json);
//     console.log("deleting the note with id" + id);
//     const newWorkers = workers.filter((worker) => {
//       return worker._id !== id;
//     });
//     setWorkers(newWorkers);
//   };

//   const editWorker = async (id, name, skill, amount, date) => {
//     //API
//     const response = await fetch(`${host}/workers/edit/${id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, skill, amount, date }),
//     });

//     const json = response.json();

//     // logic to edit in client
//     for (let index = 0; index < workers.length; index++) {
//       const element = workers[index];
//       if (element._id === id) {
//         element.name = name;
//         element.skill = skill;
//         element.amount = amount;
//         element.datae = date;
//       }
//     }
//   };

  return (
    <ExerciseContext.Provider
      value={{ exercises, setExercises, getExercises }}
    >
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseState;

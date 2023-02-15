import React, {useContext} from 'react'
import exerciseContext from "../context/exerciseContext";
import ExerciseListItem from './ExerciseListItem';

const ExerciseList = () => {

  const context = useContext(exerciseContext);
  const { exercises } = context;

    return (
        <div className="flex flex-col mx-32">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exercises.map((item) => (
                      <ExerciseListItem exercise={item} key={item._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
};


export default ExerciseList

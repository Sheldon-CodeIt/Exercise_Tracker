import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Exer-Tracker</h1>
        <p className="text-lg text-gray-700 mb-8">
          Exercise Tracker is a small app that allows you to create a list of users and track their exercise routines.
        </p>
        <h2 className="text-xl font-bold mb-2">How it works:</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Create a user</li>
          <li>View list of users</li>
          <li>Create an exercise for a user</li>
          <li>View exercise log for each user</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          This app was built with React and uses Tailwind CSS for styling.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

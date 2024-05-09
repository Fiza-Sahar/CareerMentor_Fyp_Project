// UploadResume.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ResumeUpload = ({ title, imageSrc, buttonName }) => {
  return (
<<<<<<< Updated upstream
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg object-cover h-60" src={imageSrc} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h5>
          </a>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link to="/resume-checker">{buttonName}</Link>
          </button>
        </div>
=======
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* Utilize Link component for navigation */}
        <Link to="/resume-checker" className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonName}
        </Link>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default ResumeUpload;

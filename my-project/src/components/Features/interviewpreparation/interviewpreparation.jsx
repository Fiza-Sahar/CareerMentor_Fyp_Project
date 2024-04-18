import React from 'react';
import { Link } from 'react-router-dom'; 

const interviewpreparation = ({ title, imageSrc, buttonName }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/Form"> {buttonName} </Link> {/* Wrap button text with Link */}
        </button>
      </div>
    </div>
  );
};

export default interviewpreparation;

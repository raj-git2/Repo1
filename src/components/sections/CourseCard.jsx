import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiAward } from 'react-icons/fi';
import ProgressBar from '../ui/ProgressBar';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="bg-gray-200 border-2 border-dashed w-full h-40" />
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${
            course.type === 'free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {course.type === 'free' ? 'Free' : 'Premium'}
          </span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mt-3">
          <FiClock className="mr-1" />
          <span>{course.duration}</span>
          <span className="mx-2">•</span>
          <span>{course.level}</span>
        </div>
        
        {course.progress > 0 && (
          <div className="mt-4">
            <ProgressBar value={course.progress} />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <Link 
            to={`/learn/${course.id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg block text-sm font-medium transition-colors"
          >
            {course.progress > 0 ? 'Continue' : 'Start Course'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
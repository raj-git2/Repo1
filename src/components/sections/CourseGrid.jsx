import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../ui/ProgressBar';
import { FiClock, FiAward, FiBookOpen } from 'react-icons/fi';

const CourseGrid = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div 
          key={course.id} 
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="bg-gray-200 border-2 border-dashed aspect-video w-full" />
          
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{course.description}</p>
              </div>
              
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                course.type === 'free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {course.type === 'free' ? 'Free' : 'Premium'}
              </span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <FiClock className="mr-1" />
              <span>{course.duration}</span>
              <span className="mx-2">•</span>
              <span>{course.level}</span>
            </div>
            
            {course.progress > 0 && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} />
              </div>
            )}
            
            <div className="mt-5 flex justify-between items-center">
              <div className="flex items-center">
                {course.badge && (
                  <div className="mr-2 flex items-center text-yellow-500 text-sm">
                    <FiAward className="mr-1" />
                    <span>Earn "{course.badge}"</span>
                  </div>
                )}
              </div>
              
              <Link 
                to={`/learn/${course.id}`} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {course.progress > 0 ? 'Continue' : 'Enroll'}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
import React, { useState } from 'react';
import { FiSearch, FiFilter, FiBookmark, FiAward } from 'react-icons/fi';
import CourseCard from '../components/sections/CourseCard';
import Sidebar from '../components/layout/Sidebar';
import Button from '../components/ui/Button';

const CourseEnrollmentScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    'Marketing', 'Finance', 'Operations', 
    'Sales', 'Management', 'Technology'
  ];
  
  const courses = [
    {
      id: 1,
      title: 'Financial Basics',
      description: 'Learn essential financial concepts for business owners',
      duration: '2 hours',
      level: 'Beginner',
      type: 'free',
      progress: 0,
      thumbnail: 'finance'
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      description: 'Boost your online presence and customer engagement',
      duration: '5 hours',
      level: 'Intermediate',
      type: 'premium',
      progress: 0,
      thumbnail: 'marketing'
    },
    {
      id: 3,
      title: 'Inventory Management',
      description: 'Optimize your stock levels and reduce costs',
      duration: '3 hours',
      level: 'Beginner',
      type: 'free',
      progress: 45,
      thumbnail: 'inventory'
    },
    {
      id: 4,
      title: 'Customer Service Excellence',
      description: 'Build loyal customers through exceptional service',
      duration: '4 hours',
      level: 'Intermediate',
      type: 'premium',
      progress: 0,
      thumbnail: 'service'
    },
    {
      id: 5,
      title: 'Tax Planning for SMEs',
      description: 'Strategies to minimize your tax liability legally',
      duration: '3.5 hours',
      level: 'Advanced',
      type: 'premium',
      progress: 0,
      thumbnail: 'tax'
    },
    {
      id: 6,
      title: 'E-commerce Fundamentals',
      description: 'Setup and grow your online store effectively',
      duration: '4 hours',
      level: 'Beginner',
      type: 'free',
      progress: 0,
      thumbnail: 'ecommerce'
    }
  ];

  const recommendedCourses = courses.slice(0, 3);
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                            course.title.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Business Courses</h1>
          <p className="text-gray-600 mt-2">Enhance your skills with our expert-led courses</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50"
            >
              <FiFilter className="mr-2" /> Filters
            </button>
            
            {showFilters && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10 p-4">
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left px-2 py-1 rounded ${
                      selectedCategory === 'all' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-2 py-1 rounded ${
                        selectedCategory === category ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filter to find what you're looking for
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-1/4">
            <Sidebar>
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <FiBookmark className="mr-2 text-blue-600" /> Recommended For You
                </h3>
                <div className="space-y-4">
                  {recommendedCourses.map(course => (
                    <div 
                      key={course.id} 
                      className="bg-white rounded-lg border border-gray-200 p-3 hover:border-blue-300 transition cursor-pointer"
                    >
                      <div className="flex">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">{course.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{course.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <FiAward className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Your Learning Progress</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">You've completed 2 of 5 courses in your learning path</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-right text-xs text-gray-500 mt-1">40% complete</p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <h3 className="font-medium text-yellow-800 mb-2">Earn Badges!</h3>
                <p className="text-sm text-yellow-700">
                  Complete courses to earn achievement badges and showcase your skills
                </p>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollmentScreen;
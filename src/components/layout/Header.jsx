import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Show search only on course page
  const showSearch = location.pathname === '/courses';
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    navigate('/courses');
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="bg-blue-600 text-white font-bold text-xl px-3 py-2 rounded">
                Financial Literacy
              </div>
            </Link>
          </div>
          
          {showSearch && (
            <div className="hidden md:block flex-1 mx-10">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </form>
            </div>
          )}
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign Up</Link>
              <Link to="/login" className="text-blue-600 font-medium hover:underline">Log In</Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            {showSearch && (
              <button 
                className="text-gray-500 hover:text-gray-700 mr-2"
                onClick={() => document.getElementById('mobile-search').classList.toggle('hidden')}
              >
                <FiSearch className="h-5 w-5" />
              </button>
            )}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-gray-700"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile search */}
      {showSearch && (
        <div id="mobile-search" className="md:hidden hidden px-4 py-2 bg-white border-t border-gray-200">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FiSearch className="text-gray-400" />
            </div>
          </form>
        </div>
      )}
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/signup" 
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
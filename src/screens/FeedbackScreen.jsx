import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Sidebar from '../components/layout/Sidebar';
import { FiStar, FiAward, FiSmile, FiFrown, FiMeh } from 'react-icons/fi';

const FeedbackScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const questions = [
    "How would you rate your loan application experience?",
    "How easy was it to navigate the platform?",
    "How helpful were the financial courses?",
    "How likely are you to recommend us to others?"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit feedback
    setSubmitted(true);
  };

  const renderEmoji = (value) => {
    if (value < 2) return <FiFrown className="text-red-500 text-xl" />;
    if (value < 4) return <FiMeh className="text-yellow-500 text-xl" />;
    return <FiSmile className="text-green-500 text-xl" />;
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!submitted ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">We Value Your Feedback</h1>
                  <p className="text-gray-600">
                    Your input helps us improve our services for entrepreneurs like you
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-800 mb-4">
                      How would you rate your overall experience?
                    </label>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-3xl ${
                            star <= rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          <FiStar className="fill-current" />
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-center mt-4">
                      <div className="flex items-center">
                        {rating > 0 && renderEmoji(rating)}
                        <span className="ml-2 text-gray-600">
                          {rating === 0 ? 'Select rating' : 
                           rating < 2 ? 'Poor' : 
                           rating < 3 ? 'Fair' : 
                           rating < 4 ? 'Good' : 
                           rating < 5 ? 'Very Good' : 'Excellent'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-800 mb-4">
                      What did you like or dislike about our platform?
                    </label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Share your thoughts, suggestions, or concerns..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-800 mb-4">
                      Please answer these quick questions
                    </label>
                    <div className="space-y-6">
                      {questions.map((question, index) => (
                        <div key={index}>
                          <p className="font-medium text-gray-700 mb-3">{question}</p>
                          <div className="flex items-center space-x-4">
                            {[1, 2, 3, 4, 5].map((option) => (
                              <div key={option} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`q${index}-${option}`}
                                  name={`question-${index}`}
                                  value={option}
                                  checked={selectedQuestion === `q${index}-${option}`}
                                  onChange={() => setSelectedQuestion(`q${index}-${option}`)}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor={`q${index}-${option}`} className="ml-2 text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="primary" type="submit" className="px-10">
                      Submit Feedback
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <Sidebar>
                <div className="bg-purple-50 rounded-xl p-5 mb-8">
                  <div className="flex items-center mb-3">
                    <FiAward className="text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-800">Feedback Rewards</h3>
                  </div>
                  <p className="text-sm text-purple-700 mb-4">
                    Complete this survey and earn the "Feedback Hero" badge for your profile
                  </p>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto" />
                    <p className="font-medium mt-2">Feedback Hero</p>
                    <p className="text-xs text-gray-500">Share your insights to help others</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4">Why Your Feedback Matters</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</div>
                      <span>Helps us improve our platform and services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</div>
                      <span>Guides development of new features for entrepreneurs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</div>
                      <span>Informs financial education content development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</div>
                      <span>Creates a better experience for the entire community</span>
                    </li>
                  </ul>
                </div>
              </Sidebar>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mx-auto bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <FiStar className="text-green-500 text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Feedback!</h2>
            <p className="text-gray-600 mb-6">
              We appreciate you taking the time to share your experience. Your insights help us 
              create a better platform for all entrepreneurs.
            </p>
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <FiAward className="text-purple-600 mr-2" />
                <span className="font-medium">You've earned the "Feedback Hero" badge!</span>
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
            </div>
            <Button variant="primary" onClick={() => window.location.href = '/'}>
              Return to Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackScreen;
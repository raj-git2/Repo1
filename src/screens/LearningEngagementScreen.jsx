import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { 
  FiChevronLeft, FiChevronRight, FiCheck, FiDownload, 
  FiVideo, FiFileText, FiCheckCircle, FiAward 
} from 'react-icons/fi';

const LearningEngagementScreen = () => {
  const { courseId } = useParams();
  const [currentModule, setCurrentModule] = useState(2);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [assignmentFile, setAssignmentFile] = useState(null);

  const modules = [
    { id: 1, title: 'Introduction to Financial Management', type: 'video', duration: '10:25', completed: true },
    { id: 2, title: 'Budgeting Basics', type: 'video', duration: '15:42', completed: true },
    { id: 3, title: 'Expense Tracking Techniques', type: 'reading', duration: '8 min', completed: false },
    { id: 4, title: 'Budgeting Quiz', type: 'quiz', duration: '5 min', completed: false },
    { id: 5, title: 'Create Your Budget Plan', type: 'assignment', duration: '20 min', completed: false },
  ];

  const quizQuestions = [
    {
      question: 'What is the primary purpose of a budget?',
      options: [
        'To limit your spending',
        'To plan and control your finances',
        'To track only your income',
        'To calculate taxes'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of these is a fixed expense?',
      options: [
        'Entertainment',
        'Groceries',
        'Rent payment',
        'Dining out'
      ],
      correctAnswer: 2
    }
  ];

  const handleQuizSubmit = () => {
    setShowFeedback(true);
    const correct = quizAnswer === quizQuestions[0].correctAnswer.toString();
    setIsCorrect(correct);
    setTimeout(() => setShowFeedback(false), 3000);
    
    if (correct) {
      // Mark quiz as completed
      const updatedModules = [...modules];
      updatedModules[currentModule].completed = true;
    }
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAssignmentFile(e.target.files[0]);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/courses" className="inline-flex items-center text-blue-600 font-medium hover:underline">
            <FiChevronLeft className="mr-1" /> Back to Courses
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Course Header */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Financial Basics</h1>
                <p className="opacity-90 mt-1">Module {currentModule + 1} of {modules.length} • {modules[currentModule].title}</p>
              </div>
              <div className="w-full md:w-64">
                <ProgressBar value={60} label="Course Progress" color="light" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="w-full lg:w-3/4 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">{modules[currentModule].title}</h2>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="flex items-center mr-4">
                    {modules[currentModule].type === 'video' ? <FiVideo className="mr-1" /> : 
                     modules[currentModule].type === 'reading' ? <FiFileText className="mr-1" /> : 
                     modules[currentModule].type === 'quiz' ? <FiAward className="mr-1" /> : 
                     <FiCheckCircle className="mr-1" />}
                    {modules[currentModule].type.charAt(0).toUpperCase() + modules[currentModule].type.slice(1)}
                  </span>
                  <span>{modules[currentModule].duration}</span>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="mb-8">
                {modules[currentModule].type === 'video' && (
                  <div>
                    <div className="bg-gray-900 aspect-video rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                        <p className="mt-3 text-gray-400">Video player will appear here</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="flex items-center">
                        <FiDownload className="mr-2" /> Download Video
                      </Button>
                    </div>
                  </div>
                )}
                
                {modules[currentModule].type === 'reading' && (
                  <div className="prose max-w-none">
                    <h3>Understanding Expense Tracking</h3>
                    <p>
                      Effective expense tracking is the foundation of sound financial management. 
                      By monitoring where your money goes, you can identify spending patterns, 
                      uncover unnecessary expenses, and make informed decisions about budget allocation.
                    </p>
                    <p>
                      Key benefits of expense tracking:
                    </p>
                    <ul>
                      <li>Identifies spending leaks and wasteful expenditures</li>
                      <li>Provides clarity on cash flow patterns</li>
                      <li>Helps prioritize essential expenses</li>
                      <li>Creates accountability for financial decisions</li>
                      <li>Enables more accurate budget forecasting</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg my-4">
                      <h4 className="font-medium text-blue-800">Pro Tip</h4>
                      <p className="text-blue-700">
                        Use the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.
                      </p>
                    </div>
                  </div>
                )}
                
                {modules[currentModule].type === 'quiz' && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <FiAward className="text-yellow-500 mr-2 text-xl" />
                      <h3 className="font-medium">Knowledge Check</h3>
                    </div>
                    
                    <div className="mb-6">
                      <p className="font-medium mb-3">{quizQuestions[0].question}</p>
                      <div className="space-y-3">
                        {quizQuestions[0].options.map((option, index) => (
                          <div key={index} className="flex items-start">
                            <input
                              type="radio"
                              id={`option-${index}`}
                              name="quiz"
                              value={index}
                              checked={quizAnswer === index.toString()}
                              onChange={(e) => setQuizAnswer(e.target.value)}
                              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor={`option-${index}`} className="ml-3 text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="primary" onClick={handleQuizSubmit} disabled={!quizAnswer}>
                      Submit Answer
                    </Button>
                    
                    {showFeedback && (
                      <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        {isCorrect ? (
                          <div className="flex items-center">
                            <FiCheck className="mr-2 text-green-500" /> Correct! You earned 10 points
                          </div>
                        ) : (
                          "Incorrect. Please review the material and try again."
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {modules[currentModule].type === 'assignment' && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium mb-4">Assignment: Create Your Budget Plan</h3>
                    <p className="text-gray-600 mb-6">
                      Using the templates provided, create a monthly budget plan for your business. 
                      Consider all income sources and expense categories we've discussed. 
                      Submit your completed budget plan below.
                    </p>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                      {assignmentFile ? (
                        <div className="flex flex-col items-center">
                          <FiCheckCircle className="text-green-500 text-3xl mb-2" />
                          <p className="font-medium">{assignmentFile.name}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {(assignmentFile.size / 1024).toFixed(1)} KB
                          </p>
                          <button 
                            onClick={() => setAssignmentFile(null)}
                            className="mt-4 text-sm text-blue-600 hover:underline"
                          >
                            Remove file
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-500 mb-3">Drag & drop your file here</p>
                          <p className="text-sm text-gray-500 mb-4">or</p>
                          <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Browse Files
                            <input 
                              type="file" 
                              className="hidden" 
                              onChange={handleFileUpload}
                              accept=".pdf,.doc,.docx,.xls,.xlsx"
                            />
                          </label>
                          <p className="text-xs text-gray-500 mt-3">
                            Supported formats: PDF, DOC, XLS (Max 10MB)
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Button variant="primary" disabled={!assignmentFile}>
                      Submit Assignment
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between border-t border-gray-200 pt-6">
                <Button 
                  variant="outline" 
                  disabled={currentModule === 0}
                  onClick={() => setCurrentModule(currentModule - 1)}
                  className="flex items-center"
                >
                  <FiChevronLeft className="mr-1" /> Previous
                </Button>
                <Button 
                  variant="primary"
                  onClick={() => {
                    if (currentModule < modules.length - 1) {
                      setCurrentModule(currentModule + 1);
                    } else {
                      // Complete course
                    }
                  }}
                  className="flex items-center"
                >
                  {currentModule < modules.length - 1 ? 'Next Module' : 'Complete Course'}
                  <FiChevronRight className="ml-1" />
                </Button>
              </div>
            </div>
            
            {/* Modules Sidebar */}
            <div className="w-full lg:w-1/4 bg-gray-50 p-6 border-l border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Course Modules</h3>
              <ul className="space-y-2">
                {modules.map((module, index) => (
                  <li key={module.id}>
                    <button
                      onClick={() => setCurrentModule(index)}
                      className={`w-full text-left p-3 rounded-lg flex items-center justify-between ${
                        currentModule === index 
                          ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                          : 'hover:bg-gray-100'
                      } ${module.completed ? 'border-l-4 border-green-500' : ''}`}
                    >
                      <div>
                        <span className="block font-medium">{module.title}</span>
                        <span className="text-xs text-gray-500 flex items-center mt-1">
                          {module.type === 'video' ? <FiVideo className="mr-1" size={12} /> : 
                           module.type === 'reading' ? <FiFileText className="mr-1" size={12} /> : 
                           module.type === 'quiz' ? <FiAward className="mr-1" size={12} /> : 
                           <FiCheckCircle className="mr-1" size={12} />}
                          {module.duration}
                        </span>
                      </div>
                      {module.completed && <FiCheck className="text-green-500" />}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Your Progress</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Learning Score</span>
                    <span className="font-bold text-blue-600">78/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Modules Completed</span>
                    <span className="font-bold text-green-600">2/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <FiDownload className="mr-2" /> Download Course Materials
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningEngagementScreen;
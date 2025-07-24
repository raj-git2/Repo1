import React, { useState } from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import ScoreGauge from '../components/ui/ScoreGauge';
import Sidebar from '../components/layout/Sidebar';
import { FiArrowUp, FiInfo, FiAlertTriangle } from 'react-icons/fi';

ChartJS.register(ArcElement, Tooltip, Legend);

const CreditScoreScreen = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const creditScore = 78;
  const learningScore = 65;
  const transactionScore = 85;
  const previousScore = 72;
  
  const scoreColor = creditScore >= 80 ? 'success' : 
                    creditScore >= 60 ? 'primary' : 
                    'danger';
  
  const scoreChange = creditScore - previousScore;
  
  const data = {
    labels: ['Learning Score', 'Transaction Score'],
    datasets: [
      {
        data: [learningScore, transactionScore],
        backgroundColor: ['#3B82F6', '#10B981'],
        borderColor: ['#2563EB', '#059669'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}/100`;
          }
        }
      }
    },
    cutout: '70%',
    maintainAspectRatio: false
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Your Credit Profile</h1>
            <p className="text-gray-600 mt-1">Updated: Today, 11:30 AM</p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant={activeTab === 'overview' ? 'primary' : 'outline'} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </Button>
            <Button 
              variant={activeTab === 'factors' ? 'primary' : 'outline'} 
              onClick={() => setActiveTab('factors')}
            >
              Score Factors
            </Button>
            <Button 
              variant={activeTab === 'history' ? 'primary' : 'outline'} 
              onClick={() => setActiveTab('history')}
            >
              History
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {/* Score Overview */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                <div className="text-center">
                  <ScoreGauge 
                    value={creditScore} 
                    max={100} 
                    color={scoreColor}
                    size={200}
                  />
                  <div className={`mt-2 flex items-center justify-center ${scoreChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {scoreChange >= 0 ? <FiArrowUp className="mr-1" /> : <FiArrowUp className="mr-1 transform rotate-180" />}
                    <span>{Math.abs(scoreChange)} points {scoreChange >= 0 ? 'increase' : 'decrease'}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Learning Score</span>
                      <span className="font-medium">{learningScore}/100</span>
                    </div>
                    <ProgressBar value={learningScore} color="primary" />
                    <p className="text-xs text-gray-500 mt-1">Based on course completion and assessments</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Transaction Score</span>
                      <span className="font-medium">{transactionScore}/100</span>
                    </div>
                    <ProgressBar value={transactionScore} color="success" />
                    <p className="text-xs text-gray-500 mt-1">Based on income stability and spending patterns</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-center">
                      <FiInfo className="text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-blue-700">
                        <span className="font-medium">Good news!</span> You're eligible for a loan up to <span className="font-bold">$1,500</span> with competitive rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Score Factors */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Score Composition</h2>
                <div className="h-64">
                  <Doughnut data={data} options={options} />
                </div>
              </div>
              
              {/* Loan Eligibility */}
              <div className="mt-10 p-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Loan Eligibility</h3>
                    <p className="text-gray-600 mt-1">
                      Based on your credit profile, you qualify for the following options
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center min-w-[150px]">
                    <p className="text-xs text-gray-500">Max Loan Amount</p>
                    <p className="text-2xl font-bold text-green-600">$1,500</p>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <p className="text-sm text-gray-500">Term Loan</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">$1,000</p>
                    <p className="text-xs text-gray-500 mt-1">6 months • 8% APR</p>
                    <Button variant="primary" size="sm" className="mt-3 w-full">
                      Apply
                    </Button>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <p className="text-sm text-gray-500">Cash Advance</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">$750</p>
                    <p className="text-xs text-gray-500 mt-1">3 months • 6% APR</p>
                    <Button variant="primary" size="sm" className="mt-3 w-full">
                      Apply
                    </Button>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <p className="text-sm text-gray-500">Equipment Loan</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">$1,500</p>
                    <p className="text-xs text-gray-500 mt-1">12 months • 7% APR</p>
                    <Button variant="primary" size="sm" className="mt-3 w-full">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <Sidebar>
              <h3 className="font-semibold text-lg mb-4">Improve Your Score</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition">
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-800 rounded-lg w-12 h-12 flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Complete Financial Basics course</h4>
                      <p className="text-sm text-gray-600 mt-1">+10 potential points</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition">
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-800 rounded-lg w-12 h-12 flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Connect another bank account</h4>
                      <p className="text-sm text-gray-600 mt-1">+5 potential points</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition">
                  <div className="flex">
                    <div className="bg-blue-100 text-blue-800 rounded-lg w-12 h-12 flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Maintain positive balance for 30 days</h4>
                      <p className="text-sm text-gray-600 mt-1">+8 potential points</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <FiAlertTriangle className="text-yellow-500 mr-2" />
                    <h4 className="font-medium text-yellow-800">Factors Lowering Your Score</h4>
                  </div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• High expense-to-income ratio</li>
                    <li>• Inconsistent cash flow pattern</li>
                    <li>• Limited transaction history</li>
                  </ul>
                </div>
                
                <Button variant="primary" className="w-full">
                  Apply for Loan
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  APR starting from 6.99%
                </p>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreScreen;
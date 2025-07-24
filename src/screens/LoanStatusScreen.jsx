import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Sidebar from '../components/layout/Sidebar';
import { FiCheck, FiX, FiClock, FiDollarSign, FiCalendar, FiDownload } from 'react-icons/fi';

const LoanStatusScreen = () => {
  const [status, setStatus] = useState('approved'); // 'approved', 'rejected', 'processing'
  const [disbursementMethod, setDisbursementMethod] = useState('');
  
  const loanDetails = {
    amount: 1000,
    term: 6,
    purpose: 'Inventory Purchase',
    applicationDate: '2023-10-15',
    decisionDate: '2023-10-16'
  };
  
  const disbursementMethods = [
    { id: 'bank', name: 'Bank Transfer' },
    { id: 'mpesa', name: 'M-Pesa' },
    { id: 'airtel', name: 'Airtel Money' },
    { id: 'equity', name: 'Equity Direct' }
  ];

  const handleDisburse = () => {
    // Process disbursement
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Loan Application Status</h1>
          <p className="text-gray-600 mt-2">Track the progress of your loan request</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {status === 'approved' ? (
                <div>
                  <div className="text-center mb-8">
                    <div className="mx-auto bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <FiCheck className="text-green-500 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Congratulations! Your ${loanDetails.amount} loan is approved!
                    </h2>
                    <p className="text-gray-600">
                      Funds will be disbursed to your selected account within 24 hours
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-green-800 mb-4">Loan Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="bg-white rounded-lg p-3 mr-4">
                          <FiDollarSign className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Loan Amount</p>
                          <p className="font-medium">${loanDetails.amount}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-white rounded-lg p-3 mr-4">
                          <FiCalendar className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Loan Term</p>
                          <p className="font-medium">{loanDetails.term} months</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-white rounded-lg p-3 mr-4">
                          <FiClock className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">First Payment Due</p>
                          <p className="font-medium">Nov 30, 2023</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-white rounded-lg p-3 mr-4">
                          <FiDollarSign className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Payment</p>
                          <p className="font-medium">$175.50</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-800 mb-4">Select Disbursement Method</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {disbursementMethods.map(method => (
                        <button
                          key={method.id}
                          onClick={() => setDisbursementMethod(method.id)}
                          className={`p-4 border rounded-lg text-center ${
                            disbursementMethod === method.id 
                              ? 'border-blue-500 bg-blue-50 text-blue-700' 
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {method.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="primary" 
                      disabled={!disbursementMethod}
                      onClick={handleDisburse}
                    >
                      Disburse Now
                    </Button>
                  </div>
                </div>
              ) : status === 'rejected' ? (
                <div>
                  <div className="text-center mb-8">
                    <div className="mx-auto bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <FiX className="text-red-500 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Application Not Approved
                    </h2>
                    <p className="text-gray-600">
                      We're unable to approve your loan application at this time
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-red-800 mb-4">Reasons for Decline</h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <FiX className="mt-1 mr-2 flex-shrink-0" /> 
                        <span>Insufficient transaction history</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="mt-1 mr-2 flex-shrink-0" /> 
                        <span>High debt-to-income ratio</span>
                      </li>
                      <li className="flex items-start">
                        <FiX className="mt-1 mr-2 flex-shrink-0" /> 
                        <span>Limited credit history</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-800 mb-4">How to Improve Your Chances</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                      <ol className="space-y-4">
                        <li className="flex">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                          <div>
                            <h4 className="font-medium">Complete Financial Basics course</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Improve your financial literacy and demonstrate commitment to better money management
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                          <div>
                            <h4 className="font-medium">Connect additional financial accounts</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Provide more data points to strengthen your financial profile
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                          <div>
                            <h4 className="font-medium">Build transaction history</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Maintain consistent income and expenses for at least 3 months
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Button variant="outline">
                      Contact Support
                    </Button>
                    <Button variant="primary">
                      Try Again
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-8">
                    <div className="mx-auto bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <FiClock className="text-blue-500 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Application Under Review
                    </h2>
                    <p className="text-gray-600">
                      We're processing your application and will notify you soon
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Application Progress</span>
                      <span className="text-sm font-medium text-gray-700">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-blue-800 mb-4">Application Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="mr-4">
                          <div className="bg-white border-2 border-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                            <FiCheck className="text-blue-500" />
                          </div>
                          <div className="h-full w-0.5 bg-blue-500 mx-auto"></div>
                        </div>
                        <div>
                          <p className="font-medium">Application Submitted</p>
                          <p className="text-sm text-gray-600">Oct 15, 2023 • 10:30 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4">
                          <div className="bg-white border-2 border-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                            <FiCheck className="text-blue-500" />
                          </div>
                          <div className="h-full w-0.5 bg-blue-500 mx-auto"></div>
                        </div>
                        <div>
                          <p className="font-medium">Documentation Verified</p>
                          <p className="text-sm text-gray-600">Oct 15, 2023 • 2:45 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4">
                          <div className="bg-white border-2 border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">3</span>
                          </div>
                          <div className="h-full w-0.5 bg-gray-300 mx-auto"></div>
                        </div>
                        <div>
                          <p className="font-medium">Credit Assessment</p>
                          <p className="text-sm text-gray-600">In progress</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4">
                          <div className="bg-white border-2 border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">4</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">Final Decision</p>
                          <p className="text-sm text-gray-600">Pending</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline" className="flex items-center justify-center mx-auto">
                      <FiDownload className="mr-2" /> Download Application Summary
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <Sidebar>
              <h3 className="font-semibold text-lg mb-4">Application Details</h3>
              <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Loan Amount</p>
                    <p className="font-medium">${loanDetails.amount}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Purpose</p>
                    <p className="font-medium">{loanDetails.purpose}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Application Date</p>
                    <p className="font-medium">{loanDetails.applicationDate}</p>
                  </div>
                  
                  {loanDetails.decisionDate && (
                    <div>
                      <p className="text-sm text-gray-600">Decision Date</p>
                      <p className="font-medium">{loanDetails.decisionDate}</p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-sm text-gray-600">Application ID</p>
                    <p className="font-medium">FL-2023-789456</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-semibold text-blue-800 mb-3">Need Help?</h3>
                <p className="text-sm text-blue-700 mb-4">
                  Our support team is available to answer any questions about your application
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanStatusScreen;
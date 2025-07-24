import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Sidebar from '../components/layout/Sidebar';
import { FiDollarSign, FiCalendar, FiCheck, FiAlertCircle, FiRepeat } from 'react-icons/fi';

const LoanRepaymentScreen = () => {
  const [paymentAmount, setPaymentAmount] = useState(175.50);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  
  const loanDetails = {
    amount: 1000,
    paid: 351.00,
    balance: 649.00,
    nextPayment: 175.50,
    dueDate: '2023-11-30',
    term: 6,
    completed: 2
  };
  
  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer' },
    { id: 'mpesa', name: 'M-Pesa' },
    { id: 'card', name: 'Debit/Credit Card' }
  ];
  
  const paymentHistory = [
    { date: '2023-10-30', amount: 175.50, method: 'Bank Transfer', status: 'success' },
    { date: '2023-09-30', amount: 175.50, method: 'M-Pesa', status: 'success' },
    { date: '2023-08-30', amount: 175.50, method: 'Bank Transfer', status: 'success' }
  ];
  
  const handlePayment = () => {
    // Process payment
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Repay Your Loan</h1>
          <p className="text-gray-600 mt-2">Manage your loan repayments and track your progress</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Loan Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Original Amount</span>
                      <span className="font-medium">${loanDetails.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Paid</span>
                      <span className="font-medium text-green-600">${loanDetails.paid}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Balance</span>
                      <span className="font-medium">${loanDetails.balance}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-3 mt-3">
                      <span className="font-medium">Payments Completed</span>
                      <span className="font-bold">{loanDetails.completed}/{loanDetails.term}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <FiAlertCircle className="text-yellow-500 mr-2" />
                    <h3 className="font-semibold text-yellow-800">Next Payment Due</h3>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold">${loanDetails.nextPayment}</p>
                      <p className="text-gray-600">Due {loanDetails.dueDate}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <FiCalendar className="text-yellow-500 text-xl" />
                    </div>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Make payment by due date to avoid late fees and maintain your credit score
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-gray-800 mb-4">Make a Payment</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiDollarSign className="text-gray-500" />
                      </div>
                      <input
                        type="number"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(Number(e.target.value))}
                        min="1"
                        max={loanDetails.balance}
                        step="0.01"
                        className="pl-8 w-full py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {paymentMethods.map(method => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-3 border rounded-lg text-center ${
                            paymentMethod === method.id 
                              ? 'border-blue-500 bg-blue-50 text-blue-700' 
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {method.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full"
                    disabled={!paymentMethod || paymentAmount <= 0}
                    onClick={handlePayment}
                  >
                    Pay ${paymentAmount.toFixed(2)}
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Payment History</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Method
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentHistory.map((payment, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${payment.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.method}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              payment.status === 'success' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {payment.status === 'success' ? 'Completed' : 'Failed'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <Sidebar>
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Auto Pay Settings</h3>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium">Automatic Payments</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Never miss a payment with automatic deductions
                      </p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input 
                        type="checkbox" 
                        id="auto-pay"
                        checked={autoPayEnabled}
                        onChange={() => setAutoPayEnabled(!autoPayEnabled)}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="auto-pay" 
                        className={`block h-6 w-10 rounded-full cursor-pointer ${autoPayEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
                      >
                        <span className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${autoPayEnabled ? 'transform translate-x-4' : ''}`}></span>
                      </label>
                    </div>
                  </div>
                  
                  {autoPayEnabled && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiDollarSign className="text-gray-500" />
                          </div>
                          <select className="pl-8 w-full py-2 border border-gray-300 rounded-md bg-white">
                            <option>Minimum Payment ($175.50)</option>
                            <option>Full Balance ($649.00)</option>
                            <option>Custom Amount</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                        <select className="w-full py-2 border border-gray-300 rounded-md bg-white">
                          <option>Bank Transfer (•••• 1234)</option>
                          <option>M-Pesa (2547••••••89)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date</label>
                        <select className="w-full py-2 border border-gray-300 rounded-md bg-white">
                          <option>Due Date (30th each month)</option>
                          <option>5th of each month</option>
                          <option>15th of each month</option>
                          <option>25th of each month</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-5 mb-8">
                <div className="flex items-center mb-3">
                  <FiCheck className="text-green-500 mr-2" />
                  <h3 className="font-semibold text-green-800">On-Time Payment Benefits</h3>
                </div>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• +5 points to your credit score per payment</li>
                  <li>• Qualify for lower interest rates on future loans</li>
                  <li>• Become eligible for higher loan amounts</li>
                  <li>• Avoid late fees ($15 per occurrence)</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <FiRepeat className="mr-2" /> Request Payment Extension
                </Button>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRepaymentScreen;
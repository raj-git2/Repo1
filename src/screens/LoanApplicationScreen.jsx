import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Sidebar from '../components/layout/Sidebar';
import { FiDollarSign, FiCalendar, FiInfo, FiChevronDown } from 'react-icons/fi';

const LoanApplicationScreen = () => {
  const [loanAmount, setLoanAmount] = useState(500);
  const [loanPurpose, setLoanPurpose] = useState('');
  const [loanDescription, setLoanDescription] = useState('');
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  
  const loanPurposes = [
    'Inventory Purchase',
    'Equipment Upgrade',
    'Business Expansion',
    'Marketing Campaign',
    'Working Capital',
    'Debt Consolidation',
    'Other'
  ];
  
  const loanDetails = {
    amount: loanAmount,
    term: loanAmount <= 500 ? 3 : loanAmount <= 1000 ? 6 : 12,
    interestRate: 8.5,
    processingFee: 25,
    monthlyPayment: calculateMonthlyPayment(loanAmount, 8.5, loanAmount <= 500 ? 3 : loanAmount <= 1000 ? 6 : 12)
  };
  
  function calculateMonthlyPayment(principal, annualRate, months) {
    const monthlyRate = annualRate / 100 / 12;
    return principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit loan application
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Apply for a Loan</h1>
          <p className="text-gray-600 mt-2">Get the funds you need to grow your business</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FiInfo className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-blue-700">
                      You're pre-approved for up to <span className="font-bold">$1,500</span> based on your credit profile. 
                      Applications typically receive a decision within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="block text-lg font-medium text-gray-800 mb-4">
                    How much do you need?
                  </label>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-600">Loan Amount</span>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiDollarSign className="text-gray-500" />
                        </div>
                        <input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          min="100"
                          max="1500"
                          step="50"
                          className="pl-8 w-32 py-2 border border-gray-300 rounded-md text-right font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <input
                        type="range"
                        min="100"
                        max="1500"
                        step="50"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$100</span>
                        <span>$1,500</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-lg font-medium text-gray-800 mb-4">
                    What will you use this loan for?
                  </label>
                  
                  <div className="relative">
                    <button 
                      type="button"
                      onClick={() => setShowPurposeDropdown(!showPurposeDropdown)}
                      className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg text-left"
                    >
                      <span>{loanPurpose || 'Select purpose'}</span>
                      <FiChevronDown className="text-gray-400" />
                    </button>
                    
                    {showPurposeDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                        {loanPurposes.map((purpose, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setLoanPurpose(purpose);
                              setShowPurposeDropdown(false);
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-blue-50"
                          >
                            {purpose}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Briefly describe how you'll use these funds (optional)
                    </label>
                    <textarea
                      value={loanDescription}
                      onChange={(e) => setLoanDescription(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Example: Purchase new inventory for the holiday season to meet increased customer demand"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-lg font-medium text-gray-800 mb-4">
                    Loan Details
                  </label>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Loan Summary</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Loan Amount</span>
                            <span className="font-medium">${loanDetails.amount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Term</span>
                            <span className="font-medium">{loanDetails.term} months</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Interest Rate</span>
                            <span className="font-medium">{loanDetails.interestRate}% APR</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Processing Fee</span>
                            <span className="font-medium">${loanDetails.processingFee}</span>
                          </div>
                          <div className="flex justify-between border-t border-gray-200 pt-3 mt-3">
                            <span className="font-medium">Monthly Payment</span>
                            <span className="font-bold text-blue-600">${loanDetails.monthlyPayment.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Repayment Schedule</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">First Payment Due</span>
                            <span className="font-medium">30 days after disbursement</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Repayment</span>
                            <span className="font-medium">${(loanDetails.monthlyPayment * loanDetails.term).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Interest</span>
                            <span className="font-medium">${(loanDetails.monthlyPayment * loanDetails.term - loanDetails.amount).toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-700 flex">
                            <FiInfo className="mr-2 mt-0.5 flex-shrink-0" /> 
                            <span>No prepayment penalties. Pay off your loan early and save on interest.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between pt-6 border-t border-gray-200">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <Sidebar>
              <h3 className="font-semibold text-lg mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">What is APR?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    APR (Annual Percentage Rate) represents the yearly cost of your loan including 
                    interest and fees. It helps you compare loan offers from different lenders.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">How soon will I receive funds?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Once approved, funds are typically disbursed within 1-2 business days to your 
                    linked bank account.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">Are there any prepayment penalties?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    No, you can pay off your loan early without any additional fees. Early repayment 
                    may reduce your total interest cost.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">What if I can't make a payment?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact us immediately if you anticipate payment difficulties. We offer flexible 
                    repayment options to qualified borrowers.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <h4 className="font-medium text-green-800 mb-2">Your Pre-Approval Details</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Maximum loan amount: $1,500</li>
                    <li>• APR range: 6.99% - 10.99%</li>
                    <li>• Terms: 3-12 months</li>
                    <li>• No collateral required</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Have questions about your application?
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </div>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationScreen;
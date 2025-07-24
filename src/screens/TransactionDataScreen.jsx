import React, { useState } from 'react';
import { FiLock, FiCheck, FiUpload, FiHelpCircle } from 'react-icons/fi';
import AccountButton from '../components/sections/AccountButton';
import Sidebar from '../components/layout/Sidebar';
import Button from '../components/ui/Button';

const TransactionDataScreen = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(['M-Pesa']);
  const [consentGiven, setConsentGiven] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const accountTypes = [
    { id: 'bank', name: 'Bank Account', icon: 'bank' },
    { id: 'mobile', name: 'Mobile Money', icon: 'mobile' },
    { id: 'gateway', name: 'Payment Gateway', icon: 'gateway' },
    { id: 'pos', name: 'POS System', icon: 'pos' },
  ];

  const handleConnectAccount = (accountId) => {
    if (!connectedAccounts.includes(accountId)) {
      setConnectedAccounts([...connectedAccounts, accountId]);
    }
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(true);
      // Process file upload
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Connect Your Finances</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Securely link your accounts to qualify for personalized loan offers
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiLock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Secure Account Connection</h2>
                  <p className="text-gray-600 mt-1">
                    Your financial data is encrypted and never shared without your permission
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-4">Select Account Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accountTypes.map(account => (
                    <AccountButton
                      key={account.id}
                      account={account}
                      isConnected={connectedAccounts.includes(account.id)}
                      onClick={() => handleConnectAccount(account.id)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-4">Connected Accounts</h3>
                {connectedAccounts.length > 0 ? (
                  <div className="bg-gray-50 rounded-lg p-4">
                    {connectedAccounts.map(account => (
                      <div key={account} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                        <div className="flex items-center">
                          <FiCheck className="text-green-500 mr-2" />
                          <span className="font-medium">{account}</span>
                        </div>
                        <span className="text-sm text-green-600">Connected</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <p className="text-yellow-700">No accounts connected yet</p>
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-4">Alternative Data Upload</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {fileUploaded ? (
                    <div className="flex flex-col items-center">
                      <FiCheck className="text-green-500 text-3xl mb-2" />
                      <p className="font-medium">Statement Uploaded</p>
                      <button 
                        onClick={() => setFileUploaded(false)}
                        className="mt-4 text-sm text-blue-600 hover:underline"
                      >
                        Upload different file
                      </button>
                    </div>
                  ) : (
                    <div>
                      <FiUpload className="text-gray-400 text-3xl mx-auto mb-3" />
                      <p className="text-gray-500 mb-3">Upload bank statements or utility bills</p>
                      <p className="text-sm text-gray-500 mb-4">Supports PDF, JPG, PNG (Max 10MB)</p>
                      <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Select Files
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={handleFileUpload}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentGiven}
                  onChange={() => setConsentGiven(!consentGiven)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="consent" className="ml-3 text-gray-700">
                  I authorize Financial Literacy to access my transaction data for credit assessment purposes. 
                  I understand this data will be handled securely and used only to determine my loan eligibility.
                </label>
              </div>
              
              <Button variant="primary" className="w-full" disabled={!consentGiven || connectedAccounts.length === 0}>
                Complete Connection
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <Sidebar>
              <div className="bg-blue-50 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <FiLock className="mr-2" /> Security Assurance
                </h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 flex-shrink-0" /> 
                    <span>ISO 27001 Certified Security</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 flex-shrink-0" /> 
                    <span>Bank-level 256-bit encryption</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 flex-shrink-0" /> 
                    <span>Read-only access to your data</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="mt-1 mr-2 flex-shrink-0" /> 
                    <span>Data never shared with third parties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold mb-3 flex items-center">
                  <FiHelpCircle className="mr-2 text-gray-500" /> Why Connect Accounts?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</div>
                    <span>Get more accurate loan offers based on your actual finances</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</div>
                    <span>Qualify for lower interest rates with verified income</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</div>
                    <span>Build your credit profile faster</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</div>
                    <span>Access personalized financial insights</span>
                  </li>
                </ul>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDataScreen;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import FormInput from '../components/ui/FormInput';
import Testimonials from '../components/sections/Testimonials';
import { FiLock, FiMail, FiPhone, FiUser, FiChevronDown } from 'react-icons/fi';

const OnboardingScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    password: ''
  });
  const [otpMethod, setOtpMethod] = useState('email');
  const [showDropdown, setShowDropdown] = useState(false);

  const businessTypes = ['Retail', 'Food & Beverage', 'Services', 'Manufacturing', 'Other'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Learn New Skills, Grow Your Business
          </h1>
          <Button variant="primary" size="lg" className="mt-4">
            Get Started
          </Button>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="Full Name"
                  name="name"
                  icon={<FiUser />}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                
                <FormInput 
                  label="Email Address"
                  name="email"
                  type="email"
                  icon={<FiMail />}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                
                <FormInput 
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  icon={<FiPhone />}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                  <div className="relative">
                    <button 
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <span>{formData.businessType || 'Select your business'}</span>
                      <FiChevronDown className="text-gray-400" />
                    </button>
                    
                    {showDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                        {businessTypes.map((type, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setFormData({...formData, businessType: type});
                              setShowDropdown(false);
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-blue-50"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <FormInput 
                  label="Password"
                  name="password"
                  type="password"
                  icon={<FiLock />}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                />
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Verification Method</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOtpMethod('email')}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      otpMethod === 'email' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <FiMail className="mr-2 text-lg" /> Email Verification
                  </button>
                  <button
                    type="button"
                    onClick={() => setOtpMethod('phone')}
                    className={`flex items-center justify-center p-4 rounded-lg border ${
                      otpMethod === 'phone' 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <FiPhone className="mr-2 text-lg" /> SMS Verification
                  </button>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button variant="primary" className="w-full sm:w-auto px-8">
                  Create Account
                </Button>
                
                <div className="flex items-center space-x-3">
                  <div className="h-px bg-gray-300 w-8"></div>
                  <span className="text-gray-500 text-sm">Or continue with</span>
                  <div className="h-px bg-gray-300 w-8"></div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <p className="mt-8 text-center text-gray-600">
                Already registered?{' '}
                <Link to="/login" className="text-blue-600 font-medium hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/3">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
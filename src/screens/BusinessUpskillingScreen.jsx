import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Sidebar from '../components/layout/Sidebar';
import { FiTrendingUp, FiUsers, FiAward, FiBarChart2, FiBookOpen } from 'react-icons/fi';

const BusinessUpskillingScreen = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const metrics = [
    { name: 'Revenue', value: '$4,850', change: '+12%', icon: <FiTrendingUp />, positive: true },
    { name: 'Customers', value: '142', change: '+8%', icon: <FiUsers />, positive: true },
    { name: 'Conversion', value: '3.8%', change: '-0.4%', icon: <FiBarChart2 />, positive: false },
    { name: 'Satisfaction', value: '4.6/5', change: '+0.2', icon: <FiAward />, positive: true }
  ];
  
  const recommendedActions = [
    { 
      title: 'Optimize Inventory', 
      description: 'Use your loan to stock high-demand products',
      button: 'View Strategy'
    },
    { 
      title: 'Launch Promotion', 
      description: 'Attract new customers with a limited-time offer',
      button: 'Create Campaign'
    },
    { 
      title: 'Improve Online Presence', 
      description: 'Enhance your digital storefront for better visibility',
      button: 'Get Started'
    }
  ];
  
  const communityGroups = [
    { name: 'Retail Entrepreneurs', members: '1.2k', active: '32 online' },
    { name: 'Food & Beverage Owners', members: '845', active: '18 online' },
    { name: 'Service Providers Hub', members: '1.5k', active: '45 online' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Grow Your Business</h1>
            <p className="text-gray-600 mt-1">Tools and resources to apply your new skills</p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant={activeTab === 'dashboard' ? 'primary' : 'outline'} 
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'community' ? 'primary' : 'outline'} 
              onClick={() => setActiveTab('community')}
            >
              Community
            </Button>
            <Button 
              variant={activeTab === 'resources' ? 'primary' : 'outline'} 
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </Button>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Business Performance</h2>
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last 6 months</option>
                  </select>
                </div>
                
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600">{metric.name}</div>
                        <div className={`p-2 rounded-lg ${metric.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {metric.icon}
                        </div>
                      </div>
                      <div className="mt-2 flex items-baseline">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        <span className={`ml-2 text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Recommended Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedActions.map((action, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 transition">
                      <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                      <p className="text-gray-600 mb-4">{action.description}</p>
                      <Button variant="outline" className="w-full">
                        {action.button}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Sidebar>
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <FiBookOpen className="mr-2 text-blue-600" /> Continue Learning
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition cursor-pointer">
                      <h4 className="font-medium">Advanced Marketing Strategies</h4>
                      <p className="text-sm text-gray-500 mt-1">4 hours • 65% complete</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition cursor-pointer">
                      <h4 className="font-medium">Financial Forecasting</h4>
                      <p className="text-sm text-gray-500 mt-1">3 hours • Not started</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-gray-300 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition cursor-pointer">
                      <h4 className="font-medium">Customer Retention Techniques</h4>
                      <p className="text-sm text-gray-500 mt-1">2.5 hours • 20% complete</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-800 mb-3">Your Achievements</h3>
                  <div className="flex space-x-4">
                    <div className="bg-white rounded-lg p-3 text-center border border-yellow-300">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                      <p className="font-medium text-sm mt-2">Budget Master</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-yellow-300">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                      <p className="font-medium text-sm mt-2">Loan Pro</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Badges
                  </Button>
                </div>
              </Sidebar>
            </div>
          </div>
        )}
        
        {activeTab === 'community' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Community Forum</h2>
                
                <div className="mb-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
                    </div>
                    <div className="flex-1">
                      <textarea 
                        className="w-full border border-gray-300 rounded-lg p-4" 
                        placeholder="Ask a question or share your experience with the community..."
                        rows={3}
                      ></textarea>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-sm text-gray-500">
                          Tips: Be specific, include relevant details, and be respectful
                        </div>
                        <Button variant="primary">Post</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">Raj Patel</h3>
                          <span className="text-sm text-gray-500 ml-2">• 2 hours ago</span>
                        </div>
                        <p className="mt-1">
                          Has anyone used digital marketing to attract local customers? I'm trying to
                          increase foot traffic to my convenience store.
                        </p>
                        <div className="flex space-x-4 mt-3">
                          <button className="text-sm text-blue-600">12 Comments</button>
                          <button className="text-sm text-gray-500">Like</button>
                          <button className="text-sm text-gray-500">Share</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">Fatima Hassan</h3>
                          <span className="text-sm text-gray-500 ml-2">• 5 hours ago</span>
                        </div>
                        <p className="mt-1">
                          Just completed the Financial Basics course! The budgeting templates are 
                          game-changers for my small restaurant. Highly recommend!
                        </p>
                        <div className="flex space-x-4 mt-3">
                          <button className="text-sm text-blue-600">8 Comments</button>
                          <button className="text-sm text-gray-500">Like</button>
                          <button className="text-sm text-gray-500">Share</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Sidebar>
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4">Community Groups</h3>
                  <div className="space-y-4">
                    {communityGroups.map((group, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition cursor-pointer">
                        <h4 className="font-medium">{group.name}</h4>
                        <div className="flex text-sm text-gray-500 mt-2">
                          <span>{group.members} members</span>
                          <span className="mx-2">•</span>
                          <span className="text-green-600">{group.active}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Explore All Groups
                  </Button>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-800 mb-3">Weekly Challenge</h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Implement one new financial tracking technique this week and share your experience
                  </p>
                  <Button variant="primary" className="w-full">
                    Join Challenge
                  </Button>
                </div>
              </Sidebar>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessUpskillingScreen;
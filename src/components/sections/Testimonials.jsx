import React from 'react';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Boutique Owner',
      content: 'This platform helped me understand business finances and secure my first loan. My revenue increased by 40% in just 3 months!',
      rating: 5
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Cafe Owner',
      content: 'The courses on financial management transformed how I run my business. I learned to track expenses and maximize profits.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sunita Devi',
      role: 'Handicraft Artisan',
      content: 'As someone with no formal education, the simple explanations and voice interface made financial concepts accessible to me.',
      rating: 4
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-semibold text-xl text-gray-800 mb-6">Success Stories</h3>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-4" />
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{testimonial.content}</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={i < testimonial.rating ? 'fill-current' : ''} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
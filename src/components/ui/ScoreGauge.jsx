import React from 'react';

const ScoreGauge = ({ value, max = 100, size = 160, color = 'primary' }) => {
  const colors = {
    primary: 'text-blue-600',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600'
  };
  
  const percentage = (value / max) * 100;
  const strokeDasharray = 2 * Math.PI * 70;
  const strokeDashoffset = strokeDasharray * ((100 - percentage) / 100);
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox="0 0 180 180">
        <circle
          cx="90"
          cy="90"
          r="70"
          stroke="#e5e7eb"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx="90"
          cy="90"
          r="70"
          stroke="currentColor"
          className={colors[color]}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-gray-500">out of {max}</span>
      </div>
    </div>
  );
};

export default ScoreGauge;
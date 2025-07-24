import React from 'react';
import { FiStar } from 'react-icons/fi';

const Rating = ({ value, onChange, size = 'md', interactive = false }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  const handleClick = (newValue) => {
    if (interactive && onChange) {
      onChange(newValue);
    }
  };
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          className={`${sizes[size]} ${
            interactive ? 'cursor-pointer' : 'cursor-default'
          } ${
            star <= value ? 'text-yellow-400' : 'text-gray-300'
          }`}
          disabled={!interactive}
        >
          <FiStar className={star <= value ? 'fill-current' : ''} />
        </button>
      ))}
    </div>
  );
};

export default Rating;
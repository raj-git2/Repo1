import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <div className="space-y-6 sticky top-24">
      {children}
    </div>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
      </button>
      {isVisible && (
        <div className="sidebar">
          <div className="filter">
            <label>CUSTOMIZABLE</label>
            <select><option>All</option></select>
          </div>
          <div className="filter">
            <label>IDEAL FOR</label>
            <select><option>All</option></select>
          </div>
          {/* Add other filters similarly */}
        </div>
      )}
    </div>
  );
}

export default Sidebar;

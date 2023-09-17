// DarkModeToggle.js

import React, { useState } from 'react';

const DarkLightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleMode}>
    Toggle Dark Mode
  </button>
  );
};

export default DarkLightMode;

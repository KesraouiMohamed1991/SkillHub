import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === 'true');
    // Apply or remove the 'dark' class to the body based on the dark mode state
    document.body.classList.toggle('dark', storedDarkMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    // Apply or remove the 'dark' class to the body based on the updated dark mode state
    document.body.classList.toggle('dark', newDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

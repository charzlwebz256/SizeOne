
import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import SplashScreen from './components/SplashScreen';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`w-screen h-screen font-sans text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-black transition-colors duration-300 flex items-center justify-center p-0 md:p-4`}>
      {showSplash ? <SplashScreen /> : (
        <div className="w-full h-full md:max-w-3xl md:h-[calc(100vh-4rem)] md:max-h-[900px] md:rounded-2xl md:shadow-2xl overflow-hidden">
          <ChatInterface />
        </div>
      )}
    </div>
  );
};

export default App;

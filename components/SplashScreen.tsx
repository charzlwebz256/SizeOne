
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 animate-fade-in">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-accent to-blue-400 text-transparent bg-clip-text">
            SizeOne
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Your Smart Q&A Assistant</p>
      </div>
      <div className="absolute bottom-16 flex items-center space-x-2">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse-fast"></div>
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse-fast animation-delay-300"></div>
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse-fast animation-delay-600"></div>
      </div>
    </div>
  );
};

export default SplashScreen;

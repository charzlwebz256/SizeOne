
import React from 'react';
import { MenuIcon, SunIcon, MoonIcon } from './icons';

interface HeaderProps {
  onMenuClick: () => void;
  onThemeToggle: () => void;
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onThemeToggle, theme }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
      <button onClick={onMenuClick} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <MenuIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
      <h1 className="text-xl font-bold">
        <span className="bg-gradient-to-r from-accent to-blue-400 text-transparent bg-clip-text">
          SizeOne
        </span>
      </h1>
      <button onClick={onThemeToggle} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        {theme === 'light' ? <MoonIcon className="w-6 h-6 text-gray-600" /> : <SunIcon className="w-6 h-6 text-yellow-400" />}
      </button>
    </header>
  );
};

export default Header;

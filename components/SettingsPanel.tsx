
import React from 'react';
import { CloseIcon } from './icons';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  creativity: number;
  setCreativity: (value: number) => void;
  clearChat: () => void;
  saveChat: boolean;
  setSaveChat: (value: boolean) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  creativity,
  setCreativity,
  clearChat,
  saveChat,
  setSaveChat,
}) => {
  if (!isOpen) return null;

  const handleClearChat = () => {
    clearChat();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 animate-fade-in" onClick={onClose}>
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Settings</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 flex-grow">
          <div>
            <label htmlFor="creativity-slider" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              AI Creativity (Temperature)
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <input
                id="creativity-slider"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={creativity}
                onChange={(e) => setCreativity(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                style={{accentColor: '#0A84FF'}}
              />
              <span className="font-mono text-sm w-8 text-center">{creativity.toFixed(1)}</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Lower values are more factual, higher are more creative.</p>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="save-chat-toggle" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Save Conversation History
            </label>
            <button
              id="save-chat-toggle"
              onClick={() => setSaveChat(!saveChat)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                saveChat ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  saveChat ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 -mt-4">Your chats are saved only on this device.</p>
          
          <div>
            <button
              onClick={handleClearChat}
              className="w-full text-center px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              Clear Chat History
            </button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="font-semibold mb-2">Disclaimer</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SizeOne is an experimental AI. Responses may be inaccurate or incomplete. Do not rely on it for important advice. Your conversations may be used to improve our services, unless saving is disabled.
              </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400">
            <p>Made with ❤️ and AI</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;

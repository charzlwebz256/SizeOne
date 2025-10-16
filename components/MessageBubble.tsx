
import React, { useState } from 'react';
import { Message, Sender } from '../types';
import { CopyIcon, SpeakerIcon } from './icons';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const { speak, isSpeaking, hasSupport } = useTextToSpeech();

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleSpeak = () => {
      if (!isSpeaking) {
          speak(message.text);
      }
  };

  const isUser = message.sender === Sender.User;
  const isAI = message.sender === Sender.AI;
  const isSystem = message.sender === Sender.System;

  if (isSystem) {
    return (
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 animate-fade-in">{message.text}</div>
    );
  }

  return (
    <div className={`flex items-start gap-3 animate-slide-in-bottom ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-400 rounded-full flex-shrink-0"></div>
      )}
      <div className={`group relative max-w-sm md:max-w-md lg:max-w-lg`}>
        <div className={`px-4 py-3 rounded-2xl ${isUser ? 'bg-accent text-white rounded-br-lg' : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-lg'}`}>
          <p className="whitespace-pre-wrap">{message.text}</p>
        </div>
        {isAI && (
            <div className="absolute -bottom-4 right-0 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={handleCopy} className="p-1 rounded-full text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <CopyIcon className="w-4 h-4" />
                </button>
                 {hasSupport && (
                    <button onClick={handleSpeak} disabled={isSpeaking} className="p-1 rounded-full text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700">
                        <SpeakerIcon className="w-4 h-4" />
                    </button>
                )}
            </div>
        )}
        {copied && <div className="absolute -bottom-4 right-10 text-xs bg-black text-white px-2 py-1 rounded">Copied!</div>}
      </div>
    </div>
  );
};

export default MessageBubble;

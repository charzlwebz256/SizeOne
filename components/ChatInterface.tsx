
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Message, Sender } from '../types';
import { getFactualResponse, getCreativeResponse, getHybridResponse } from '../services/geminiService';
import Header from './Header';
import ChatInput from './ChatInput';
import MessageBubble from './MessageBubble';
import SettingsPanel from './SettingsPanel';
import { useTheme } from '../hooks/useTheme';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
  const savedMessages = localStorage.getItem('sizeone-chat');
    return savedMessages ? JSON.parse(savedMessages) : [
      { id: '1', text: "Hello! I'm SizeOne. Ask me anything.", sender: Sender.AI, timestamp: new Date().toISOString() }
    ];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [creativity, setCreativity] = useState(0.7);
  const [saveChat, setSaveChat] = useState(true);

  const { theme, toggleTheme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (saveChat) {
      localStorage.setItem('sizeone-chat', JSON.stringify(messages));
    }
  }, [messages, saveChat]);

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: Sender.User,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const [factual, creative] = await Promise.all([
        getFactualResponse(inputText),
        getCreativeResponse(inputText, creativity),
      ]);

      const hybrid = await getHybridResponse(inputText, factual, creative);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: hybrid,
        sender: Sender.AI,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, an error occurred. Please check your API key and try again.",
        sender: Sender.System,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, creativity]);

  const clearChat = () => {
    const newMessages: Message[] = [
      { id: '1', text: "Chat cleared. I'm ready for a new conversation!", sender: Sender.AI, timestamp: new Date().toISOString() }
    ];
    setMessages(newMessages);
  localStorage.removeItem('sizeone-chat');
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      <Header 
        onMenuClick={() => setIsSettingsOpen(true)} 
        onThemeToggle={toggleTheme} 
        theme={theme} 
      />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg, index) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start items-center space-x-3 animate-fade-in">
             <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-400 rounded-full flex-shrink-0"></div>
             <div className="flex items-center space-x-1 p-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse-fast" style={{animationDelay: '0s'}}></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse-fast" style={{animationDelay: '0.2s'}}></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse-fast" style={{animationDelay: '0.4s'}}></span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        creativity={creativity}
        setCreativity={setCreativity}
        clearChat={clearChat}
        saveChat={saveChat}
        setSaveChat={setSaveChat}
      />
    </div>
  );
};

export default ChatInterface;

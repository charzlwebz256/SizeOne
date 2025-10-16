
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { MicIcon, SendIcon } from './icons';
import { useSpeechToText } from '../hooks/useSpeechToText';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTranscript = (transcript: string) => {
    setText(prev => (prev ? `${prev} ${transcript}` : transcript));
  };

  const { isListening, error, startListening, stopListening, hasSupport } = useSpeechToText(handleTranscript);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [text]);

  const handleSubmit = () => {
    if (text.trim() && !isLoading) {
      onSendMessage(text);
      setText('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-end bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isListening ? 'Listening...' : 'Ask SizeOne...'}
          className="flex-1 bg-transparent resize-none outline-none p-2 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          rows={1}
          disabled={isLoading}
          aria-label="Chat input"
        />
        {hasSupport && (
          <button
            onClick={isListening ? stopListening : startListening}
            className={`p-2 rounded-full transition-colors ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'text-gray-500 hover:text-accent dark:hover:text-accent-light'
            }`}
            disabled={isLoading}
            aria-label={isListening ? 'Stop listening' : 'Start voice input'}
          >
            <MicIcon className="w-6 h-6" />
          </button>
        )}
        <button
          onClick={handleSubmit}
          disabled={isLoading || !text.trim()}
          className="ml-2 p-2 rounded-full bg-accent hover:bg-accent-light disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          aria-label="Send message"
        >
          <SendIcon className="w-6 h-6 text-white" />
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1 text-center" role="alert">{error}</p>}
    </div>
  );
};

export default ChatInput;

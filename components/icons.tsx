
import React from 'react';

export const MicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 14a2 2 0 0 1-2-2V6a2 2 0 1 1 4 0v6a2 2 0 0 1-2 2zm-1-9a1 1 0 0 0-1 1v6a3 3 0 0 0 6 0V6a1 1 0 0 0-1-1h-4zm7 6a1 1 0 0 1-1 1 5 5 0 0 1-10 0 1 1 0 1 1 2 0 3 3 0 0 0 6 0 1 1 0 0 1 1-1zM4 11a1 1 0 0 1 1 1v1a6 6 0 0 0 12 0v-1a1 1 0 1 1 2 0v1a8 8 0 0 1-7 7.93V22a1 1 0 1 1-2 0v-1.07A8 8 0 0 1 4 12v-1a1 1 0 0 1 1-1z"/>
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zM12 9a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0-7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.64 5.64a1 1 0 0 1 1.41-1.41l1.41 1.41a1 1 0 0 1-1.41 1.41zm12.72 12.72a1 1 0 0 1-1.41 1.41l-1.41-1.41a1 1 0 1 1 1.41-1.41zM2 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM5.64 18.36a1 1 0 0 1-1.41-1.41l1.41-1.41a1 1 0 1 1 1.41 1.41zm12.72-12.72a1 1 0 0 1 1.41 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41z"/>
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM11.1 4.31a1 1 0 0 1 1.8 0l.6 1.2a1 1 0 0 0 .76.55l1.32.19a1 1 0 0 1 .59 1.7l-.95 1.05a1 1 0 0 0-.29.88l.22 1.32a1 1 0 0 1-1.45 1.05l-1.18-.62a1 1 0 0 0-.93 0l-1.18.62a1 1 0 0 1-1.45-1.05l.22-1.32a1 1 0 0 0-.29-.88l-.95-1.05a1 1 0 0 1 .59-1.7l1.32-.19a1 1 0 0 0 .76-.55z"/>
  </svg>
);

export const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
);

export const SpeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
);

// src/components/ChatInterface.tsx
import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { Message } from '../types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    setIsLoading(true);
    try {
      const response = await API.post('chatApi', '/chat', {
        body: { message: content }
      });
      setMessages([...messages, response]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
};
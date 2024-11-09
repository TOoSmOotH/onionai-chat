// src/components/ChatInterface.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

const ChatContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const MessagesArea = styled.div`
  flex: 1;
  padding: 20px;
  background: #fff;
  overflow-y: auto;
  min-height: 300px;
`;

export const ChatInterface = () => {
  console.log('ChatInterface rendering'); // Debug log

  const [messages, setMessages] = useState([
    // Test message to verify rendering
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      timestamp: new Date().toISOString(),
      sender: 'ai'
    }
  ]);

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content); // Debug log
    const newMessage = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toISOString(),
      sender: 'user'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContainer>
      <MessagesArea>
        <MessageList messages={messages} />
      </MessagesArea>
      <MessageInput onSend={handleSendMessage} />
    </ChatContainer>
  );
};
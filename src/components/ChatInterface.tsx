// src/components/ChatInterface.tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { Message } from '../types'; // Add Message type import

const MessagesArea = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 500px;
`;

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      timestamp: new Date().toISOString(),
      sender: 'ai'
    }
  ]);

  const handleSendMessage = (content: string) => {
    setMessages([...messages, { 
      id: Date.now().toString(),
      content,
      timestamp: new Date().toISOString(),
      sender: 'user' as const
    }]);
  };

  return (
    <ChatWrapper>
      <MessagesArea>
        <MessageList messages={messages} />
      </MessagesArea>
      <MessageInput onSend={handleSendMessage} />
    </ChatWrapper>
  );
};
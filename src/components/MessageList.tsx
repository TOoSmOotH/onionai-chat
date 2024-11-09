// src/components/MessageList.tsx
import React from 'react';
import styled from '@emotion/styled';
import { Message } from '../types';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background: ${props => props.isUser ? '#007AFF' : '#E9ECEF'};
  color: ${props => props.isUser ? 'white' : 'black'};
`;

const Timestamp = styled.span`
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 0.25rem;
  text-align: right;
`;

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <MessageContainer>
      {messages.map((message) => (
        <div key={message.id}>
          <MessageBubble isUser={message.sender === 'user'}>
            {message.content}
            <Timestamp>
              {new Date(message.timestamp).toLocaleTimeString()}
            </Timestamp>
          </MessageBubble>
        </div>
      ))}
    </MessageContainer>
  );
};
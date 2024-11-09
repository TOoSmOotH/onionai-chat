// src/components/MessageList.tsx
import React from 'react';
import styled from '@emotion/styled';
import { Message } from '../types';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MessageWrapper = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
  width: 100%;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 70%;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme, isUser }) => 
    isUser 
      ? theme.colors.messageBubble.user.background 
      : theme.colors.messageBubble.ai.background};
  color: ${({ theme, isUser }) => 
    isUser 
      ? theme.colors.messageBubble.user.text 
      : theme.colors.messageBubble.ai.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <MessageContainer>
      {messages.map((message) => (
        <MessageWrapper key={message.id} isUser={message.sender === 'user'}>
          <MessageBubble isUser={message.sender === 'user'}>
            {message.content}
          </MessageBubble>
        </MessageWrapper>
      ))}
    </MessageContainer>
  );
};
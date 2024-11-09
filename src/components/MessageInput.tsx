// src/components/MessageInput.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-top: 1px solid #eee;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  
  &:focus {
    border-color: #007AFF;
  }
  
  &:disabled {
    background: #f5f5f5;
  }
`;

const SendButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #007AFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover:not(:disabled) {
    background: #0056b3;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

interface Props {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const MessageInput: React.FC<Props> = ({ 
  onSend, 
  disabled = false,
  placeholder = "Type a message..." 
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
        <SendButton type="submit" disabled={!message.trim() || disabled}>
          Send
        </SendButton>
      </InputWrapper>
    </form>
  );
};
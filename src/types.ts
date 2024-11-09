// src/types.ts
export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'ai';
}
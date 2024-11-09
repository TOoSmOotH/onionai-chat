// src/theme/index.ts
import { Theme } from './types';

export const lightTheme: Theme = {
  colors: {
    primary: '#007AFF',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#000000',
    border: '#dee2e6',
    inputBg: '#ffffff',
    buttonText: '#ffffff',
    messageBubble: {
      user: {
        background: '#007AFF',
        text: '#ffffff'
      },
      ai: {
        background: '#E8E8E8',
        text: '#333333'
      }
    }
  },
  layout: {
    maxWidth: '960px', // Reduced from 1200px
    padding: '0 2rem',
    containerPadding: '2rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  isDark: false
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    primary: '#0A84FF',
    background: '#1c1c1e',
    surface: '#2c2c2e',
    text: '#ffffff',
    border: '#3a3a3c',
    inputBg: '#1c1c1e',
    buttonText: '#ffffff',
    messageBubble: {
      user: {
        background: '#0A84FF',
        text: '#ffffff'
      },
      ai: {
        background: '#E8E8E8',
        text: '#333333'
      }
    }
  },
  isDark: true
};

// Re-export types
export type { Theme } from './types';
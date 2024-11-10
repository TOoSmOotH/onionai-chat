// src/theme/index.ts

export const lightTheme = {
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
    maxWidth: '960px',
    padding: '1rem',
    containerPadding: '2rem'
  },
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    xxl: '6rem'      // 96px - Increased from 4rem
  },
  isDark: false
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#0A84FF',
    background: '#1c1c1e',
    surface: '#2c2c2e',
    text: '#ffffff',
    border: '#3a3a3c',
    inputBg: '#1c1c1e',
    buttonText: '#ffffff',
    messageBubble: {
      ...lightTheme.colors.messageBubble
    }
  },
  isDark: true
};
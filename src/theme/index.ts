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
    buttonText: '#ffffff'
  },
  isDark: false
};

export const darkTheme: Theme = {
  colors: {
    primary: '#0A84FF',
    background: '#1c1c1e',
    surface: '#2c2c2e',
    text: '#ffffff',
    border: '#3a3a3c',
    inputBg: '#1c1c1e',
    buttonText: '#ffffff'
  },
  isDark: true
};
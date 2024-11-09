// src/components/ThemeToggle.tsx
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? '☀️' : '🌙'}
    </ToggleButton>
  );
};
// src/components/ThemeToggle.tsx
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
`;

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </ToggleButton>
  );
};
// src/components/ThemeToggle.tsx
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.isDark ? theme.colors.primary : '#ccc'};
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${({ theme }) => theme.isDark ? 'translateX(26px)' : 'translateX(0)'};
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Switch>
      <Input 
        type="checkbox" 
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Slider />
    </Switch>
  );
};
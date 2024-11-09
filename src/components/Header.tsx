// src/components/Header.tsx
import styled from '@emotion/styled';
import { ThemeToggle } from './ThemeToggle';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-size: 1.5rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>OnionAI Chat</Title>
      <ThemeToggle />
    </HeaderContainer>
  );
};
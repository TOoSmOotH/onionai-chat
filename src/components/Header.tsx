// src/components/Header.tsx
import styled from '@emotion/styled';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../hooks';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
`;

const RightSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const AuthButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <HeaderContainer>
      <h1>OnionAI Chat</h1>
      <RightSection>
        <ThemeToggle />
        {isAuthenticated ? (
          <AuthButton onClick={logout}>Logout</AuthButton>
        ) : (
          <AuthButton onClick={() => window.location.href = '/login'}>Login</AuthButton>
        )}
      </RightSection>
    </HeaderContainer>
  );
};
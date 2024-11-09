// src/components/Footer.tsx
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Security Onion Solutions
    </FooterContainer>
  );
};
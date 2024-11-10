// src/styles/shared.ts
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 800px; // Reduced from 960px
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;
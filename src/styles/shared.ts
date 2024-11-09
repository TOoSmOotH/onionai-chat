// src/styles/shared.ts
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
  }
`;
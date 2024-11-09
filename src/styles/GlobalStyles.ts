// src/styles/GlobalStyles.ts
import { css } from '@emotion/react';
import { Theme } from '../theme/types';

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, system-ui, sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  input, button {
    font-family: inherit;
  }
`;
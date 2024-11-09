// src/styles/GlobalStyles.ts
import { css } from '@emotion/react';

export const globalStyles = (theme) => css`
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
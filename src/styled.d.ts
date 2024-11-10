// src/styled.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      background: string;
      surface: string;
      text: string;
      border: string;
      inputBg: string;
      buttonText: string;
      messageBubble: {
        user: {
          background: string;
          text: string;
        };
        ai: {
          background: string;
          text: string;
        };
      };
    };
    layout: {
      maxWidth: string;
      padding: string;
      containerPadding: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    isDark: boolean;
  }
}

// Remove explicit theme prop requirements from components
const StyledComponent = styled.div`
  // Theme is now automatically inferred
  color: ${({ theme }) => theme.colors.text};
`;
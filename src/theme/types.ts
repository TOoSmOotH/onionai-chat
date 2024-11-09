// src/theme/types.ts

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
    };
    layout: {
      maxWidth: string;
      padding: string;
      headerHeight: string;
      footerHeight: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    isDark: boolean;
  }
}

export type { Theme } from '@emotion/react';
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
    isDark: boolean;
  }
}

export type { Theme } from '@emotion/react';
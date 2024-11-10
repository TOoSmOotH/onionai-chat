// src/amplifyconfiguration/index.ts
import { ResourcesConfig } from 'aws-amplify';

export const amplifyconfiguration: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_USER_POOL_ID || '',
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID || '',
      signUpVerificationMethod: 'code',
    }
  },
  API: {
    REST: {
      chatApi: {
        endpoint: import.meta.env.VITE_API_ENDPOINT || '',
        region: import.meta.env.VITE_REGION || 'us-east-1'
      }
    }
  }
};
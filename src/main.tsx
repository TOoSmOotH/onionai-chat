import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log('Main.tsx loading...')

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found')
  throw new Error('Root element not found')
}

console.log('Creating React root...')

const apiUrl = import.meta.env.VITE_API_URL;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

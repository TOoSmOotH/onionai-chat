import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ChatInterface } from './components/ChatInterface';
import { amplifyconfiguration } from './amplifyconfiguration';
import styled from '@emotion/styled';

console.log('App starting...'); // Debug log

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: #f5f5f5;
`;

Amplify.configure(amplifyconfiguration);

function App() {
  console.log('App rendering...'); // Debug log

  return (
    <Container>
      <h1>OnionAI Chat</h1>
      <div style={{background: '#fff', padding: '20px', borderRadius: '8px'}}>
        <ChatInterface />
      </div>
    </Container>
  );
}

export default App;

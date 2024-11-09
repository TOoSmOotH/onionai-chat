import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ChatInterface } from './components/ChatInterface';
import { amplifyconfiguration } from './amplifyconfiguration';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { ThemeProvider } from './context/ThemeContext';
import { globalStyles } from './styles/GlobalStyles';
import { ThemeToggle } from './components/ThemeToggle';

console.log('App starting...'); // Debug log

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease;
`;

const ChatContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px ${props => 
    props.theme.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)'
  };
`;

Amplify.configure(amplifyconfiguration);

function App() {
  console.log('App rendering...'); // Debug log

  return (
    <ThemeProvider>
      <Global styles={theme => globalStyles(theme)} />
      <ThemeToggle />
      <Container>
        <h1>OnionAI Chat</h1>
        <ChatContainer>
          <ChatInterface />
        </ChatContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

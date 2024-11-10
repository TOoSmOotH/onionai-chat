import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { ChatInterface } from './components/ChatInterface';
import { amplifyconfiguration } from './amplifyconfiguration';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { ThemeProvider } from './context/ThemeContext';
import { globalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

Amplify.configure(amplifyconfiguration);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Global styles={globalStyles} />
        <Container>
          <Header />
          <ChatInterface />
          <Footer />
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

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
import { Container } from './styles/shared';

const Content = styled.main`
  flex: 1;
`;

Amplify.configure(amplifyconfiguration);

function App() {
  return (
    <ThemeProvider>
      <Global styles={globalStyles} />
      <Container>
        <Header />
        <ChatInterface />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

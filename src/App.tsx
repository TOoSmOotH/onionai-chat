import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { ChatInterface } from './components/ChatInterface';
import { amplifyconfiguration } from './amplifyconfiguration';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { ThemeProvider } from './context/ThemeContext';
import { globalStyles } from './styles/GlobalStyles';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
`;

Amplify.configure(amplifyconfiguration);

function App() {
  return (
    <ThemeProvider>
      <Global styles={globalStyles} />
      <Container>
        <ChatInterface />
      </Container>
    </ThemeProvider>
  );
}

export default App;

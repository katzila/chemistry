import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Containers/Routes';
import LayoutContainer from './Containers/layout/LayoutContainer';

type Props = {}


const queryClient = new QueryClient();


const App = (props: Props) => {
  // const [mode, setMode] = React.useState('light')

  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LayoutContainer>
            <Routes />
          </LayoutContainer>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Containers/Routes';
import MainComponent from './Containers/layout/MainComponent';

type Props = {}


const queryClient = new QueryClient();


const App = (props: Props) => {
  // const [mode, setMode] = React.useState('light')


  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainComponent>
            <Routes />
          </MainComponent>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App

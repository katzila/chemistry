import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { useGLTF } from '@react-three/drei';

import { theme } from './theme';
import Routes from './Containers/Routes';
import LayoutContainer from './Containers/layout/LayoutContainer';
import { MODEL_NAME_MAP } from './constants';


const queryClient = new QueryClient();

const App = () => {
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

useGLTF.preload(Object.values(MODEL_NAME_MAP).map((modelName) => `/${modelName}.glb`))

export default App

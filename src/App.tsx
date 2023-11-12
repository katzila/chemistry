import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { useGLTF } from '@react-three/drei';
import { createTheme } from "@mui/material";

import { DEFAULT_THEME } from './theme';
import Routes from './Containers/Routes';
import LayoutContainer from './Containers/layout/LayoutContainer';
import { MODEL_NAME_MAP } from './constants';
import useDarkModeStore from './stores/darkModeStore';


const queryClient = new QueryClient();

const App = () => {
  const { darkMode } = useDarkModeStore()

  const theme = React.useMemo(
    () =>
      createTheme({
        ...DEFAULT_THEME,
        palette: {
          ...DEFAULT_THEME.palette,
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  )

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

import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import MainComponent from './components/layout/MainComponent';
import { PaletteMode } from '@mui/material';

type Props = {}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));


const App = (props: Props) => {
  const [mode, setMode] = React.useState('light')

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      mode: mode as PaletteMode
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <MainComponent setMode={setMode} />
    </ThemeProvider>
  );
}

export default App

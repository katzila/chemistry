import { Box, useTheme } from '@mui/material';
import React, { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router';

import Header from './Header';


type Props = {
  children?: ReactNode
}


const LayoutContainer = (props: Props) => {
  const location = useLocation()
  const theme = useTheme()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash])

  return (
    <div id='app' style={{ minHeight: '100vh', background: theme.palette.background.paper }} >
      <Header />
      <Box component="div" >
        {props.children}
      </Box>
    </div>
  )
}

export default LayoutContainer
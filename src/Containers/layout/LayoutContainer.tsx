import { Box } from '@mui/material';
import React, { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router';

import Header from './Header';


type Props = {
  children?: ReactNode
}


const LayoutContainer = (props: Props) => {
  const location = useLocation()

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
    <div id='app' >
      <Header />
      <Box component="div" >
        {props.children}
      </Box>
    </div>
  )
}

export default LayoutContainer
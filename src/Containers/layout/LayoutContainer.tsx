import { Box } from '@mui/material';
import React, { ReactNode } from 'react'

import Header from './Header';


type Props = {
  children?: ReactNode
}


const LayoutContainer = (props: Props) => {
  // const [t] = useTranslation();

  return (
    <div id='app' >
      <Header />
      <Box >
        {props.children}
      </Box>
    </div>
  )
}

export default LayoutContainer
import { Box, Paper } from '@mui/material';
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
      <Box sx={{ padding: '1em' }}>
        <Paper>
          {props.children}

        </Paper>
      </Box>

    </div>
  )
}

export default LayoutContainer
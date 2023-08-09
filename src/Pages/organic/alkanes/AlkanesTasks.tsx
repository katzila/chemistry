import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

type Props = {

}

export const AlkanesTasks = (props: Props) => {

  return (
    <Paper  >
      <Box component="div" sx={{ p: 3 }}>
        <Typography>AlkanesTasks</Typography>
      </Box>
    </Paper>
  )
}

export default AlkanesTasks
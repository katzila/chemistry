import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <Box sx={{ padding: '1em' }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant='h2'>
          about
        </Typography>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Libero debitis id quod repellendus hic dolorem cum,
        amet optio magnam aperiam, quisquam quibusdam. Quod,
        molestias? Eaque error quo numquam maxime soluta.
      </Paper>
    </Box>
  )
}

export default Home
import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { CustomCheckbox } from '../../App'
import { styled } from '@mui/material/styles'

type Props = {
  setMode: Function
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'red',
}));

const MainComponent = (props: Props) => {
  const {
    setMode
  } = props

  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <CustomCheckbox onChange={(e, data) => data ? setMode('dark') : setMode('light')} />
        </Grid>
        <Grid item xs={8}>
          <Item>322</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainComponent
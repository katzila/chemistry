import { Box, Paper, Tab, Tabs } from '@mui/material';
import React, { ReactNode, useState } from 'react'


interface PageTemplateProps {
  Guide: ReactNode
  Tasks: ReactNode
  GuideLabel: string
  TasksLabel: string
}


const PageTemplate = (props: PageTemplateProps) => {
  const { Guide, GuideLabel, Tasks, TasksLabel } = props
  const [value, setValue] = useState('Guide');

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label={GuideLabel} value='Guide' />
          <Tab label={TasksLabel} value='Tasks' />
        </Tabs>
      </Box>
      <Box sx={{ p: 2 }}>
        <Paper>
          {value === 'Guide' && Guide}
          {value === 'Tasks' && Tasks}
        </Paper>
      </Box>
    </Box>
  )
}

export default PageTemplate
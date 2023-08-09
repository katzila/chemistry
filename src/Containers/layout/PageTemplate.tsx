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
  const [value, setValue] = useState('guide');

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box component="div" sx={{ width: '100%' }}>
      <Box component="div" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label={GuideLabel} value='guide' />
          <Tab label={TasksLabel} value='tasks' />
        </Tabs>
      </Box>
      <Box component="div" sx={{ p: 2 }}>
        {value === 'guide' && Guide}
        {value === 'tasks' && Tasks}
      </Box>
    </Box>
  )
}

export default PageTemplate